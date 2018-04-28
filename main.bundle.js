webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    color:  #369;\r\n}\r\n\r\nhr {\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- &nbsp; <input  type=\"text\"  [(ngModel)]=\"firstname\">\r\n\r\n<p>&nbsp; Hello,  {{ firstname  }}</p> -->\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <!--<h3>This is an App Component</h3>-->\r\n            <h3>{{ pageHeader }}</h3>\r\n            <hr>\r\n            <!-- <app-employees></app-employees> -->\r\n            <app-servers></app-servers>\r\n             <!-- <div class=\"app-servers\"></div>  -->\r\n            <!--<div app-servers></div>-->\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n<hr>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <!--<h3>This is an App Component</h3>-->\r\n            <h3>{{ employeeHeader }}</h3>\r\n            <hr>           \r\n            <app-employees></app-employees>            \r\n        </div>\r\n    </div>\r\n</div>\r\n<hr>\r\n<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">    \r\n                <h3>{{ employeeListHeader }}</h3>\r\n                <hr>           \r\n                <app-employeeList></app-employeeList>            \r\n            </div>\r\n        </div>\r\n</div>\r\n<hr>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <!--<h3>This is an App Component</h3>-->\r\n            <h3>{{ resourceHeader }}</h3>\r\n            <hr>           \r\n            <a href=\"https://github.com/girishmate1988/AngularComponentsDemo\" alt=\"MySourceCode\">https://github.com/girishmate1988/AngularComponentsDemo</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<hr>\r\n<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!--<h3>This is an App Component</h3>-->\r\n                <h3>{{ referenceHeader }}</h3>\r\n                <hr>           \r\n                <app-references></app-references>            \r\n            </div>\r\n        </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = "Mathematical Summation";
        this.employeeHeader = "Employee Details";
        this.referenceHeader = "References, Speakers";
        this.employeeListHeader = "Employee List";
        this.resourceHeader = "Source Repository";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_server_component__ = __webpack_require__("./src/app/server/server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servers_servers_component__ = __webpack_require__("./src/app/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employees_employees_component__ = __webpack_require__("./src/app/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__references_references_component__ = __webpack_require__("./src/app/references/references.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employees_employeeList_component__ = __webpack_require__("./src/app/employees/employeeList.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__server_server_component__["a" /* ServerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__servers_servers_component__["a" /* ServersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__references_references_component__["a" /* ReferencesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__employees_employeeList_component__["a" /* EmployeeListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employees/employeeList.component.css":
/***/ (function(module, exports) {

module.exports = "table {\r\n    color:#369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: large;\r\n    border-collapse: collapse;\r\n}\r\n\r\nth {\r\n    padding-right: 55px;\r\n    border: 1px solid #369;\r\n}\r\n\r\ntd{\r\n    padding-right: 55px;\r\n    border: 1px solid #369;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/employees/employeeList.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\r\n        <thead>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Gender</th>\r\n            <th>Age</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor= \"let employee of employees\">\r\n                <td>{{ employee.firstName }}</td>\r\n                <td>{{ employee.lastName }}</td>\r\n                <td>{{ employee.gender }}</td>\r\n                <td>{{ employee.age }}</td>\r\n            </tr>\r\n            <tr *ngIf=\"!employees || employees.legth==0\">\r\n                <td>No employees to display</td>\r\n            </tr>\r\n        </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/employees/employeeList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            { firstName: 'Girish', lastName: 'Mate', gender: 'Male', age: '29' },
            { firstName: 'Jebish', lastName: 'Kurian', gender: 'Male', age: '38' },
            { firstName: 'Kalai', lastName: 'Vanan', gender: 'Male', age: '28' },
            { firstName: 'Divya', lastName: 'Manish', gender: 'Female', age: '30' }
        ];
        //employees = null;
    }
    EmployeeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employeeList',
            template: __webpack_require__("./src/app/employees/employeeList.component.html"),
            styles: [__webpack_require__("./src/app/employees/employeeList.component.css")]
        })
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\ntable {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: large;\r\n    border-collapse: collapse; \r\n}\r\n\r\ntd {\r\n    border: 1px solid-black;\r\n    padding-left: 10px;\r\n    border-spacing: 2px;\r\n    border-bottom-width: 2px;\r\n    width: 50%;\r\n}"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p>This is a Employees component</p>-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      First Name: \n    </div>\n    <div class=\"col-md-2\" style=\"padding-top: 2px;\">\n      <span ><input  type=\"text\" [(ngModel)]=\"firstName\"></span>    \n    </div>\n    <div class=\"col-md-8\">\n      My First name is <strong>{{firstName}}</strong>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-2\">\n        Last Name  \n      </div>\n      <div class=\"col-md-2\" style=\"padding-top: 2px;\">\n          <span ><input  type=\"text\" [(ngModel)]=\"lastName\"></span>      \n        </div>\n      <div class=\"col-md-8\">\n        My Last name is <strong>{{lastName}}</strong>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf='showDetails'>\n      <div class=\"col-md-2\">\n          Gender \n        </div>\n        <div class=\"col-md-2\" style=\"padding-top: 2px;\">\n            <span ><input  type=\"text\" [(ngModel)]=\"gender\"></span>    \n        </div>\n        <div class=\"col-md-8\">\n          I am a <strong>{{gender ? gender : 'Not Applicable'}}</strong>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf='showDetails'>\n          <div class=\"col-md-2\">\n            Age \n          </div>\n          <div class=\"col-md-2\" style=\"padding-top: 2px;\">\n              <span >\n                <input class=\"form-control\" \n                 type=\"text\"\n                 [(ngModel)]=\"age\">\n                </span>    \n          </div>\n          <div class=\"col-md-8\">\n            My Age name is <strong>{{age}}</strong>\n          </div>\n      </div>\n        <p>{{ 'Employee Full Name: '+ getfullName()}}</p>            \n        <br />\n        <div class=\"row\">\n           <div class=\"col-md-6\">\n              {{ firstName }}  \n           </div>            \n           <div class=\"col-md-6\">\n              <button \n              class=\"btn btn-primary\"\n              (click)=\"Btn_OnClick()\">Reset Name</button>\n           </div>\n        </div>\n    \n    <br />\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n          {{ firstName }}             \n          <button (click)=\"toggleDetails()\">\n              {{this.showDetails ? 'Hide ' : 'Add More '}}Details\n            </button>          \n        </div>\n        <div class=\"col-md-8\">\n            <button [hidden]= \"!this.showDetails\">\n                Save Details\n              </button>          \n        </div>\n     </div>    \n    <br />\n    <!--<div class=\"row\">\n        <div class=\"col-md-12\">\n            <app-employeeList></app-employeeList>  \n        </div>\n     </div>-->\n    </div>\n\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
        this.firstName = '';
        this.lastName = '';
        this.gender = '';
        this.age = '';
        this.showDetails = false;
    }
    EmployeesComponent.prototype.getfullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent.prototype.Btn_OnClick = function () {
        this.firstName = '';
    };
    EmployeesComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employees',
            template: __webpack_require__("./src/app/employees/employees.component.html"),
            styles: [__webpack_require__("./src/app/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/references/references.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/references/references.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n        <div class=\"col-md-6\">\n          <span>Kud Venkat</span>           \n        </div>    \n        <div class=\"col-md-6\">\n            <img src=\"{{imagePath}}\" alt=\"test-image\" />                    \n        </div>\n  </div>\n  <div class=\"row\" style=\"padding-top:5px\">\n      <div class=\"col-md-6\">\n          <span>MaxMillan Schwarzmuller</span>         \n      </div>    \n      <div class=\"col-md-6\" style=\"padding-top:5px\">          \n          <img src=\"{{imagePath1}}\" alt=\"test-image\"/>\n      </div>\n</div>\n</div>\n\n\n     "

/***/ }),

