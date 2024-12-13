import { Component } from "react";

class CountComp extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }

    }
    increment=() =>{
        this.setState({count:this.state.count+1})
    }

    decrement=() =>{
        this.setState({count:this.state.count-1})
    }
    Reset=() =>{
        this.setState({count:this.state.count=0})
    }


    render(){
        return(
            <div>
                <h2>This is my count component</h2>
                <p>Count:<strong>{this.state.count}</strong></p>
                <button type="button" className='btn btn-primary' onClick={()=>this.increment()}>Increment</button>
                <button type="button" className='btn btn-danger' onClick={()=>this.decrement()}>Decrement</button>
                <button type="button" className='btn btn-info'  onClick={()=>this.Reset()}>Reset</button>
            </div>
        )
    }

}
export default CountComp;