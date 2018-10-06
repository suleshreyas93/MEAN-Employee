import { Department } from './../model/department.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>("/departments");
  }

}
