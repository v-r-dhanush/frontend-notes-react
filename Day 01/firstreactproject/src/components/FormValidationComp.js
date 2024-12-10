import React , {useState} from 'react'

const FormValidationComp = () => {
    let mycourses= ["React","Angular","Java","Html","Css","Python"];
    const [user,setUser] = useState({
        fname:"",
        term:false,
        course:"",
        password:"",
        email:"",
        contact:""
    });
    const changeInput = (event)=>{
        // console.log{event.target.type};
        // console.log{event.target.name};
        // console.log{event.target.value};
        const{type,name,value,checked} = event.target;
        setUser({...user,[name]:type==="checkbox"?checked:value});
    }
    const checkData = (event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("fname is required");
            return false;
        }
        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("fullname must contain only character min-3 and max-20");
            return false;
        }
        if(user.email.trim()===""){
            window.alert("Email is required");
            return false;
        }
        if(!user.email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            window.alert("enter valid email");
            return false;
        }
        if(user.password.trim()===""){
            window.alert("enter the password");
            return false;
        }
        if(!user.password.trim().match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@ ]).*$/)){
            window.alert("enter valid password");
            return false;
        }
        if(user.contact.trim()===""){
            window.alert("enter the contact");
            return false;
        }
        if(!user.contact.trim().match(/^[7-9][0-9]{9}$/)){
            window.alert("enter the valid contact");
            return false;
        }
        if(user.course===""){
            window.alert("Course field is required");
            return false;
        }
        if(user.term===false){
            window.alert("Please accept terms and conditions");
            return false;
        }
        window.alert(JSON.stringify(user));
    }
    return (
        <div>
            <h2>Welcome to Form Validation</h2>
            <form onSubmit={checkData}>
                <div>
                    <label>Enter your Firstname: </label>
                    <input type='text' name='fname' onChange={changeInput} value={user.fname}/>
                </div>
                <div>
                    <label>Select the courses:</label>
                    <select name='course' onChange={changeInput}>
                    <option value="">Select course</option>
                    {
                        mycourses.map((val,index)=>{
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                    </select>
                </div>
                <div>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={changeInput}
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="password">Enter your password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={changeInput}
            value={user.password}
          />
        </div>
        <div>
          <label htmlFor="contact">Enter your contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            onChange={changeInput}
            value={user.contact}
          />
          <div>
                <input type='checkbox' 
                name='term' 
                onChange={changeInput} 
                value={user.term} />
                Accept the terms and Conditions
            </div>
        </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormValidationComp;
