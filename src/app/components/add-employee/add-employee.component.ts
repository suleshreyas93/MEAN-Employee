import { ConformdialogComponent } from './../conformdialog/conformdialog.component';
import { JoiningDate } from './../../joiningdate.pipe';
import { Salary } from './../../model/salary.model';
import { SalaryService } from './../../services/salary.service';
import { Department } from './../../model/department.model';
import { DepartmentService } from './../../services/department.service';
import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../model/employee.model';
//import { UsernameValidators } from './username.validators';

import { Component, OnInit } from '@angular/core';
import { MatDialog }  from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

 
  form = new FormGroup({

    username: new FormControl('',[
      Validators.required,
      Validators.email,

    ]),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    street: new FormControl('',Validators.required),
    apt: new FormControl(''),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    zipcode: new FormControl('',Validators.required),
    cellphone: new FormControl(''),
    homephone: new FormControl(''),
    joiningDate: new FormControl('', Validators.required),
    department: new FormControl('',Validators.required),
    baseSalary: new FormControl('', Validators.required),
    taxPercent: new FormControl('20'),
    deductions: new FormControl('')

  })

  employee
  dialogResult
  departments: Array<Department> = [];
  mydeductions =  [];
  selectedOptions = [];
  joining_date
  department
  takeHomeSalary = 0;
  insertedId
  error: boolean
  tax
  allUsernames = []
  usernameError: boolean;
  employeeId
  constructor(
    private empService: EmployeeService, 
    private departmentService: DepartmentService, 
    private salaryService: SalaryService, 
    private joiningDatePipe: JoiningDate, 
    private dialog: MatDialog, 
    private router:Router,
    private aR: ActivatedRoute) { }

  ngOnInit() 
  {
    this.aR.params.subscribe((params) => {
      if(params["id"])
      {
        this.empService.viewEmployee(params["id"]).subscribe(res => {
          this.employee = res;
          this.employeeId = params["id"];

          this.form = new FormGroup({

            username: new FormControl(this.employee.username,[
              Validators.required,
              Validators.email,
        
            ]),
            firstName: new FormControl(this.employee.firstName,Validators.required),
            lastName: new FormControl(this.employee.lastName,Validators.required),
            street: new FormControl(this.employee.address.street,Validators.required),
            apt: new FormControl(this.employee.address.apt),
            city: new FormControl(this.employee.address.city,Validators.required),
            state: new FormControl(this.employee.address.state,Validators.required),
            zipcode: new FormControl(this.employee.address.zipcode,Validators.required),
            cellphone: new FormControl(this.employee.contact.cellphone),
            homephone: new FormControl(this.employee.contact.home),
            joiningDate: new FormControl(this.employee.joiningDate, Validators.required),
            department: new FormControl('',Validators.required),
            baseSalary: new FormControl(this.employee.salary.baseSalary, Validators.required),
            taxPercent: new FormControl('20'),
            deductions: new FormControl('')
        
          })
        })
      }
    })
    this.getAllDepartments();

    this.getAllDeductions();

    this.getAllUsernames();
  }

  getAllDepartments()
  {

    this.departmentService.getAllDepartments().subscribe(department => {
      console.log("Departments = ");
      console.log(department);

      for(let i = 0; i < department.length; i++)
      {
        this.departments.push(department[i]);
      }
    });

  }

  getAllDeductions()
  {

    this.salaryService.getAllDeductions().subscribe(deduction => {
      console.log("Deductions = ");
      console.log(deduction[0].deductions);
      let allDeductions = deduction[0].deductions;
      for(let i = 0; i < allDeductions.length; i++)
      {
        this.mydeductions.push(allDeductions[i]);
      }
    });

  }

  getAllUsernames(){

    this.empService.getAllUsernames().subscribe(unm => {

      console.log("All Usernames = ");
      console.log(unm);
      //this.allUsernames = unm.slice();
      for(let i = 0; i < unm.length; i++)
      {
        this.allUsernames.push(unm[i].username);
      }
      console.log("Username array = ");
      console.log(this.allUsernames);
    });
  }

  checkUsername(username){

    console.log("Entered username = "+username.value);
    if(this.allUsernames.includes(username.value))
    {
      console.log("Similar found");
      this.usernameError = true;
    }
  }


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep(event) {
    event.preventDefault();
    this.step++;
  }

  prevStep(event) {
    event.preventDefault();
    this.step--;
  }

  addEmployee(empId,f){
    
    console.log("Employee ID = ");
    console.log(empId);
    if(empId !== undefined)
    {
      console.log("updating");
      console.log(f.value);
      let employeeToBeUpdated = 
        {
    
          username: f.value.username,
          firstName: f.value.firstName,
          lastName: f.value.lastName,
          address: 
          {
    
            street: f.value.street,
            apt: f.value.apt,
            city: f.value.city,
            state: f.value.state,
            zipcode: f.value.zipcode
    
          },
          contact: 
          {
            cellphone: f.value.cellphone,
            home: f.value.homephone
    
          },
          joiningDate: this.joining_date,
          department: this.department,
          salary: 
          {
            baseSalary: f.value.baseSalary,
            deductions: this.selectedOptions,
            taxPercent: this.tax,
            takeHomeSalary: this.takeHomeSalary
          }
        }
      this.empService.updateEmployee(employeeToBeUpdated, empId).subscribe(updatedEmployee => {
        console.log("Updated Employee Details = ");
        console.log(updatedEmployee);
        this.router.navigateByUrl("/home");
      });
    }
    else
    {
      console.log("f = ");
      console.log(f);
  
      if(f.invalid)
      {
        this.error = true;
        this.confirmDialog(this.error);
        
      }
      else
      {
        console.log(f.value.taxPercent);
        let newEmployee = 
        {
    
          username: f.value.username,
          firstName: f.value.firstName,
          lastName: f.value.lastName,
          address: 
          {
    
            street: f.value.street,
            apt: f.value.apt,
            city: f.value.city,
            state: f.value.state,
            zipcode: f.value.zipcode
    
          },
          contact: 
          {
            cellphone: f.value.cellphone,
            home: f.value.homephone
    
          },
          joiningDate: this.joining_date,
          department: this.department,
          salary: 
          {
            baseSalary: f.value.baseSalary,
            deductions: this.selectedOptions,
            taxPercent: this.tax,
            takeHomeSalary: this.takeHomeSalary
          }
        }
    
        this.confirmEmployee(newEmployee);
    
    }
  }
    
}
        


  selectedDepartment(department){
      console.log("Selected Department = ");
      console.log(department);
      this.department = department;
  }

  selectedDeductions(list, baseSalary, taxPercent){
    console.log("List = ");
    console.log(list);
    //this.selectedOptions = list.value.map(item => item.value);
    this.selectedOptions = list.value.slice();
    console.log("Selected Deductions = ");
    console.log(this.selectedOptions);

    console.log("Base Salary = "+baseSalary.value);
    console.log("Tax Percent = "+taxPercent.value);
    console.log("Deductions = ");
    console.log(this.selectedOptions)

    let base = baseSalary.value;
    this.tax = taxPercent.value;
    let totalDeductionCost = 0;

    if(this.selectedOptions.length == 0)
    {
      this.takeHomeSalary = baseSalary;
    }
    else
    {
      
      for(let i = 0; i < this.selectedOptions.length; i++)
      {
        totalDeductionCost += this.selectedOptions[i].rate;
      }
    }
    

    
    console.log("Total Deduction Cost = "+totalDeductionCost);

    
    
    let totalTaxSalary = (this.tax/100) * base;
    let salaryAfterTax = base - totalTaxSalary;
    
    this.takeHomeSalary = salaryAfterTax - totalDeductionCost;
    
    console.log(this.takeHomeSalary);
  }

  joiningDate(date){

    console.log("Date = ");
    console.log(date);
    this.joining_date = date.value;
    this.joining_date = this.joiningDatePipe.transform(this.joining_date);
    console.log(this.joining_date);
  }

  confirmDialog(error){

    console.log("New Employee = ");
    //console.log(employee);
    let dialogRef = this.dialog.open(ConformdialogComponent, {
      width: '600px',
      data: this.error
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

  confirmEmployee(employee){

    this.empService.addNewEmployee(employee).subscribe(emp => {
      console.log("Inserted employee = ");
      console.log(emp);
      this.insertedId = emp;

      console.log("Inserted ID = ");
      console.log(this.insertedId._id);
      this.router.navigate(["/employees/view-employee",this.insertedId._id]);
    });
  }

  homeSalary(baseSalary, taxPercent){

    this.tax = taxPercent.value;
    console.log("baseSalary = "+baseSalary.value);
    console.log("Tax = "+taxPercent.value);
    let salaryAfterTax = (this.tax / 100) * baseSalary.value;

    this.takeHomeSalary = baseSalary.value - salaryAfterTax;

  }

  

}
