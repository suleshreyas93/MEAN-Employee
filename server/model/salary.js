const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salarySchema = new Schema({
    baseSalary: Number,
    deductions : Array,
    taxPercent: Number,
    takeHomeSalary: Number

});

const Salary = mongoose.model("salaries",salarySchema);

module.exports = {

    async getAllDeductions()
    {
        return await Salary.find({},{deductions:1, _id:0});
    },

    async getSalary()
    {
        return await Salary.find({});
    }

}