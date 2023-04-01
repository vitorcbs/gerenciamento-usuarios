import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../services/user';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  users: User[] = [];

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(255)]),
      ],
      sobrenome: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(255)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      data: [
        '',
        Validators.compose([Validators.required, Validators.pattern('')]),
      ],
      escolaridade: ['', Validators.compose([Validators.required])],
    });
  }

  constructor(
    private service: UserService,
    private router: Router,
    private FormBuilder: FormBuilder
  ) {}

  createUser() {
    console.log(this.formulario.status);
    this.service.criar(this.formulario.value).subscribe(() => {
      this.service.listar().subscribe((users) => {
        this.users = users;
        location.reload();
      });
    });
  }
}