/***/ "./src/app/references/references.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferencesComponent = /** @class */ (function () {
    function ReferencesComponent() {
        this.imagePath = 'https://i.ytimg.com/vi/2FkkAqFWRk8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAFUMqQexMCPR5IdxHe7_RXYMmt8Q';
        this.imagePath1 = 'https://udemy-images.udemy.com/course/240x135/1391332_0f50.jpg';
    }
    ReferencesComponent.prototype.ngOnInit = function () {
    };
    ReferencesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-references',
            template: __webpack_require__("./src/app/references/references.component.html"),
            styles: [__webpack_require__("./src/app/references/references.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferencesComponent);
    return ReferencesComponent;
}());



/***/ }),

/***/ "./src/app/server/server.component.css":
/***/ (function(module, exports) {

module.exports = "h3 {\r\ncolor: cadetblue;\r\npadding: 10,10,10,10;\r\n}\r\n\r\n.online{\r\n    color:white;\r\n}\r\n\r\n.boldClass\r\n{\r\n    font-weight: bold;\r\n}\r\n\r\n.italicClass\r\n{\r\n    font-style: italic;\r\n}"

/***/ }),

/***/ "./src/app/server/server.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p>This is the Server Component</p>-->\r\n\r\n<h3>Addition of two numbers</h3>\r\n<input type = \"number\" [(ngModel)] = \"num1\"/> + <input type=\"number\" [(ngModel)] = \"num2\"/> \r\n= <span>{{(num1?num1:0) + (num2?num2:0)}}</span>  \r\n\r\n<h3>Substraction of two numbers</h3>\r\n<input type=\"number\" [(ngModel)] = \"num3\"/> - <input type=\"number\" [(ngModel)] = \"num4\"/> \r\n= <span>{{num3 - num4}}</span>  \r\n\r\n<h3>Server status</h3>\r\n<p \r\n[style.backgroundColor]=\"isGreen ? 'Green' : 'red'\"\r\n[ngClass]=\"{online: ServerStatus ==='Online'}\">\r\n<!--[ngStyle]=\"{backgroundColor:getColor()}\"-->\r\n<!--[ngClass]='addClass()'>-->\r\n<!--[class]=\"classesToApply\">-->\r\n<!--[class.online] = \"ServerStatus\">-->\r\n\r\n{{'Server'}} with the ID: <b>{{ServerID}}</b> and Name: <b>{{ServerName}}</b> is <b>{{getServerStatus()}}</b></p>\r\n<!--<p [style.font-size.px]=\"fontSize\">{{ServerName}}</p>-->\r\n<p [ngStyle]=\"addStyles()\">{{ServerName}}</p>\r\n\r\n<button class=\"btn btn-primary\" \r\n        [disabled]=\"!allowNewServer\"\r\n        (click)=\"OnCreateServer()\">Add Server</button>\r\n<!--<p [innerText]=\"allowNewServer\"></p> -->\r\n<!--{{ServerCreationStatus}}-->\r\n<p *ngIf=\"ServerCreated; else noServer\">{{ServerCreationStatus}}</p> \r\n<ng-template #noServer>\r\n        <p>No Server was created</p> \r\n</ng-template> \r\n<!--<app-server *ngFor=\"let server of servers12\">Servers</app-server>-->\r\n<!--<label>Server Name</label>-->\r\n<br /><br />\r\n\r\n<!--<input\r\nclass=\"form-control\"\r\ntype=\"text\"\r\n(input)=\"OnUpdateServerName($event)\">-->\r\n<input\r\nclass=\"form-control\"\r\n[(ngModel)]=\"ServerName\">\r\n<!--<p>Server Name:<b>{{ServerName? ServerName: 'Not found !'}}</b></p>-->"

