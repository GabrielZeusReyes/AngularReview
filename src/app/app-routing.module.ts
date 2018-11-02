import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/details', pathMatch: 'full'
  },
  {
    path: 'details', component: EmployeeDetailComponent
  },
  {
    path: 'employees', component: EmployeeListComponent
  },
  { // wild card route should always be last
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

// this is used on the app.module so that it is cleaner
export const routingComponents = [EmployeeDetailComponent, EmployeeListComponent, PageNotFoundComponent];
