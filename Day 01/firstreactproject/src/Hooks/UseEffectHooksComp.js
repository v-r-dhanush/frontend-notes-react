import React ,{useEffect,useState} from 'react'

const UseEffectHooksComp = () => {
    const[age,setAge] = useState(18);
    const [sal,setSal] = useState(10000);
    //case1:no dependency value pass
    //useEffect(()=>{
    //     setAge(age+1);
    // })

    //case2 : when we pass dependencies value as black array
    // useEffect(()=>{
    //     setAge(age+1);
    // },[])

    //case3 : when we have to execute useEffect hook as we want
    useEffect(()=>{
        setAge(age+1);
    },[sal])
    return (
        <div>
            <h2>This is UseEffect hook components</h2>
            <p>Age is :{age}</p>
            <p>salary :{sal}</p>
            <button type="button" className='btn btn-primary' onClick={()=>setSal(sal+1000)}>Increment</button>
        </div>
    )
}

export default UseEffectHooksComp
