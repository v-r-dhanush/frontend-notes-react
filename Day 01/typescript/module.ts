//import { Person } from "./oops";


import Person from "./oops";
class company extends Person{
    cName:string;
    empContact:number;
    empPost:string;

    constructor(id:number,name:string,addr:string,comname:string,econtact:number,epost:string){
        super(id,name,addr);
        this.cName=comname;
        this.empContact=econtact;
        this.empPost=epost;

    }

    personDetails(){
        console.log(`EmpId:${this.pid} EmpName:${this.pname} Address:${this.paddress} Post${this.empPost} Company:${this.cName} Contact:${this.empContact}`);
    }

}



let comOnj = new company(201,"Dhanush","chennai","changepond",888888,"fullstack Developer");
comOnj.personDetails();

