import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchData } from './api folder/apiSlice';
const DataListComp = () => {

    const dispatch = useDispatch();
    const data = useSelector((state)=>state.api.data);
    const status = useSelector((state)=>state.api.status);
    const error = useSelector((state)=>state.api.error);

    useEffect(()=>{
        dispatch(fetchData());
    },[])


    let content;

    if(status==="loading"){
        content = <div><span className='spinner-border'></span>loading....</div>
    }else if(status==="success"){
        content = <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Sr.no</th><th>Name</th><th>Price</th><th>Company</th><th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.length > 0 && data.map((val,index)=>{
                        return <tr key={val.id}>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.pprice}</td>
                            <td>{val.pcompany}</td>
                            <td>{val.pquantity}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    }else if(status==="failed"){
        content="something went wrong";
    }
    return (
        <div>
            <h2>This is Data list component</h2>
            {content}
        </div>
    )
}

export default DataListComp
