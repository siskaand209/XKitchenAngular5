import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {
  private _url: string = "/assets/data/employees.json";
//private _url: string ="https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getEmployess() :Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .catch(this.errorHandler);
                    
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "default error");
  }
}
