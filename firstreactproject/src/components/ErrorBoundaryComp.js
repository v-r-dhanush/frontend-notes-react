import React,{Component} from "react";
class ErrorBoundaryComp extends Component{
    constructor(){
        super();
        this.state={
            isCond:false
        }
    }

    static getDerivedStateFromError(){
        return{
            isCond:true
        }
    }

    componentDidCatch(error){
        console.log(error);
    }

    render(){
        if(this.state.isCond){
            return <div>Not a User</div>
        }
        return this.props.children;
    }
}
export default ErrorBoundaryComp;