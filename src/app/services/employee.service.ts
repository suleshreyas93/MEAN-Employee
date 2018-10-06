import { Employee } from './../model/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addNewEmployee(employee: Employee): Observable<Employee>{

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Employee>("/employees/add", JSON.stringify(employee), httpOptions);

  }

  viewEmployee(id): Observable<Employee>{

    console.log("In service = "+id);
    return this.http.get<Employee>("/employees/view-employee/"+id);
  }

  getAllEmployees(): Observable<Employee[]>{

    return this.http.get<Employee[]>("/employees");
  }

  updateEmployee(employee, id): Observable<Employee>{

    console.log("In update employee = ");
    console.log("Employee ID = ");
    console.log(id);
    console.log("Employee to be updated = ");
    console.log(employee);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Employee>("/employees/update/"+id, JSON.stringify(employee), httpOptions);
  }

  getAllUsernames(): Observable<Employee[]>{

    return this.http.get<Employee[]>("/employees/usernames");
  }

}
