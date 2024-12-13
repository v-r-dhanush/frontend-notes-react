import { Component } from "react";
import ChildComp from "../components/ChildComp";
import MyPureComp from "../components/MyPureComp";
import MymemoComp from "../components/MyMemoComp";

class ParentComp extends Component{
    constructor(props){
        super(props);
        this.state={
            empName:"Dhanush",
            empSal:50000
        }
    }
    changeof =()=>{
        this.setState((prevState)=>({empName:"Dhanush",empSal:prevState.empSal+50000}));
        
    }

    render(){
        const {empName,empSal} = this.state; // destructing of state
        const {gender,contact} = this.props; // destructing of props
        // console.log
        return(
            <div>
                <h2>This is Parent Component</h2>
                <p>Employee Name:{empName} and salary:{empSal}</p>
                {/* <p>Employee Name:{this.state.empName} and salary:{this.state.empSal}</p> */}

                <p>Gender:{gender} and Contact:{contact}</p>
                {/* <p>Gender:{this.props.gender} and Contact:{this.props.contact}</p> */}

                <button type="button" onClick={()=>this.changeof()}>change</button>
                <hr/>
                <ChildComp name={empName} sal={empSal} manageState={()=>this.changeof()}/>
                    <MyPureComp empName={empName}/>
                    <hr/>
                <MymemoComp empName={empName}/>

            </div>
            
        )
    }
    
}
export default ParentComp;