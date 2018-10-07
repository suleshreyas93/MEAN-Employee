import { JoiningDate } from './../joiningdate.pipe';
import { first } from "rxjs/operators";

export interface Employee 
{

    username: String,
    firstName: String,
    lastName: String,
    gender: String,
    contact: {
        cellphone: String,
        home: String
    },
    joiningDate: Date,
    address: {
        street: String,
        apt: String,
        city: String,
        state: String,
        zipcode: String
    },
    department : {
        departmentID: Number,
        departmentName: String
    },
    salary: {

        baseSalary: Number,
        deductions: Array<Object>,
        taxPercent: Number,
        takeHomeSalary: Number
    }
    /*constructor() { }*/

    /*get userName(){
        return this.username;

    } 

    set userName(username: String){
        this.username = username
    }

    get firstname(){
        return this.firstName;
    }

    set firstname(firstName: String){
        this.firstName = firstName;
    }

    get lastname(){
        return this.lastName;
    }

    set lastname(lastName: String){
        this.lastName = lastName;
    }*/
}