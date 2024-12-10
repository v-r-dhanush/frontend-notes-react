import { Component } from "react";

class VirtualDOM extends Component{
    constructor(props){
        super(props)
        this.state={
            breakFast:[
                {id:101,name:"Idly",price:"10rs"},
                {id:101,name:"Dosa",price:"20rs"},
                {id:101,name:"Poori",price:"15rs"},
                {id:101,name:"Pongal",price:"30rs"},
                {id:101,name:"Vada",price:"10rs"},
            ],
            courses:["Java","Python","Dot Net","Html","Css","Javascript","React","Angular"]
        }
    }

    render(){
        const{breakFast,courses}=this.state;
        return(
            <div>
                <h2>This is Virtual DOM Component</h2>
                <ul>
                    {
                        breakFast.length > 0 && breakFast.map((val,index)=>{
                            return <li key={val.id}> {val.name} : &#8377;{val.price}</li>
                        })
                    }
                </ul>
                <hr/>
                    <label>Select Course:</label>
                    <select>
                        {
                            courses.length > 0 && courses.map((val,index)=>{
                                return <option value={val} key={index}>{val}</option>
                            })
                        }
                    </select>
            </div>
        )
            
    }
}
export default VirtualDOM;