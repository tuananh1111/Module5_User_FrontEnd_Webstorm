import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateUserComponent} from './update-user/update-user.component';

const routes: Routes = [
  {
    path: 'edit/:id',
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
