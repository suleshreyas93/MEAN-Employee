const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    
    departmentID: Number,
    departmentName: String
});

let Department = mongoose.model("departments",departmentSchema);

module.exports = {

    async getAllDepartments(){

        return await Department.find({});
    }
    
}