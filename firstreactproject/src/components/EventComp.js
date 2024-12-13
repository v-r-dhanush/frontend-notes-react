import React,{Component,Fragment} from 'react';

class EventComp extends Component{
    greeting=() =>{
        window.alert("hello everyone");
    };

    welcome=(...std)=>{
        window.alert(`welcome you ${std}`);
    };

    render(){
        return(
            <Fragment>
            <h2>This is event components</h2>
            <button type="button" onClick={()=>this.greeting()}>call greeting</button>
            <button type="button" onClick={()=>this.welcome("Dhanush","Ravi")}>call welcome</button>
            {/* <h2 onMouseOver={()=>this.welcome("sai","javeed","dharun")}>Hover on me to call welcome</h2> */}
            </Fragment>
        )
    };
}

export default EventComp;
