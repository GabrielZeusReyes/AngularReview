import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.sass']
})
export class EmployeeDetailComponent implements OnInit {

  public employees: Array<any> = [];
  public errorMsg: any;
  public employeeID: number;

  constructor(
    private _employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(
        (data: any) => this.employees = data,
        (error: any) => this.errorMsg = error
      );
      // get the parameters
      // const id = parseInt(this.route.snapshot.paramMap.get('id').toString(), 10);
      // this.employeeID = id;
      this.route.paramMap.subscribe( (params: ParamMap) => {
        let id = parseInt(params.get('id').toString(), 10);
        this.employeeID = id;
      } );
  }

  goPrev() {
    const previousID = this.employeeID - 1;
    this.router.navigate(['/details', previousID]);
    // this.router.navigate([previousID], { relativeTo: this.route });
  }

  goNext() {
    const nextID = this.employeeID + 1;
    this.router.navigate(['/details', nextID]);
    // this.router.navigate([nextID], { relativeTo: this.route });
  }

  goChild() {
    this.router.navigate( ['child'], { relativeTo: this.route } );
  }

}
