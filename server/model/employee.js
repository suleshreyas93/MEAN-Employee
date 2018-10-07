const mongoose = require("mongoose");


const employeeSchema = mongoose.Schema({
    
    username: String,
    firstName: String,
    lastName: String,
    gender: String,
    contact: {
        cellphone: String,
        home: String
    },
    address: {
        street: String,
        apt: String,
        city: String,
        state: String,
        zipcode: String
    },
    joiningDate: Date,
    department : Object,
    salary: {
        baseSalary: Number,
        deductions: Array,
        taxPercent: Number,
        takeHomeSalary: Number
    }
    

});

const Employee = mongoose.model("employees",employeeSchema);


module.exports = {

    async getAllEmployees(){

        return await Employee.find({});

    },

    async addNewEmployee(employee){

        
        let newEmployee = new Employee(employee);
        return await newEmployee.save({});
    },

    async getemployeeWithID(id){

        return await Employee.findById({_id: id});
    },

    async updateEmployee(id, employee)
    {
        
        return await Employee.updateOne({_id: id},{$set: employee});
    },

    async getAllUsernames()
    {
        return await Employee.find({},{username:1,_id:0});
    }

    
}
//module.exports = Employee;