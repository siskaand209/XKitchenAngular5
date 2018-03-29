import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
      <h2> Ini Employee Detail</h2>
      <div *ngFor="let employee of employess">
        <h2> ID: {{employee.id}}  Nama : {{ employee.name }} Umur : {{employee.age}}</h2>
      </div>`,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employess =[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployess()
      .subscribe(data => this.employess = data)
  }

}
