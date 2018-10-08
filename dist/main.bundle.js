webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_view_employee_view_employee_component__ = __webpack_require__("../../../../../src/app/components/view-employee/view-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_add_employee_add_employee_component__ = __webpack_require__("../../../../../src/app/components/add-employee/add-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_view_all_employees_view_all_employees_component__ = __webpack_require__("../../../../../src/app/components/view-all-employees/view-all-employees.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__components_view_all_employees_view_all_employees_component__["a" /* ViewAllEmployeesComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_5__components_view_all_employees_view_all_employees_component__["a" /* ViewAllEmployeesComponent */]
    },
    {
        path: 'employees/view-employee/:_id',
        component: __WEBPACK_IMPORTED_MODULE_3__components_view_employee_view_employee_component__["a" /* ViewEmployeeComponent */]
    },
    {
        path: 'add-employee',
        component: __WEBPACK_IMPORTED_MODULE_4__components_add_employee_add_employee_component__["a" /* AddEmployeeComponent */]
    },
    {
        path: 'employees/update-employee/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__components_add_employee_add_employee_component__["a" /* AddEmployeeComponent */]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg sticky-top navbar-dark bg-dark\">\r\n        <a class=\"nav-link\" style=\"color:white\">DATIS Employee Manager</a>\r\n\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div id=\"my-header-menu\" class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n          <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">View All Employees<span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/add-employee\" routerLinkActive=\"active\">Add Employees</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n</nav><br><br>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_add_employee_add_employee_component__ = __webpack_require__("../../../../../src/app/components/add-employee/add-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_department_service__ = __webpack_require__("../../../../../src/app/services/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_salary_service__ = __webpack_require__("../../../../../src/app/services/salary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__joiningdate_pipe__ = __webpack_require__("../../../../../src/app/joiningdate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_conformdialog_conformdialog_component__ = __webpack_require__("../../../../../src/app/components/conformdialog/conformdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_view_employee_view_employee_component__ = __webpack_require__("../../../../../src/app/components/view-employee/view-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_view_all_employees_view_all_employees_component__ = __webpack_require__("../../../../../src/app/components/view-all-employees/view-all-employees.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_add_employee_add_employee_component__["a" /* AddEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__joiningdate_pipe__["a" /* JoiningDate */],
                __WEBPACK_IMPORTED_MODULE_12__components_conformdialog_conformdialog_component__["a" /* ConformdialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_view_employee_view_employee_component__["a" /* ViewEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_view_all_employees_view_all_employees_component__["a" /* ViewAllEmployeesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatSortModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_employee_service__["a" /* EmployeeService */],
                __WEBPACK_IMPORTED_MODULE_9__services_department_service__["a" /* DepartmentService */],
                __WEBPACK_IMPORTED_MODULE_10__services_salary_service__["a" /* SalaryService */],
                __WEBPACK_IMPORTED_MODULE_11__joiningdate_pipe__["a" /* JoiningDate */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialogRef */],
                    useValue: {
                        close: function (dialogResult) { }
                    }
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */], useValue: {}
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__components_conformdialog_conformdialog_component__["a" /* ConformdialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-employee/add-employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.card-header{\r\n    background: darkcyan;\r\n}\r\n\r\n\r\n\r\nlabel{\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n::ng-deep .mat-expansion-panel-header-title{\r\n    font-weight: bold !important;\r\n}\r\n\r\n\r\n\r\n.example-headers-align .mat-expansion-panel-header-title, \r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n}\r\n\r\n\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-employee/add-employee.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card mat-elevation-z8\">\n      <div class=\"card-header\">\n        <h5 class=\"my-card-header-title\">{{header}} EMPLOYEE DETAILS</h5>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"addEmployee(employeeId,form)\">\n            <mat-accordion class=\"example-headers-align\">\n                <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Personal data\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      Enter Personal Details\n                      <mat-icon>account_circle</mat-icon>\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n              \n                  <mat-form-field>\n                      <input \n                        formControlName=\"username\"\n                        matInput\n                        id=\"username\" \n                        type=\"email\" \n                        placeholder=\"Please Enter Your Email As The Username\"\n                        (blur)=\"checkUsername(form.get('username'))\">\n                        <div class=\"alert alert-danger\" *ngIf=\"form.get('username').touched && form.get('username').invalid\">\n                            <div *ngIf=\"form.get('username').errors.required\">Username is required</div>\n                            <div *ngIf=\"form.get('username').errors.email\">Username not valid</div>\n                        </div>\n                        <div class=\"alert alert-danger\" *ngIf=\"usernameError\">Username is already taken</div>\n                  </mat-form-field>\n                  \n  \n                  <mat-form-field>\n                    <input\n                      formControlName=\"firstName\"\n                      matInput\n                      type=\"text\" \n                      placeholder=\"First name\">\n                      <div class=\"alert alert-danger\" *ngIf=\"form.get('firstName').touched && form.get('firstName').invalid\">\n                          <div *ngIf=\"form.get('firstName').errors.required\">Please Enter First Name</div>\n                          <div *ngIf=\"form.get('firstName').errors.pattern\">First Name Entered Not Valid</div>\n                          <div *ngIf=\"form.get('firstName').errors.minlength\">First Name Should be minimum of {{form.get('firstName').errors.minlength.requiredLength}} characters</div>\n                      </div>\n                  </mat-form-field>\n                  \n              \n                  <mat-form-field>\n                    <input \n                      formControlName=\"lastName\"\n                      matInput \n                      type=\"text\" \n                      placeholder=\"Last Name\">\n                      <div class=\"alert alert-danger\" *ngIf=\"form.get('lastName').touched && form.get('lastName').invalid\">\n                          <div *ngIf=\"form.get('lastName').errors.required\">Please Enter Last Name</div>\n                          <div *ngIf=\"form.get('lastName').errors.pattern\">Last Name Entered Not Valid</div>\n                          <div *ngIf=\"form.get('lastName').errors.minlength\">Last Name Should be minimum of {{form.get('lastName').errors.minlength.requiredLength}} characters</div>\n                      </div>\n                  </mat-form-field>\n                  \n                  <br>\n  \n                  <mat-form-field>\n                     <input\n                      formControlName=\"street\" \n                      matInput \n                      type=\"text\" \n                      placeholder=\"Street\">\n                      <div class=\"alert alert-danger\" *ngIf=\"form.get('street').touched && form.get('street').invalid\">\n                          <div *ngIf=\"form.get('street').errors.required\">Please Enter The Street</div>\n                          <div *ngIf=\"form.get('street').errors.minlength\">Street Should be minimum of {{form.get('street').errors.minlength.requiredLength}} characterss</div>\n                      </div>\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input\n                      formControlName=\"apt\" \n                      matInput \n                      type=\"text\" \n                      placeholder=\"Apt.\">\n                  </mat-form-field>\n  \n                  <mat-form-field>\n                    <input\n                      formControlName=\"city\"\n                      matInput \n                      type=\"text\" \n                      placeholder=\"City\">\n                      <div class=\"alert alert-danger\" *ngIf=\"form.get('city').touched && form.get('city').invalid\">\n                          <div *ngIf=\"form.get('city').errors.required\">Please Enter The City</div>\n                          <div *ngIf=\"form.get('city').errors.pattern\">City Entered Not Valid</div>\n                          <div *ngIf=\"form.get('city').errors.minlength\">City should be minimum of {{form.get('city').errors.minlength.requiredLength}}</div>\n                          \n                      </div>\n                  </mat-form-field>\n  \n                  <mat-form-field>\n                     <input \n                     formControlName=\"state\"\n                      matInput \n                      type=\"text\" \n                      placeholder=\"State\">\n                      <div class=\"alert alert-danger\" *ngIf=\"form.get('state').touched && form.get('state').invalid\">\n                          <div *ngIf=\"form.get('state').errors.required\">Please Enter The State</div>\n                          <div *ngIf=\"form.get('state').errors.pattern\">State Entered Not Valid</div>\n                          <div *ngIf=\"form.get('state').errors.minlength\">State should be minimum of {{form.get('state').errors.minlength.requiredLength}}</div>\n                      </div>\n                  </mat-form-field>\n  \n                  <mat-form-field>\n                     <input\n                     formControlName=\"zipcode\" \n                      matInput \n                      type=\"number\" \n                      placeholder=\"zipcode\">\n                      <div class=\"alert alert-danger\" *ngIf=\"form.get('zipcode').touched && form.get('zipcode').invalid\">\n                          <div *ngIf=\"form.get('zipcode').errors.required\">Please Enter The Zipcode</div>\n                          <div *ngIf=\"form.get('zipcode').errors.pattern\">Zipcode not valid</div>\n                          <div *ngIf=\"form.get('zipcode').errors.minlength\">Zipcode should be minimum of {{form.get('zipcode').errors.minlength.requiredLength}}</div>\n                      </div>\n                  </mat-form-field><br>\n  \n                  <mat-form-field>\n                      <input\n                        formControlName=\"cellphone\"\n                        matInput \n                        type=\"number\" \n                        placeholder=\"CellPhone Number\">\n                        <div class=\"alert alert-danger\" *ngIf=\"form.get('cellphone').touched && form.get('cellphone').invalid\">\n                          <div *ngIf=\"form.get('cellphone').errors.pattern\">Phone number not valid</div>\n                          <div *ngIf=\"form.get('cellphone').errors.minlength\">Phone Number Should be Minimum of {{form.get('cellphone').errors.minlength.requiredLength}} digits</div>\n\n                        </div>\n                  </mat-form-field>\n  \n                  <mat-form-field>\n                      <input \n                        formControlName=\"homephone\" \n                        matInput \n                        type=\"number\" \n                        placeholder=\"Home Number\">\n                        <div class=\"alert alert-danger\" *ngIf=\"form.get('homephone').touched && form.get('homephone').invalid\">\n                            <div *ngIf=\"form.get('homephone').errors.pattern\">Phone number not valid</div>\n                            <div *ngIf=\"form.get('homephone').errors.minlength\">Phone Number Should be Minimum of {{form.get('homephone').errors.minlength.requiredLength}} digits</div>\n  \n                          </div>\n                  </mat-form-field><br>\n  \n                  <mat-form-field>\n                      <mat-label>Date of Joining</mat-label>\n                      <input\n                        formControlName=\"joiningDate\"  \n                        matInput \n                        [matDatepicker]=\"picker\" \n                        placeholder=\"Choose a date\" \n                        (dateChange)=\"joiningDate($event)\">\n                        <div class=\"alert alert-danger\" *ngIf=\"form.get('joiningDate').touched && form.get('joiningDate').invalid\">\n                            <div *ngIf=\"form.get('joiningDate').errors.required\">Please Select The Joining Date</div>\n                        </div>\n                        \n                      <mat-datepicker-toggle matSuffix [for]=\"picker\" required></mat-datepicker-toggle>\n                      <mat-datepicker #picker required></mat-datepicker>\n                      \n                  </mat-form-field>\n                  \n  \n              \n                  <mat-action-row>\n                    <button mat-button color=\"primary\"  (click)=\"nextStep($event)\">Next</button>\n                  </mat-action-row>\n                </mat-expansion-panel>\n              \n                <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Department Data\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      Select Department\n                      <mat-icon>work</mat-icon>\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n  \n                  <mat-form-field>\n                      \n                      <mat-select  \n                        formControlName=\"department\"\n                        placeholder=\"Departments\" \n                        (change)=\"selectedDepartment($event.value)\"\n                        >\n                        <mat-option>--</mat-option>\n                        <mat-option *ngFor=\"let dept of departments\" [value]=\"dept\">\n                          {{dept.departmentName}}\n                        </mat-option>\n                       </mat-select>\n                     \n                      <div class=\"alert alert-danger\" *ngIf=\"form.get('department').touched && form.get('department').invalid\">\n                          <div *ngIf=\"form.get('department').errors.required\">Please select department</div>\n                      </div>\n                  </mat-form-field>\n              \n                  \n              \n                  <mat-action-row>\n                    <button mat-button color=\"warn\" (click)=\"prevStep($event)\">Previous</button>\n                    <button mat-button color=\"primary\" (click)=\"nextStep($event)\">Next</button>\n                  </mat-action-row>\n\n              </mat-expansion-panel>\n                <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle> \n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Salary Data\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      Enter Salary Details\n                      <mat-icon>local_atm</mat-icon>\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n  \n                  <mat-form-field>\n                    <input\n                      formControlName=\"baseSalary\" \n                      matInput \n                      type=\"number\" \n                      placeholder=\"Base Salary\"\n                      (blur)=\"homeSalary(form.get('baseSalary'), form.get('taxPercent'))\">\n\n                      <div class=\"alert alert-danger\" *ngIf=\"form.get('baseSalary').touched && form.get('baseSalary').invalid\">\n                          <div *ngIf=\"form.get('baseSalary').errors.required\">Please Enter Base Salary</div>\n                          <div *ngIf=\"form.get('baseSalary').errors.pattern\">Salary Not Valid</div>\n                      </div>\n                  </mat-form-field>\n  \n                  <mat-form-field>\n                    <input\n                      formControlName=\"taxPercent\"\n                      matInput \n                      type=\"text\" \n                      placeholder=\"Tax Percent\"\n                      value=\"20\" \n                      [readonly]=\"true\">\n                  </mat-form-field><br>\n  \n                  <label>Deductions</label>\n                  <mat-selection-list \n                    formControlName=\"deductions\">\n                    <mat-list-option  (click)=\"selectAll(form.get('baseSalary'), form.get('taxPercent'))\">Select All</mat-list-option><hr>\n                    <mat-list-option \n                      *ngFor=\"let deduction of mydeductions\" \n                      [selected]=\"selectAllDeductions \"\n                      \n                      (click)=\"selectedDeductions(form.get('deductions'), form.get('baseSalary'), form.get('taxPercent'))\" \n                      [value]=\"deduction\">\n                      {{deduction.type}}\n                    </mat-list-option>\n                    \n                  </mat-selection-list>\n                  \n                  <!-- <p>\n                    Options selected: {{deductions.selectedOptions.selected.length}}\n                  </p><br> -->\n                   <label>Take Home Salary : {{takeHomeSalary}}</label>\n              \n                  <mat-action-row>\n                    <button mat-button color=\"warn\" (click)=\"prevStep($event)\">Previous</button>\n                    <button mat-button color=\"primary\"> Save </button>\n                  </mat-action-row>\n            </mat-expansion-panel>\n        </mat-accordion>\n      </form>\n          \n      </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/add-employee/add-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conformdialog_conformdialog_component__ = __webpack_require__("../../../../../src/app/components/conformdialog/conformdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__joiningdate_pipe__ = __webpack_require__("../../../../../src/app/joiningdate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_salary_service__ = __webpack_require__("../../../../../src/app/services/salary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_department_service__ = __webpack_require__("../../../../../src/app/services/department.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(empService, departmentService, salaryService, joiningDatePipe, dialog, router, aR) {
        this.empService = empService;
        this.departmentService = departmentService;
        this.salaryService = salaryService;
        this.joiningDatePipe = joiningDatePipe;
        this.dialog = dialog;
        this.router = router;
        this.aR = aR;
        /**
         * Reactive Form Template
         */
        this.form = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].email,
            ]),
            firstName: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z]*$'), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(3)]),
            lastName: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z ]*$'), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(3)]),
            street: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(3)]),
            apt: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](''),
            city: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z ]*$'), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(3)]),
            state: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z ]*$'), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(2)]),
            zipcode: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern("^[0-9]*$")]),
            cellphone: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern("^[0-9]*$")]),
            homephone: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern("^[0-9]*$")]),
            joiningDate: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required),
            department: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required),
            baseSalary: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern("^[0-9]*$")]),
            taxPercent: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('20'),
            deductions: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('')
        });
        this.departments = [];
        this.mydeductions = [];
        this.selectedOptions = [];
        this.takeHomeSalary = 0;
        this.allUsernames = [];
        this.selectAllDeductions = false;
        this.step = 0;
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aR.params.subscribe(function (params) {
            if (params["id"]) {
                _this.empService.viewEmployee(params["id"]).subscribe(function (res) {
                    _this.employee = res;
                    _this.myDepartment = _this.employee.department;
                    _this.employeeId = params["id"];
                    _this.header = "UPDATE";
                    _this.form = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormGroup */]({
                        username: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.username, [
                            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required,
                            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].email,
                        ]),
                        firstName: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.firstName, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z ]*$'), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(3)]),
                        lastName: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.lastName, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z ]*$'), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(3)]),
                        street: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.address.street, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(3)]),
                        apt: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.address.apt),
                        city: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.address.city, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z ]*$'), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(3)]),
                        state: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.address.state, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern('^[a-zA-Z ]*$'), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(2)]),
                        zipcode: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.address.zipcode, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern("^[0-9]*$")]),
                        cellphone: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.contact.cellphone, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern("^[0-9]*$")]),
                        homephone: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.contact.home, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern("^[0-9]*$")]),
                        joiningDate: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.joiningDate, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required),
                        department: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]([_this.myDepartment], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required),
                        baseSalary: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](_this.employee.salary.baseSalary, [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].pattern("^[0-9]*$")]),
                        taxPercent: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('20'),
                        deductions: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('')
                    });
                });
            }
        });
        this.header = "ADD";
        this.getAllDepartments();
        this.getAllDeductions();
        this.getAllUsernames();
    };
    AddEmployeeComponent.prototype.getAllDepartments = function () {
        var _this = this;
        this.departmentService.getAllDepartments().subscribe(function (department) {
            for (var i = 0; i < department.length; i++) {
                _this.departments.push(department[i]);
            }
        });
    };
    AddEmployeeComponent.prototype.getAllDeductions = function () {
        var _this = this;
        this.salaryService.getAllDeductions().subscribe(function (deduction) {
            var allDeductions = deduction[0].deductions;
            for (var i = 0; i < allDeductions.length; i++) {
                _this.mydeductions.push(allDeductions[i]);
            }
        });
    };
    AddEmployeeComponent.prototype.getAllUsernames = function () {
        var _this = this;
        this.empService.getAllUsernames().subscribe(function (unm) {
            for (var i = 0; i < unm.length; i++) {
                _this.allUsernames.push(unm[i].username);
            }
        });
    };
    AddEmployeeComponent.prototype.checkUsername = function (username) {
        if (this.allUsernames.includes(username.value)) {
            this.usernameError = true;
        }
    };
    AddEmployeeComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    AddEmployeeComponent.prototype.nextStep = function (event) {
        event.preventDefault();
        this.step++;
    };
    AddEmployeeComponent.prototype.prevStep = function (event) {
        event.preventDefault();
        this.step--;
    };
    AddEmployeeComponent.prototype.addEmployee = function (empId, f) {
        var _this = this;
        if (empId !== undefined) {
            var employeeToBeUpdated = {
                username: f.value.username,
                firstName: f.value.firstName,
                lastName: f.value.lastName,
                address: {
                    street: f.value.street,
                    apt: f.value.apt,
                    city: f.value.city,
                    state: f.value.state,
                    zipcode: f.value.zipcode
                },
                contact: {
                    cellphone: f.value.cellphone,
                    home: f.value.homephone
                },
                joiningDate: this.joining_date,
                department: this.department,
                salary: {
                    baseSalary: f.value.baseSalary,
                    deductions: this.selectedOptions,
                    taxPercent: this.tax,
                    takeHomeSalary: this.takeHomeSalary
                }
            };
            this.empService.updateEmployee(employeeToBeUpdated, empId).subscribe(function (updatedEmployee) {
                _this.router.navigateByUrl("/home");
            });
        }
        else {
            console.log("f = ");
            console.log(f);
            if (f.invalid) {
                this.error = true;
                this.confirmDialog(this.error);
            }
            else {
                console.log(f.value.taxPercent);
                var newEmployee = {
                    username: f.value.username,
                    firstName: f.value.firstName,
                    lastName: f.value.lastName,
                    address: {
                        street: f.value.street,
                        apt: f.value.apt,
                        city: f.value.city,
                        state: f.value.state,
                        zipcode: f.value.zipcode
                    },
                    contact: {
                        cellphone: f.value.cellphone,
                        home: f.value.homephone
                    },
                    joiningDate: this.joining_date,
                    department: this.department,
                    salary: {
                        baseSalary: f.value.baseSalary,
                        deductions: this.selectedOptions,
                        taxPercent: this.tax,
                        takeHomeSalary: this.takeHomeSalary
                    }
                };
                this.confirmEmployee(newEmployee);
            }
        }
    };
    AddEmployeeComponent.prototype.selectedDepartment = function (department) {
        console.log("Selected Department = ");
        console.log(department);
        this.department = department;
    };
    AddEmployeeComponent.prototype.selectedDeductions = function (list, baseSalary, taxPercent) {
        console.log("List = ");
        console.log(list);
        //this.selectedOptions = list.value.map(item => item.value);
        this.selectedOptions = list.value.slice();
        console.log("Selected Deductions = ");
        console.log(this.selectedOptions);
        console.log("Base Salary = " + baseSalary.value);
        console.log("Tax Percent = " + taxPercent.value);
        console.log("Deductions = ");
        console.log(this.selectedOptions);
        var base = baseSalary.value;
        this.tax = taxPercent.value;
        var totalDeductionCost = 0;
        if (this.selectedOptions.length == 0) {
            this.takeHomeSalary = baseSalary;
        }
        else {
            for (var i = 0; i < this.selectedOptions.length; i++) {
                totalDeductionCost += this.selectedOptions[i].rate;
            }
        }
        console.log("Total Deduction Cost = " + totalDeductionCost);
        var totalTaxSalary = (this.tax / 100) * base;
        var salaryAfterTax = base - totalTaxSalary;
        this.takeHomeSalary = salaryAfterTax - totalDeductionCost;
        console.log(this.takeHomeSalary);
    };
    AddEmployeeComponent.prototype.joiningDate = function (date) {
        console.log("Date = ");
        console.log(date);
        this.joining_date = date.value;
        this.joining_date = this.joiningDatePipe.transform(this.joining_date);
        console.log(this.joining_date);
    };
    AddEmployeeComponent.prototype.confirmDialog = function (error) {
        var _this = this;
        console.log("New Employee = ");
        //console.log(employee);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__conformdialog_conformdialog_component__["a" /* ConformdialogComponent */], {
            width: '600px',
            data: this.error
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    AddEmployeeComponent.prototype.confirmEmployee = function (employee) {
        var _this = this;
        this.empService.addNewEmployee(employee).subscribe(function (emp) {
            console.log("Inserted employee = ");
            console.log(emp);
            _this.insertedId = emp;
            console.log("Inserted ID = ");
            console.log(_this.insertedId._id);
            _this.router.navigate(["/employees/view-employee", _this.insertedId._id]);
        });
    };
    AddEmployeeComponent.prototype.homeSalary = function (baseSalary, taxPercent) {
        this.tax = taxPercent.value;
        console.log("baseSalary = " + baseSalary.value);
        console.log("Tax = " + taxPercent.value);
        var salaryAfterTax = (this.tax / 100) * baseSalary.value;
        this.takeHomeSalary = baseSalary.value - salaryAfterTax;
    };
    AddEmployeeComponent.prototype.selectAll = function (baseSalary, taxPercent) {
        console.log("Base Salary = " + baseSalary.value);
        console.log("Tax Percent = " + taxPercent.value);
        if (this.selectAllDeductions) {
            this.takeHomeSalary = baseSalary.value;
            this.selectAllDeductions = false;
        }
        else {
            var totalDeductionCost = 0;
            for (var i = 0; i < this.mydeductions.length; i++) {
                totalDeductionCost += this.mydeductions[i].rate;
            }
            var totalTaxSalary = (taxPercent.value / 100) * baseSalary.value;
            var salaryAfterTax = baseSalary.value - totalTaxSalary;
            this.takeHomeSalary = salaryAfterTax - totalDeductionCost;
            this.selectAllDeductions = true;
        }
        console.log("Select All Clicked");
    };
    AddEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: 'add-employee',
            template: __webpack_require__("../../../../../src/app/components/add-employee/add-employee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-employee/add-employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_department_service__["a" /* DepartmentService */],
            __WEBPACK_IMPORTED_MODULE_2__services_salary_service__["a" /* SalaryService */],
            __WEBPACK_IMPORTED_MODULE_1__joiningdate_pipe__["a" /* JoiningDate */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/conformdialog/conformdialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/conformdialog/conformdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title>SAVE EMPLOYEE</h2>\n  <hr>\n  <mat-dialog-content>\n    <!-- {{data.firstName}} details will be inserted into database -->\n    <div class=\"alert alert-danger\" *ngIf=\"data\">\n        <h5>Please fill in the required details</h5>\n      \n      </div>\n    <br>\n    <br>\n    <!-- <strong>{{data}}</strong> -->\n  </mat-dialog-content>\n  <hr>\n  <mat-dialog-actions>\n    <button mat-raised-button (click)=\"onCloseConfirm(data)\">CONFIRM</button>&nbsp;\n    <button mat-raised-button (click)=\"onCloseCancel()\">CANCEL</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/conformdialog/conformdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConformdialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ConformdialogComponent = /** @class */ (function () {
    function ConformdialogComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    ConformdialogComponent.prototype.ngOnInit = function () {
    };
    ConformdialogComponent.prototype.onCloseConfirm = function (employee) {
        console.log("In confirm new employee = ");
        console.log(employee);
        this.thisDialogRef.close('Confirm');
    };
    ConformdialogComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    ConformdialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conformdialog',
            template: __webpack_require__("../../../../../src/app/components/conformdialog/conformdialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/conformdialog/conformdialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], String])
    ], ConformdialogComponent);
    return ConformdialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/view-all-employees/view-all-employees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.container{\r\n\r\n    width: 100%;\r\n}\r\n.table{\r\n\r\n    width: 90%;\r\n   \r\n}*/\r\n\r\n::ng-deep .mat-header-row{\r\n\r\n    min-height : 42px !important;\r\n    border-bottom-color: black;\r\n}\r\n\r\n::ng-deep .mat-header-cell{\r\n\r\n    color: black !important;\r\n    font-size: 14px !important;\r\n    font-weight: bold !important;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n::ng-deep .mat-row{\r\n    min-height: 32px !important;\r\n    border-bottom-color: black !important;\r\n}\r\n\r\n::ng-deep .mat-cell{\r\n\r\n    -ms-flex-pack: distribute;\r\n\r\n        justify-content: space-around;\r\n    padding: 10px;\r\n}\r\n\r\nmat-row:nth-child(even){\r\n    background-color: #90CAF9;\r\n    }\r\n\r\nmat-row:nth-child(odd){\r\n    background-color: whitesmoke;\r\n    }\r\n\r\n.mat-row{\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.message{\r\n    margin: auto; \r\n    width: 50%;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-all-employees/view-all-employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"flag\" class=\"message\">\n    <h4>{{message}}</h4>\n</div>\n<div class=\"container\" *ngIf=\"!flag\">\n  \n  <div class=\"table\">\n        <mat-form-field>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n        </mat-form-field>\n        <mat-table class=\"mat-elevation-z10\" [dataSource]=\"dataSource\" matSort>\n            <!-- <ng-container *ngFor=\"let cols of displayedColumns\" matColumnDef=\"{{cols}}\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> {{cols}} </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{element[cols]}} </mat-cell>\n            </ng-container> -->\n            <ng-container matColumnDef=\"_id\">\n                <mat-header-cell fxFlex=\"100px\" *matHeaderCellDef mat-sort-header> User ID </mat-header-cell>\n                <mat-cell fxFlex=\"100px\" *matCellDef=\"let employee\"> {{employee._id}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"username\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> User Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let employee\"> {{employee.username}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"firstName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> First Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let employee\"> {{employee.firstName}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"lastName\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let employee\"> {{employee.lastName}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"contact\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Contact </mat-header-cell>\n                <mat-cell *matCellDef=\"let employee\"> {{employee.contact.cellphone}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"department\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Department </mat-header-cell>\n                <mat-cell *matCellDef=\"let employee\"> {{employee.department.departmentName}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"baseSalary\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Base Salary </mat-header-cell>\n                <mat-cell *matCellDef=\"let employee\"> {{employee.salary.baseSalary}} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"takeHomeSalary\">\n                <mat-header-cell *matHeaderCellDef  mat-sort-header> Take Home Salary </mat-header-cell>\n                <mat-cell *matCellDef=\"let employee\"> {{employee.salary.takeHomeSalary}} </mat-cell>\n            </ng-container>\n          \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"rowClicked(row)\"></mat-row>\n  \n            \n          </mat-table>\n            <mat-paginator class=\"mat-elevation-z10\" [length]=\"5\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25]\">\n          </mat-paginator>\n    </div>\n      \n</div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/components/view-all-employees/view-all-employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAllEmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewAllEmployeesComponent = /** @class */ (function () {
    function ViewAllEmployeesComponent(empService, router) {
        this.empService = empService;
        this.router = router;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatTableDataSource */]();
        this.displayedColumns = ["_id", "username", "firstName", "lastName", "contact", "department", "baseSalary", "takeHomeSalary"];
    }
    ViewAllEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empService.getAllEmployees().subscribe(function (employees) {
            console.log(employees);
            /*let coulmnNames = Object.keys(employees[0]);
      
            for(let i = 0; i < coulmnNames.length; i++)
            {
              this.displayedColumns.push(coulmnNames[i]);
            }
      
            console.log("Columns = ");
            console.log(this.displayedColumns);*/
            if (employees.length > 0) {
                _this.dataSource.data = employees;
                _this.flag = false;
            }
            else {
                _this.flag = true;
                _this.message = "NO EMPLOYEES ADDED YET! PLEASE ADD SOME EMPLOYEES!";
            }
        });
    };
    ViewAllEmployeesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ViewAllEmployeesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    ViewAllEmployeesComponent.prototype.rowClicked = function (row) {
        console.log(row);
        this.router.navigate(["/employees/view-employee", row._id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginator */])
    ], ViewAllEmployeesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSort */])
    ], ViewAllEmployeesComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])("data-source"),
        __metadata("design:type", Object)
    ], ViewAllEmployeesComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])("columns"),
        __metadata("design:type", Object)
    ], ViewAllEmployeesComponent.prototype, "displayedColumns", void 0);
    ViewAllEmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-view-all-employees',
            template: __webpack_require__("../../../../../src/app/components/view-all-employees/view-all-employees.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-all-employees/view-all-employees.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], ViewAllEmployeesComponent);
    return ViewAllEmployeesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/view-employee/view-employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-header{\r\n    background: #5C6BC0;\r\n}\r\n\r\n/*.salary{\r\n\r\n    margin: auto;\r\n    justify-content: center;\r\n}*/\r\n\r\n.base-salary{\r\n    margin: auto; \r\n    width: 50%;\r\n    text-align: center;\r\n    \r\n\r\n    /* justify-content: space-around; */\r\n}\r\n\r\n.row-header{\r\n    margin:auto;\r\n    text-align: center;\r\n}\r\n\r\nul li{\r\n    list-style-type: none;\r\n}\r\n\r\n.gaps{\r\n    line-height: 0.1;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n}\r\n\r\n.gap-address{\r\n    line-height: 0.5;\r\n}\r\n\r\n/*.icon-class{\r\n\r\n    display: flex;\r\n    align-items: center;\r\n}*/\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-employee/view-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mat-elevation-z8\">\n  <div class=\"card-header\">\n      <h5 class=\"my-card-header-title\">VIEW {{firstName | uppercase }} DETAILS</h5>\n  </div>\n  <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6 base-salary\">\n            <p>Base Salary</p>\n            <h5 class=\"gaps\">USD: {{baseSalary}}</h5>\n        </div>\n        <div class=\"col-md-6 base-salary\">\n            <p>Take Home Salary</p>\n            <h5 class=\"gaps\">USD: {{takeHomeSalary}}</h5>\n        </div>\n      </div>\n      <hr>\n\n      <div class=\"row \">\n          <div class=\"col-md-12  base-salary\">\n            \n                <h5 class=\"gap\">Personal Details</h5>\n            \n          </div>\n      </div><br>\n      <div class=\"row\">\n        <div class=\"col-md-4 base-salary\">\n            <p>Username</p>\n            <h5 class=\"gaps\">{{username}}</h5>\n        </div>\n        <div class=\"col-md-4 base-salary\">\n            <p>First Name</p>\n            <h5 class=\"gaps\">{{firstName}}</h5>\n        </div>\n        <div class=\"col-md-4 base-salary\">\n            <p>Last Name</p>\n            <h5 class=\"gaps\">{{lastName}}</h5>\n        </div>\n      </div><br>\n      <div class=\"row\">\n        <div class=\"col-md-4 base-salary\">\n            <p>Address</p>\n            <h6 class=\"gap-address\">{{street}} {{apt}}</h6>\n            <h6 class=\"gap-address\">{{city}} {{state}}</h6>\n            <h6 class=\"gap-address\">{{zipcode}}</h6>\n        </div>\n        <div class=\"col-md-4 base-salary\">\n            <p>Cellphone</p>\n            <h5 class=\"gaps\">{{cellphone}}</h5>\n        </div>\n        <div class=\"col-md-4 base-salary\">\n            <p>Home Phone</p>\n            <h5 class=\"gaps\">{{home}}</h5>\n        </div>\n        <!-- <div class=\"col-md-2 base-salary\">\n            <p>State</p>\n            <h5>{{employee.address.state}}</h5>\n        </div>\n        <div class=\"col-md-2 base-salary\">\n            <p>Zipcode</p>\n            <h5>{{employee.address.zipcode}}</h5>\n        </div> -->\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-12 base-salary\">\n            <h5 class=\"gaps\">Employment Details</h5>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 base-salary\">\n            <p>Joining Date</p>\n            <h5 class=\"gaps\">{{joining_date | date:'shortDate' }}</h5>\n        </div>\n        <div class=\"col-md-6 base-salary\">\n            <p>Department</p>\n            <h5 class=\"gaps\">{{department}}</h5>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-12 base-salary\">\n            <h5 class=\"gaps\">Salary Details</h5>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 base-salary\">\n            <p>Deductions</p>\n            <div *ngIf=\"flag\">\n                <h5>{{message}}</h5>\n            </div>\n            <ul class=\"base-salary\" *ngIf=\"!flag\">\n                \n                <li *ngFor=\"let deduction of deductions\">\n                    <p class=\"gap\">Type: {{deduction.type}}</p>\n                    <p class=\"gap\">Rate: {{deduction.rate}}</p>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-md-4 base-salary\">\n            <p>Tax Percent</p>\n            <h5 class=\"gaps\">{{taxPercent}}</h5>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-12 base-salary\">\n                <button class=\"btn btn-primary mat-elevation-z8\" (click)=\"callUpdate()\">Edit Employee</button>\n        </div>\n      </div>\n            \n     \n    \n  </div>\n      \n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/view-employee/view-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewEmployeeComponent = /** @class */ (function () {
    function ViewEmployeeComponent(empService, router, aR) {
        this.empService = empService;
        this.router = router;
        this.aR = aR;
    }
    ViewEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aR.params.subscribe(function (params) {
            _this.employeeId = params["_id"];
            console.log("In view = " + _this.employeeId);
        });
        this.empService.viewEmployee(this.employeeId).subscribe(function (emp) {
            console.log("Employee = ");
            console.log(emp);
            _this.employee = emp;
            console.log("Joining Date = ");
            console.log(_this.employee.joiningDate);
            //this.joining_date = this.employee.joiningDate;
            //this.joining_date = this.joiningDatePipe.transform(this.joining_date);
            _this.baseSalary = _this.employee.salary.baseSalary;
            _this.takeHomeSalary = _this.employee.salary.takeHomeSalary;
            _this.firstName = _this.employee.firstName;
            _this.username = _this.employee.username;
            _this.lastName = _this.employee.lastName;
            _this.street = _this.employee.address.street;
            _this.apt = _this.employee.address.apt;
            _this.city = _this.employee.address.city;
            _this.state = _this.employee.address.state;
            _this.zipcode = _this.employee.address.zipcode;
            _this.cellphone = _this.employee.contact.cellphone;
            _this.homephone = _this.employee.contact.home;
            _this.taxPercent = _this.employee.salary.taxPercent;
            _this.department = _this.employee.department.departmentName;
            console.log("Department = ");
            console.log(_this.employee.department);
            if (_this.employee.salary.deductions.length > 0) {
                _this.deductions = _this.employee.salary.deductions.slice();
                _this.flag = false;
            }
            else {
                _this.flag = true;
                _this.message = "NO DEDUCTIONS SELECTED!";
            }
        });
    };
    ViewEmployeeComponent.prototype.callUpdate = function () {
        this.router.navigate(["/employees/update-employee", this.employeeId]);
    };
    ViewEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-employee',
            template: __webpack_require__("../../../../../src/app/components/view-employee/view-employee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-employee/view-employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ViewEmployeeComponent);
    return ViewEmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/joiningdate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoiningDate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var JoiningDate = /** @class */ (function (_super) {
    __extends(JoiningDate, _super);
    function JoiningDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JoiningDate.prototype.transform = function (value, args) {
        ///MMM/dd/yyyy 
        //return super.transform(value, "MMM/dd/yyyy");
        if (!value) {
            return null;
        }
        return _super.prototype.transform.call(this, value, "MM/dd/yyyy");
    };
    JoiningDate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'joininDatePipe'
        })
    ], JoiningDate);
    return JoiningDate;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]));



