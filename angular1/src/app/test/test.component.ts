import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{ name | lowercase}} </h2>
  <h2>{{ name | uppercase}} </h2>
  <h2>{{ name | titlecase}} </h2>
  <h2>{{ name | slice:0:7}} </h2>
  <h2>{{ jsonString | json }}</h2>
  <h2>{{ numberX | number :'1.1-2'}} </h2>
  <h2>{{ 0.75 |percent }} </h2>
  <h2>{{ numberX | currency: 'IDR'}}</h2>
  <h2>{{ dateX | date:'short' }}</h2>
  <h2>{{ dateX | date:'shortDate' }}</h2>
  <h2>{{ dateX | date:'shortTime' }}</h2>
  <h2>{{ dateX | date:'medium' }}</h2>
  <h2>{{ dateX | date:'mediumTime' }}</h2>
  <h2>{{ dateX | date:'mediumDate' }}</h2>
  <h2>{{ dateX | date:'long' }}</h2>
  <h2>{{ dateX | date:'longDate' }}</h2>
  <h2>{{ dateX | date:'longTime' }}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    public dateX = new Date();
    public numberX  = 4.123;
    public name = "Angular 5 Day - 2"
    public jsonString = {
      "username" : "user 1",
      "password" : "#******"
    }





  @Input('parentData') public nama ;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  aksiKlik(){
    this.childEvent.emit('Ini data dari Child');
  }
}
