import React, { Component } from 'react'

class MyFavColorComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:"Red"
        }
    }
    // static getDerivedStateFromProps(props){
    //     return{
    //         color:props.newColor
    //     }
    // }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"Pink"});
    //     },2000)
    // }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML = `Before Update My Favourite color was :${prevState.color}`;
    }
    changecolor=()=>{
        this.setState({color:"Blue"});
    }
    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML=`After Update My Favorite color is :${this.state.color}`;
    }
    
    render() {
        return (
            <div>
                <h2>This is my Fav Color</h2>
                <p>Color is : <strong>{this.state.color}</strong></p>
                <div id='beforeupdate'></div>
                <div id='afterupdate'></div>
                <button type="button" onClick={()=>this.changecolor()} className='btn btn-secondary'>Change</button>
            </div>
        )
    }
}

export default MyFavColorComp
