"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    //creating constructor
    function Person(id, name, address) {
        //data-member
        this.pid = 101;
        this.pname = "Dhanush";
        this.paddress = "chennai";
        this.pid = id;
        this.pname = name;
        this.paddress = address;
    }
    //member-function
    Person.prototype.personDetails = function () {
        console.log("Id:".concat(this.pid, " Name:").concat(this.pname, " Address:").concat(this.paddress));
    };
    return Person;
}());
exports.Person = Person;
//create object of class
// let personObj = new Person(102,"rahul","chennai");
// console.log(personObj.pname);
// personObj.personDetails();
// let personObj1 = new Person(103,"sai","chennai");
// personObj1.personDetails();
// let personObj2 = new Person(104,"nithish","chennai");
// personObj2.personDetails();
