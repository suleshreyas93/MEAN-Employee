import { HttpClientModule }    from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, 
         MatFormFieldModule, 
         MatSelectModule, 
         MatInputModule, 
         MatButtonModule, 
         MatExpansionModule, 
         MatIconModule, 
         MatDatepickerModule, 
         MatNativeDateModule, 
         MatChipsModule,
         MatCheckboxModule,
         MatListModule,
         MatDialogModule,
         MAT_DIALOG_DATA,
         MatDialogRef,
         MatTableModule,
         MatPaginatorModule,
         MatSortModule  } from '@angular/material';


import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeService } from './services/employee.service';
import { DepartmentService } from './services/department.service';
import { SalaryService } from './services/salary.service';
import { JoiningDate } from './joiningdate.pipe';
import { ConformdialogComponent } from './components/conformdialog/conformdialog.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { ViewAllEmployeesComponent } from './components/view-all-employees/view-all-employees.component';







@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    JoiningDate,
    ConformdialogComponent,
    ViewEmployeeComponent,
    ViewAllEmployeesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatCheckboxModule,
    MatListModule,
    MatDialogModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    EmployeeService,
    DepartmentService, 
    SalaryService,
    JoiningDate,
    
    {
      provide: MatDialogRef,
      useValue: {
        close: (dialogResult: any) => { }
      }
    },
    {
      provide: MAT_DIALOG_DATA,useValue : {}
    }
    
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConformdialogComponent]
})
export class AppModule { }