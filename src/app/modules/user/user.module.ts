import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';
import { ItemUserComponent } from './item-user/item-user.component';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    ListUserComponent,
    UserComponent,
    ItemUserComponent,
    EditUserComponent,
    RemoveUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService, DatePipe],
})
export class UserModule {}
