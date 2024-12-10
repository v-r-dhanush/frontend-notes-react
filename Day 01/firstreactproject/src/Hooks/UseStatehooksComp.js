import React ,{useState} from 'react'

const UseStatehooksComp = () => {
    const[count,setCount]=useState(0);
    const[name,setname]=useState("Dhanush");

    const incrementCount=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <h2>This is use state hook components</h2>
            <p>Counter value : <strong >{count}</strong></p>

            <button type='button' onClick={()=>incrementCount()} className='btn btn-warning'>Change count</button>{" "}

            <button type='button' onClick={()=>setCount(count+2)} className='btn btn-danger'>Change count</button>{" "}
            <hr></hr>
            <p>name :{name}</p>
            <button type='button' onClick={()=>setname("Dhanush V R")} className='btn btn-primary'>Change Name</button>
        </div>
    )
}

export default UseStatehooksComp;
