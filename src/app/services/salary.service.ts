import { Salary } from './../model/salary.model';
import { Department } from './../model/department.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class SalaryService {

  constructor(private http: HttpClient) { }

  getAllDeductions(): Observable<Salary>{

    return this.http.get<Salary>("/salary");
  }

}
