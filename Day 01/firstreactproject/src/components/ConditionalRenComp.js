import { Component } from "react";

class ConditionalRenComp extends Component{
    constructor(){
        super();
        this.state={
            isCond:true
        }
    }
    render(){
        //1.use of if else
        let msg="";
        if(this.state.isCond){
           // return <h2>Admin login</h2>
           msg="Admin login";
        }
        else{
            //return <h2>User login</h2>
            msg="User login";
        }
        //2.use of element as variable
        //return <h2>{msg}</h2>
        
        //3.use of ternary operator
        //return(!this.state.isCond)?<h2>admin login</h2>:<h2>user login</h2>

        //4.use of short circuit
        return this.state.isCond && <h2>Admin login</h2>
    }
}

export default ConditionalRenComp;