import { Injectable } from '@angular/core';
import { Table } from '../models/table.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/user.model';

@Injectable()
export class TableService {

  private _url: 'http://localhost:3000/api/tables';

  selectedTable: Table;
  tableList: Table[];
  constructor(private http: Http) { }

  getTables() {
    this.http.get(this._url) 
    .map((data: Response) => {
      return data.json() as Table[];
    }).toPromise().then(x => {
      this.tableList = x;
    });
  }

}
