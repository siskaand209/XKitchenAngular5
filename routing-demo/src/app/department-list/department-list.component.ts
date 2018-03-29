import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul>
      <li (click)="onKlik(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
      <span>{{department.id }}</span> {{department.name}} ----> {{ isSelected(department)}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public departments = [
    { "id": 1, "name": "Angular"},
    { "id": 2, "name": "Node"},
    { "id": 3, "name": "MongoDB"},
    { "id": 4, "name": "Bootsrap"},

  ]

  public selectedId;

  
  onKlik(department){
    this.router.navigate(['/departments',department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }
  

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
    
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
