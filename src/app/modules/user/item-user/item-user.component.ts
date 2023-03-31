import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-user',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.css'],
})
export class ItemUserComponent {
  user: FormGroup;

  constructor() {
    this.user = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      sobrenome: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      data: new FormControl('', [Validators.required, Validators.pattern('')]),
      escolaridade: new FormControl('', [Validators.required]),
      editing: new FormControl(false),
    });
  }
}
