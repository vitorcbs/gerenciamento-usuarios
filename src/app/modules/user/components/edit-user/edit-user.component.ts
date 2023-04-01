import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../services/user';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user: User = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    data: new Date(''),
    escolaridade: '',
  };

  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchUserId(parseInt(id!)).subscribe((user) => {
      this.user = user;
    });
  }

  editUser() {
    this.service.editar(this.user).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  cancelEdit() {
    this.router.navigate(['']);
  }
}
