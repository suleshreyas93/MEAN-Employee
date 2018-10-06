
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewAllEmployeesComponent } from './components/view-all-employees/view-all-employees.component';




const routes: Routes = [
  {
    path: '',
    component: ViewAllEmployeesComponent
  },
  {
    path: 'home',
    component: ViewAllEmployeesComponent
  },
  {
    path: 'employees/view-employee/:_id',
    component: ViewEmployeeComponent
  }, 
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  },
  {
    path: 'employees/update-employee/:id',
    component: AddEmployeeComponent
  },

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
