const express = require("express");
const router = express.Router();
const Employee = require("../model/employee");

router.get("/", async(req, res) => {
    
    try
    {
        let allEmployees = await Employee.getAllEmployees();
        console.log("All Employees : "+allEmployees);
        res.json(allEmployees);
    }
    catch(e)
    {
        console.log(e);
    }
    
});


router.post("/add",async(req,res) => {
    
    try
    {
        let newEmployee = {

            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            contact: req.body.contact,
            joiningDate: req.body.joiningDate,
            department: req.body.department,
            salary: req.body.salary
        }
    
        let employee = await Employee.addNewEmployee(newEmployee);
        console.log("New Employee = ");
        console.log(employee);
        res.json(employee);
    }
    catch(e)
    {
        console.log(e);
    }
});


router.get("/view-employee/:id",async(req, res) => {

    try
    {
        let employee = await Employee.getemployeeWithID(req.params.id);
        console.log(employee);
        res.json(employee);
    }
    catch(e)
    {
        console.log(e);
    }
    

});

router.post("/update/:id",async(req,res) => {

    //let employeeToBeUpdated = await Employee.getemployeeWithID(req.params.id);

    try
    {
        let employeeToBeUpdated = {

            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            contact: req.body.contact,
            joiningDate: req.body.joiningDate,
            department: req.body.department,
            salary: req.body.salary
    
        }
    
        let updatedEmployee = await Employee.updateEmployee(req.params.id, employeeToBeUpdated);
        console.log("Updated Employee Result = ");
        console.log(updatedEmployee);
        res.json(updatedEmployee);
    }
    catch(e)
    {
        console.log(e);
    }
});

router.get("/usernames",async(req,res) => {

    try
    {
        let allUsernames = await Employee.getAllUsernames();
        console.log("All Usernames = ");
        console.log(allUsernames);
        res.json(allUsernames);
    }
    catch(e)
    {
        console.log(e);
    }
    

})

module.exports = router;