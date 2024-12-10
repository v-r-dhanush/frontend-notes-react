import { Component } from "react";
import MyHocComp from "./MyHocComp";

class ClickCounterComp extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         count:0
    //     }
    // }
    // increment=()=>{
    //     this.setState({count:this.state.count+1})
    // }

    render(){
        return(
            <div>
                {/* <h2>Count:{this.state.count}</h2>
                <button type="button" onClick={()=>this.incrementCounter()}>count++</button> */}
                <h2>Count:{this.props.count}</h2>
                <button type="button" onClick={this.props.incrementCounter} className='btn btn-primary'>count++</button>
            </div>
        )
    }
}
// export default ClickCounterComp;
export default MyHocComp(ClickCounterComp,3);