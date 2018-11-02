import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  public employees: Array<any>;
  public errorMsg: any;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(
        (data: any) => this.employees = data,
        (error: any) => this.errorMsg = error
      );
  }

}
