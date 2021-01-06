import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../service/user-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IUser} from '../iuser';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  user: IUser;
  userForm: FormGroup;

  constructor(private userService: UserServiceService, private activate: ActivatedRoute,
              private fb: FormBuilder) {
  }

  prepareForm() {
    this.userForm = this.fb.group({
      name: [''],
      number_phone: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.activate.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.getUserById(id);
    });
    this.user = {
      id: 1,
      name: ' ',
      email: ' ',
      number_phone: ' '
    };
    this.prepareForm();


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
    let user: IUser = {
      id: this.user.id,
      name: this.userForm.get('name').value,
      number_phone: this.userForm.get('number_phone').value,
      email: this.userForm.get('email').value,
    };

    this.userService.updateUser(user).subscribe(result => {
      console.log(user);
      alert('Thanh cong!');
    }, error => {
      console.log(error);
    });
  }
}
