const employeeRoutes = require("./employees");
const salaryRoutes= require("./salaries");
const departmentRoutes = require("./departments");

const constructorMethod = (app) => {

    app.use("/employees", employeeRoutes);
    app.use("/salary",salaryRoutes);
    app.use("/departments",departmentRoutes);
}

module.exports = constructorMethod;