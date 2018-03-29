import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2> Ini Employee List</h2>
    <ul *ngFor="let employee of employess">
    <li> Nama : {{ employee.name }}</li>
    </ul>
    <h1>{{ errorMessage}} </h1>`
    ,

  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employess = [];
  public errorMessage = "";
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployess()
      .subscribe(data => this.employess = data, 
                error => this.errorMessage = error);
  }

}
