import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ItemUserComponent } from './item-user/item-user.component';

@NgModule({
  declarations: [CreateUserComponent, ListUserComponent, UserComponent, ItemUserComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [UserService],
})
export class UserModule {}
