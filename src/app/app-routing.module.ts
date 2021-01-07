import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateUserComponent} from './update-user/update-user.component';
import {ListUserComponent} from './list-user/list-user.component';
import {CreateUserComponent} from './create-user/create-user.component';

const routes: Routes = [
  {
    path: 'edit/:id',
    component: UpdateUserComponent
  },
  {
    path: 'list',
    component: ListUserComponent
  },
  {
    path: 'create',
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
