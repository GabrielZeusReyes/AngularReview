import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  public employees: Array<any>;
  public errorMsg: any;

  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(
        (data: any) => this.employees = data,
        (error: any) => this.errorMsg = error
      );
  }

  seeDetail(id: string) {
    this.router.navigate(['/details', id]);
  }

}
