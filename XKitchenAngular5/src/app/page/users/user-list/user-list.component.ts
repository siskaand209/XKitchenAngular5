import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/users.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();
  }

  onEdit(_id: String) {
    this.userService.getUser(_id);
  }
  
  onDelete(_id) {
    if (confirm('Are you sure delete this item?') === true) {
     this.userService.deleteUser(_id)
      .subscribe(x => {
        this.userService.getUsers();
      });
    }

  }

}
