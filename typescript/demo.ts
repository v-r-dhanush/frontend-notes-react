console.log("welcome to typescript");
//1. string datatype
let fname:string;
    fname="Dhanush";
    let lname : string ='ravi';
    console.log(`First-Name:${fname} Last-Name:${lname}`);
//2.number
let num1:number=100,num2:number=0.5,num3:number=1234456;
console.log(num1,num2,num3);
//3.boolean
let cond1:boolean=true,cond2:boolean=false;
console.log(cond1,cond2);
//4.array
let courses:string[] =["html","css","js","react"];
let courses1:Array<string> =["html","css","js","react"];
let pinCode:Number[] = [410014,410015,410016];
let pinCode1:Array<Number> = [410014,410015,410016];
//5.tupple : It allow us to store multiple type of data into array.
let product:[number,string,boolean] = [100,"mango",true];
//6.enum : It create variable with constant values
enum days{sun=501,mon,tue,wed,thurs,fri,sat};
let data1 = days.sun;

//7.union : It allow us to store multiple values in single variable
let info:number|string |boolean = true;

//8.any : when we don't know what type of data is going to store in variable in that case we use it.
let mix : any="hello";

//task1
let f1:string="dhanush ";
let l1:string="V R";

function names(f1,l1){
    console.log(f1+l1);
}
names(f1,l1);

//task2

let r:number=10;
function area(r){
    console.log(3.14*r*r);
}
area(r);


