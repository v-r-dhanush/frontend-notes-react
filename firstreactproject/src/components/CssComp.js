import React from 'react'
import './external.css';
import mymodule from './mycss.module.css';
const CssComp=()=>{
    let circle={
        width:true?"100px":"200px",
        height : "100px",
        borderRadius :"50%",
        border : "2px solid red"
    }
    return(
        <div>
            {/* 1.use of internal css */}
            <p style={circle}>Hello</p>
            <p ClassName="txtprimary">Dhanush</p>
            <p ClassName={mymodule.special}>Ravi</p>
        </div>
    );
}
export default CssComp;
