import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  modalRef: BsModalRef;
  isNew : Boolean = true;
  
  constructor(private userService: UserService, private modalService: BsModalService) { }

  ngOnInit() {
    this.resetForm();
     this.userService.getUsers();
   
  }

  resetForm(form?: NgForm) {
    if (form != null){
     form.reset();
    }
    this.isNew = true;
    this.userService.selectedUser = new User();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value._id == null ){
      this.userService.postUser(form.value)
      .subscribe(data => { 
        this.userService.getUsers();
        this.resetForm(form);
        this.modalRef.hide();
      });
    }
    else {
      this.userService.patchUser(form.value._id, form.value) 
      .subscribe(data => {
        this.userService.getUsers();
        this.resetForm(form);
        this.modalRef.hide();
      });
    }
  }

}
