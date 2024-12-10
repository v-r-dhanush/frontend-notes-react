console.log("welcome to typescript");
//1. string datatype
var fname;
fname = "Dhanush";
var lname = 'ravi';
console.log("First-Name:".concat(fname, " Last-Name:").concat(lname));
//2.number
var num1 = 100, num2 = 0.5, num3 = 1234456;
console.log(num1, num2, num3);
//3.boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
//4.array
var courses = ["html", "css", "js", "react"];
var courses1 = ["html", "css", "js", "react"];
var pinCode = [410014, 410015, 410016];
var pinCode1 = [410014, 410015, 410016];
//5.tupple : It allow us to store multiple type of data into array.
var product = [100, "mango", true];
//6.enum : It create variable with constant values
var days;
(function (days) {
    days[days["sun"] = 501] = "sun";
    days[days["mon"] = 502] = "mon";
    days[days["tue"] = 503] = "tue";
    days[days["wed"] = 504] = "wed";
    days[days["thurs"] = 505] = "thurs";
    days[days["fri"] = 506] = "fri";
    days[days["sat"] = 507] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
//7.union : It allow us to store multiple values in single variable
var info = true;
//8.any : when we don't know what type of data is going to store in variable in that case we use it.
var mix = "hello";
//task1
var f1 = "dhanush ";
var l1 = "V R";
function names(f1, l1) {
    console.log(f1 + l1);
}
names(f1, l1);
//task2
var r = 10;
function area(r) {
    console.log(3.14 * r * r);
}
area(r);
