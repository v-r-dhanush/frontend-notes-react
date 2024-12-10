"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var oops_1 = require("./oops");
var company = /** @class */ (function (_super) {
    __extends(company, _super);
    function company(id, name, addr, comname, econtact, epost) {
        var _this = _super.call(this, id, name, addr) || this;
        _this.cName = comname;
        _this.empContact = econtact;
        _this.empPost = epost;
        return _this;
    }
    company.prototype.personDetails = function () {
        console.log("EmpId:".concat(this.pid, " EmpName:").concat(this.pname, " Address:").concat(this.paddress, " Post").concat(this.empPost, " Company:").concat(this.cName, " Contact:").concat(this.empContact));
    };
    return company;
}(oops_1.Person));
var comOnj = new company(201, "Dhanush", "chennai", "changepond", 888888, "fullstack Developer");
comOnj.personDetails();
