import React,{Component} from "react";

class ClassComp extends Component{

    render(){
        return (
            
            <div>
            <h2>This is Class Component</h2>
            <p>My Name is {this.props.lname} , I am a : {this.props.lpost} </p>
            </div>
        );
    }
}

export default ClassComp;