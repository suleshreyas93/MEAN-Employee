import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../model/employee.model';
import { Router, ActivatedRoute } from '@angular/router';



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
  deductions
  flag
  message
  firstName
  username
  lastName
  street
  city
  apt
  zipcode
  state
  cellphone
  homephone
  department
  taxPercent
  constructor(private empService: EmployeeService, private router: Router, private aR: ActivatedRoute) { }
  employeeId
  ngOnInit() {
      this.aR.params.subscribe(params => {
      this.employeeId = params["_id"];
      
    });

    this.empService.viewEmployee(this.employeeId).subscribe(emp => {
      

      this.employee = emp;
      
      
      this.baseSalary = this.employee.salary.baseSalary;
      this.takeHomeSalary = this.employee.salary.takeHomeSalary;
      this.firstName = this.employee.firstName;
      this.username = this.employee.username;
      this.lastName = this.employee.lastName;
      this.street = this.employee.address.street;
      this.apt = this.employee.address.apt;
      this.city = this.employee.address.city;
      this.state = this.employee.address.state;
      this.zipcode = this.employee.address.zipcode;
      this.cellphone = this.employee.contact.cellphone;
      this.homephone = this.employee.contact.home;
      this.taxPercent = this.employee.salary.taxPercent;
      this.department = this.employee.department.departmentName;
      this.joining_date = this.employee.joiningDate;
      


        if(this.employee.salary.deductions.length > 0)
        {
          this.deductions = this.employee.salary.deductions.slice();
          this.flag = false;
        }
        else
        {
          this.flag = true;
          this.message = "NO DEDUCTIONS SELECTED!";
        }
      });
  }

  callUpdate()
  {
    this.router.navigate(["/employees/update-employee",this.employeeId])
  }

  

  

}