/***/ }),

/***/ "../../../../../src/app/services/department.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
    }
    DepartmentService.prototype.getAllDepartments = function () {
        return this.http.get("/departments");
    };
    DepartmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "../../../../../src/app/services/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.addNewEmployee = function (employee) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        return this.http.post("/employees/add", JSON.stringify(employee), httpOptions);
    };
    EmployeeService.prototype.viewEmployee = function (id) {
        console.log("In service = " + id);
        return this.http.get("/employees/view-employee/" + id);
    };
    EmployeeService.prototype.getAllEmployees = function () {
        return this.http.get("/employees");
    };
    EmployeeService.prototype.updateEmployee = function (employee, id) {
        console.log("In update employee = ");
        console.log("Employee ID = ");
        console.log(id);
        console.log("Employee to be updated = ");
        console.log(employee);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        return this.http.post("/employees/update/" + id, JSON.stringify(employee), httpOptions);
    };
    EmployeeService.prototype.getAllUsernames = function () {
        return this.http.get("/employees/usernames");
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/salary.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalaryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalaryService = /** @class */ (function () {
    function SalaryService(http) {
        this.http = http;
    }
    SalaryService.prototype.getAllDeductions = function () {
        return this.http.get("/salary");
    };
    SalaryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SalaryService);
    return SalaryService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map