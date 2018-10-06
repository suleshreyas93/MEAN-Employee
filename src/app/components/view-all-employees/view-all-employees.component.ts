import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';




import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../model/employee.model';


@Component({
  selector: 'app-view-all-employees',
  templateUrl: './view-all-employees.component.html',
  styleUrls: ['./view-all-employees.component.css']
})
export class ViewAllEmployeesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input("data-source") dataSource = new MatTableDataSource();
  @Input("columns") displayedColumns = ["_id","username","firstName","lastName","contact","department","baseSalary","takeHomeSalary"];
  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit() {

    this.empService.getAllEmployees().subscribe(employees => {
      console.log(employees);

      /*let coulmnNames = Object.keys(employees[0]);

      for(let i = 0; i < coulmnNames.length; i++)
      {
        this.displayedColumns.push(coulmnNames[i]);
      }

      console.log("Columns = ");
      console.log(this.displayedColumns);*/

      this.dataSource.data = employees;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  rowClicked(row: any){
    console.log(row);

    this.router.navigate(["/employees/view-employee",row._id]);


  }

}
