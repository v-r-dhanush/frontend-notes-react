const UserComp = (props) =>{

    if(props.user==="Arun"){
        throw Error("Not A User");
    }
    return(
         <div>
         {/* <h2>This User Component</h2> */}
         {/* <p>My name is : {props.ename} and I am a {props.role}</p> */}
            <h2>User is : {props.user}</h2>
         </div>
        
    )
}
export default UserComp;