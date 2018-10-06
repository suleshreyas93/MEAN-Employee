import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../model/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { JoiningDate } from './../../joiningdate.pipe';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee : Employee
  joining_date
  baseSalary
  takeHomeSalary
  deductions = []
  constructor(private empService: EmployeeService, private router: Router, private aR: ActivatedRoute, private joiningDatePipe: JoiningDate) { }
  employeeId
  ngOnInit() {


    
    this.aR.params.subscribe(params => {
      this.employeeId = params["_id"];
      console.log("In view = "+this.employeeId);
    });

    this.empService.viewEmployee(this.employeeId).subscribe(emp => {
      console.log("Employee = ");
      console.log(emp);

      this.employee = emp;
      console.log("Base Salary = ");
      console.log(this.employee.salary);
      this.joining_date = this.employee.JoiningDate;
      this.joining_date = this.joiningDatePipe.transform(this.joining_date);
      console.log("Updated Joining Date = ");
      console.log(this.joining_date);
      this.baseSalary = this.employee.salary.baseSalary;
      this.takeHomeSalary = this.employee.salary.takeHomeSalary;
      this.deductions = this.employee.salary.deductions.slice()

    });
  }

  callUpdate()
  {
    this.router.navigate(["/employees/update-employee",this.employeeId])
  }

  

  

}
