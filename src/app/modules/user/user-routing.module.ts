import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {
    path: 'user/edit/:id',
    component: EditUserComponent,
  },
  {
    path: 'user/remove/:id',
    component: RemoveUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
