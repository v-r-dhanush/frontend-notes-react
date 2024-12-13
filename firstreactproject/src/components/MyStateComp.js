import { Component } from "react";

class MyStateComp extends Component{

    constructor(){
        super();
        this.state={
            empName:"Dhanush",
            empSal:50000
        }
    }

    changeStateData = ()=>{
        //this.setState({empName:"dhanush",empSal:this.state.empSal+5000});
        this.setState((prevState)=>({empName:"dhanush V R",empSal:prevState.empSal+50000}));
    }
    render(){
        return (
            <div>
                <h1>This is MyStateComp </h1>
                <p>Employee Name:<strong>{this.state.empName}</strong> and salary:<strong>{this.state.empSal}</strong></p>

                <button type="button" className='btn btn-danger' onClick={()=>this.changeStateData()}>Change state data</button>
            </div>
        )
    }

}
export default MyStateComp;