import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UserService } from '../../../services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
   this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null){
      this.resetForm();
    }
    this.userService.selectedUser = {
      _id : null, 
      userId : '',
      password : '',
      badgeId : '',
      nick : '',
      fullName :'',
    };
  }

  onSubmit(form: NgForm){
    if(form.value._id == null ){
      this.userService.postUser(form.value)
      .subscribe(data => { 
        this.userService.getUsers();
        this.resetForm(form);
      });
    }
    else {
      this.userService.patchUser(form.value._id, form.value) 
      .subscribe(data => {
        this.userService.getUsers();
        this.resetForm(form);
      });
    }


  }

}
