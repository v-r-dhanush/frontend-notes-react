//export class Person{
class Person{
    //data-member
    pid:number=101;
    pname:string="Dhanush";
    paddress:string="chennai";
    //creating constructor
    constructor(id:number,name:string,address:string){
        this.pid=id;
        this.pname=name;
        this.paddress=address;
    }

    //member-function

    personDetails(){
        console.log(`Id:${this.pid} Name:${this.pname} Address:${this.paddress}`);
    }
}

export default Person;
//create object of class

// let personObj = new Person(102,"rahul","chennai");
// console.log(personObj.pname);
// personObj.personDetails();

// let personObj1 = new Person(103,"sai","chennai");
// personObj1.personDetails();
// let personObj2 = new Person(104,"nithish","chennai");
// personObj2.personDetails();

