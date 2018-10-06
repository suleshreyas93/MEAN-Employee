/*import { Observable } from 'rxjs';
import { AbstractControl, ValidationErrors } from "@angular/forms";


import { Employee } from './../../model/employee.model';
import { EmployeeService } from './../../services/employee.service';


export class UsernameValidators 
{
    usernames = [];
    private empService: EmployeeService
    constructor(){ }

    shouldBeUnique(controls: AbstractControl) : Observable<ValidationErrors | null>
    {
        this.empService.getAllUsernames().subscribe(username => {

            console.log("All Usernames = ");
            console.log(username);

        })
        return null;
    }
}*/