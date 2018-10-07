const express = require("express");
const router = express.Router();
const salary = require("../model/salary");

router.get("/deductions",async(req,res) => {

    let allDeductions = await salary.getAllDeductions();
    
    res.json(allDeductions);
});

router.get("/",async(req,res) => {

    let salaries = await salary.getSalary();
    
    res.json(salaries);
});

module.exports = router;