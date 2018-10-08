import { ConformdialogComponent } from './../conformdialog/conformdialog.component';
import { JoiningDate } from './../../joiningdate.pipe';
import { Salary } from './../../model/salary.model';
import { SalaryService } from './../../services/salary.service';
import { Department } from './../../model/department.model';
import { DepartmentService } from './../../services/department.service';
import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../model/employee.model';

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

 
  /**
   * Reactive Form Template
   */
  form = new FormGroup({

    username: new FormControl('',[
      Validators.required,
      Validators.email,

    ]),
    firstName: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]*$'), Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(3)]),
    street: new FormControl('',[Validators.required, Validators.minLength(3)]),
    apt: new FormControl(''),
    city: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(3)]),
    state: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(2)]),
    zipcode: new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern("^[0-9]*$")]),
    cellphone: new FormControl('', [Validators.minLength(10), Validators.pattern("^[0-9]*$")]),
    homephone: new FormControl('',[Validators.minLength(10),Validators.pattern("^[0-9]*$")]),
    joiningDate: new FormControl('', Validators.required),
    department: new FormControl('',Validators.required),
    baseSalary: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
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
  selectAllDeductions = false;
  header
  myDepartment

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
          this.joining_date = this.employee.joiningDate
          this.myDepartment = this.employee.department;
          this.employeeId = params["id"];
          this.header = "UPDATE"
          this.form = new FormGroup({

            username: new FormControl(this.employee.username,[
              Validators.required,
              Validators.email,
        
            ]),
            firstName: new FormControl(this.employee.firstName,[Validators.required,Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3)]),
            lastName: new FormControl(this.employee.lastName,[Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3)]),
            street: new FormControl(this.employee.address.street,[Validators.required, Validators.minLength(3)]),
            apt: new FormControl(this.employee.address.apt),
            city: new FormControl(this.employee.address.city,[Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3)]),
            state: new FormControl(this.employee.address.state,[Validators.required, Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(2)]),
            zipcode: new FormControl(this.employee.address.zipcode,[Validators.required, Validators.minLength(5), Validators.pattern("^[0-9]*$")]),
            cellphone: new FormControl(this.employee.contact.cellphone,[Validators.minLength(10), Validators.pattern("^[0-9]*$")]),
            homephone: new FormControl(this.employee.contact.home,[Validators.minLength(10), Validators.pattern("^[0-9]*$")]),
            joiningDate: new FormControl(this.employee.joiningDate, Validators.required),
            department: new FormControl([this.myDepartment],Validators.required),
            baseSalary: new FormControl(this.employee.salary.baseSalary, [Validators.required, Validators.pattern("^[0-9]*$")]),
            taxPercent: new FormControl('20'),
            deductions: new FormControl('')
        
          })
        })
      }
    })

    this.header = "ADD";
    this.getAllDepartments();

    this.getAllDeductions();

    this.getAllUsernames();
  }

  getAllDepartments()
  {

    this.departmentService.getAllDepartments().subscribe(department => {
     

      for(let i = 0; i < department.length; i++)
      {
        this.departments.push(department[i]);
      }
    });

  }

  getAllDeductions()
  {

    this.salaryService.getAllDeductions().subscribe(deduction => {
      
      let allDeductions = deduction[0].deductions;
      for(let i = 0; i < allDeductions.length; i++)
      {
        this.mydeductions.push(allDeductions[i]);
      }
    });

  }

  getAllUsernames(){

      this.empService.getAllUsernames().subscribe(unm => {
      for(let i = 0; i < unm.length; i++)
      {
        this.allUsernames.push(unm[i].username);
      }
      
    });
  }

  checkUsername(username){
    if(this.allUsernames.includes(username.value))
    {
      
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
    
    if(empId !== undefined)
    {
      
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
        this.router.navigateByUrl("/home");
      });
    }
    else
    {
      if(f.invalid)
      {
        this.error = true;
        this.confirmDialog(this.error);
        
      }
      else
      {
        
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
        
selectedDepartment(department)
{
   this.department = department;
}

selectedDeductions(list, baseSalary, taxPercent)
{
    
    this.selectedOptions = list.value.slice();
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
    let totalTaxSalary = (this.tax/100) * base;
    let salaryAfterTax = base - totalTaxSalary;
    
    this.takeHomeSalary = salaryAfterTax - totalDeductionCost;
    
    
  }

  joiningDate(date)
  {
    this.joining_date = date.value;
    this.joining_date = this.joiningDatePipe.transform(this.joining_date);
    
  }

  confirmDialog(error)
  {
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
      this.insertedId = emp;
      this.router.navigate(["/employees/view-employee",this.insertedId._id]);
    });
  }

  homeSalary(baseSalary, taxPercent)
  {

    this.tax = taxPercent.value;
    let salaryAfterTax = (this.tax / 100) * baseSalary.value;
    this.takeHomeSalary = baseSalary.value - salaryAfterTax;

  }

  selectAll(baseSalary, taxPercent)
  {
    
    if(this.selectAllDeductions)
    {
      this.takeHomeSalary = baseSalary.value;
      this.selectAllDeductions = false;
    }
    else
    {
      
      let totalDeductionCost = 0;
      this.selectedOptions = this.mydeductions.slice(); // includes all deductions
      for(let i = 0; i < this.mydeductions.length; i++)
      {
        totalDeductionCost += this.mydeductions[i].rate;
      }

      let totalTaxSalary = (taxPercent.value/100) * baseSalary.value;
      let salaryAfterTax = baseSalary.value - totalTaxSalary;
    
      this.takeHomeSalary = salaryAfterTax - totalDeductionCost;
      this.selectAllDeductions = true;
    }
    
  }

  

}
