import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../service/user-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IUser} from '../iuser';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  id: number;
  user: IUser;
  userForm: FormGroup;

  constructor(private userService: UserServiceService,
              private activate: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [''],
      number_phone: [''],
      email: [''],
    });
    this.activate.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id');
      this.userService.getUserById(this.id).subscribe(value => {
        this.user = value;
        this.userForm.patchValue({
          name: this.user.name,
          number_phone: this.user.number_phone,
          email: this.user.email,
        });
      });
    });
  }

  getUserById(id) {
    this.userService.getUserById(id).subscribe(result => {
      this.user = result;
      console.log(result);
    }, error => {
      console.log(error.toString());
    });
  }

  editUser() {
    if (!this.userForm.invalid){
      this.user.name = this.userForm.value.name;
      this.user.number_phone = this.userForm.value.number_phone;
      this.user.email = this.userForm.value.email;
      console.log(this.user);
      this.userService.updateUser(this.user).subscribe(value => {
        alert('Update thanh cong');
      });
      this.router.navigate(['list']);
      this.userService.getAllUser();
    }
  }
}
