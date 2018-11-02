import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.sass']
})
export class EmployeeDetailComponent implements OnInit {

  public employees: Array<any> = [];
  public errorMsg: any;
  public employeeID: number;

  constructor(private _employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(
        (data: any) => this.employees = data,
        (error: any) => this.errorMsg = error
      );
      // get the parameters
      const id = parseInt(this.route.snapshot.paramMap.get('id').toString(), 10);
      this.employeeID = id;
  }

}
