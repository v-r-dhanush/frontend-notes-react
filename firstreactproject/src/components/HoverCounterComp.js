import { Component } from "react";
import MyHocComp from "./MyHocComp";

class HoverCounterComp extends Component{
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
                <button type="button" onMouseOver={()=>this.incrementCounter()}>count</button> */}
                <h2>Count:{this.props.count}</h2>
                <button type="button" onMouseOver={this.props.incrementCounter} className='btn btn-primary'>count</button>

            </div>
        )
    }
}
// export default HoverCounterComp;
export default MyHocComp(HoverCounterComp,5);