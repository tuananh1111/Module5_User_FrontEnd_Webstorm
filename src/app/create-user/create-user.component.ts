import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../service/user-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IUser} from '../iuser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
   // @ts-ignore
  userForm: FormGroup;
  constructor(private service: UserServiceService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [null],
      number_phone: [null],
      email: [null]
    });
  }
  // tslint:disable-next-line:typedef
  createUser(){
   const user: IUser = this.userForm.value;
   console.log(user);
   this.service.createUser(user).subscribe(() =>
   {alert('Them moi thanh cong');
   this.router.navigate(['list']);
   }, error => {alert('Loi roi');
   });
  }
}
