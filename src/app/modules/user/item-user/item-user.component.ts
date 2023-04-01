import { Component, Input, OnInit } from '@angular/core';
import { User } from './../services/user';

@Component({
  selector: 'app-item-user',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.css'],
})
export class ItemUserComponent implements OnInit {
  @Input() user: User = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    data: new Date(''),
    escolaridade: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