/***/ }),

/***/ "./src/app/server/server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.num1 = 0;
        this.num2 = 0;
        this.num3 = 0;
        this.num4 = 0;
        this.alert_message = 'Success';
        //servers12 = ['Server1','Server2','Server3'];
        this.ServerID = 10;
        //ServerName: string = 'DCS-AUH';
        this.ServerName = 'Test Server';
        this.ServerCreationStatus = 'No Server was created !';
        this.ServerCreated = false;
        this.ServerStatus = '';
        this.applyBoldClass = true;
        this.applyItalicClass = true;
        this.classesToApply = 'boldClass italicClass';
        this.isGreen = false;
        this.fontSize = 50;
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 5000);
        this.ServerStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
    }
    ServerComponent.prototype.getServerStatus = function () {
        return this.ServerStatus;
    };
    ServerComponent.prototype.ngOnInit = function () {
    };
    ServerComponent.prototype.getColor = function () {
        return this.ServerStatus === 'Online' ? 'green' : 'red';
    };
    ServerComponent.prototype.OnCreateServer = function () {
        this.ServerCreated = true;
        this.ServerCreationStatus = 'New Server was created, Name is ' + this.ServerName;
    };
    ServerComponent.prototype.OnUpdateServerName = function (event) {
        //console.log(event);
        this.ServerName = event.target.value;
    };
    ServerComponent.prototype.addClass = function () {
        var styles = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };
        return styles;
    };
    ServerComponent.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-style': this.applyItalicClass ? 'italic' : 'normal',
            'font-weight': this.applyBoldClass ? 'bold' : 'normal'
        };
        return styles;
    };
    ServerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-server',
            template: __webpack_require__("./src/app/server/server.component.html"),
            styles: [__webpack_require__("./src/app/server/server.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/servers/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p>This is the Servers component</p>-->\n\n<app-server></app-server>\n\n<hr>\n\n<h3>Division of two numbers</h3>\n<input type=\"number\" [(ngModel)] = \"num5\"/> / <input type=\"number\" [(ngModel)] = \"num6\"/> \n= <span>{{num5 / num6}}</span>  \n\n<h3>Multiplication of two numbers</h3>\n<input type=\"number\" [(ngModel)] = \"num7\"/> x <input type=\"number\" [(ngModel)] = \"num8\"/> \n= <span>{{num7 * num8}}</span>  "

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
        this.num5 = 0;
        this.num6 = 0;
        this.num7 = 0;
        this.num8 = 0;
        this.alert_message = 'Failure';
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: __webpack_require__("./src/app/servers/servers.component.html"),
            selector: 'app-servers',
            styles: [__webpack_require__("./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map