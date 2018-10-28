import { Injectable } from '@angular/core';

// tells angular that this service might itself have injected dependencies
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Array<any> {
    return [
      { 'id': 1, 'name': 'Andrew', 'age': 30 },
      { 'id': 2, 'name': 'Brandon', 'age': 25 },
      { 'id': 3, 'name': 'Christina', 'age': 26 },
      { 'id': 4, 'name': 'Elena', 'age': 28 }
    ];
  }
}
