import React, { useRef } from "react";
import './LoginComp.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {GET,POST,DELETE,PUT} from '../service/HTTP.Service';

    const LoginComp =() =>{
        const nav = useNavigate();
        const uidRef = useRef();
        const upassRef = useRef();
    
    const checkUser=()=>{
        let uid = uidRef.current.value;
        let upass = upassRef.current.value;
        let empObj = {
            userid:uid,
            userpass:upass
        }


        axios.get("http://localhost:8888/users").then((res)=>{
           // console.log(res.data);
           let currentUser = res.data.filter((val,index)=>{return val.userid===uid && val.userpass===upass})
           if(currentUser.length>0){
            window.alert("login Success");
            sessionStorage.setItem("user",uid);
            nav("/maindashboard");
           }
           else{
            window.alert("wrong credentials");
            uidRef.current.value="";
            upassRef.current.value="";
           }
        }).catch((error)=>{})

            //code for JWT token

            // POST("http://localhost:8000/Users",empobj).then((response)=>{
        //     if(response.access){
        //         handleSnackbarOpen("Login Successful","success");
        //         sessionStorage.setItem("accessToken",response?.across);
        //         nav()
        //     }
        // }).catch((error)=>{})

            
    }
    
    return(
            <div classname='logincontainer'>
                {/* <h2>This is login components</h2> */}
                <form className='loginForm'>
                <label>Enter the User ID:</label>
                    <input type='text' name='uid' ref={uidRef} className='form-control mb-2 mt-2'/>
                    <label>Enter Password:</label>
                    <input type='text' name='upass' ref={upassRef} className='form-control mb-2 mt-2'/>
                    <button type='button' onClick={()=>checkUser()} className='btn btn-primary'>Login</button>
                </form>
            </div>
    )
}
export default LoginComp;