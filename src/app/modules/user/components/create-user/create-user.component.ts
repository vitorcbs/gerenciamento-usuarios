import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      sobrenome: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      data: new FormControl('', [
        Validators.required,
        Validators.pattern(
          ''
        ),
      ]),
      educacao: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
}
