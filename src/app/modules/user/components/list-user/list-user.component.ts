import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  listUser: User[] = [];
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaUser) => {
      console.log(listaUser);
      this.listUser = listaUser;
    });
  }
}
