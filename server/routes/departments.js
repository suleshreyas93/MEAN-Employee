const express = require("express");
const department = require("../model/department");
const router = express.Router();

router.get("/",async(req,res) => {

    let allDepartments = await department.getAllDepartments();
    console.log("Departments = "+allDepartments);
    res.json(allDepartments);
});

module.exports = router;