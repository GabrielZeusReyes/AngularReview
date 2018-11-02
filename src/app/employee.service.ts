import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';

import { catchError } from 'rxjs/operators';

// tells angular that this service might itself have injected dependencies
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // type observable that has an interface of IEmployee that is an array
  getEmployees(): Observable<IEmployee[]> {
    // add a type to the get request: an array of IEmployee inerface
    return this.http.get<IEmployee[]>(this._url).pipe( catchError( this.errorHandler ) );
  }

  errorHandler(err: HttpErrorResponse) {
    return throwError( err.message || 'Server Error' );
  }
}
