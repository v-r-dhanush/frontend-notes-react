import React from "react";
import thor from '../assests/thor.jpeg';
import black from '../assests/black.jpeg';
import commanData from "../constant/constantData";
const MyImagesComp=() =>{
    return(
        <div>
            <h2>This is MyImages Components</h2>
            <img src={thor} alt='thor' height="200px" width="200px" />
            <img src={black} alt='black' height="200px" width="200px" />
            <img src={commanData.Muruga} alt='muruga' height="200px" width="200px" />
            <img src={commanData.iron} alt='iron' height="200px" width="200px" />
            <video src={commanData.vd} controls></video>
        </div>
    )
}
export default MyImagesComp;





