import {Component, OnInit} from '@angular/core';
import {IUser} from '../iuser';
import {UserServiceService} from '../service/user-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  // @ts-ignore
  list: IUser[];
  // @ts-ignore
  user: IUser;

  constructor(private service: UserServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): IUser[] {
    this.service.getAllUser().subscribe(
      (data: any) => {
        this.list = data;
      });
    return this.list;
  }


  // tslint:disable-next-line:typedef
  delete(id) {
      if (confirm('Are you sure?')){
        this.service.deleteUser(id).subscribe(value => {
          console.log(value);
          this.getAll();
        });
      }
  }
}
