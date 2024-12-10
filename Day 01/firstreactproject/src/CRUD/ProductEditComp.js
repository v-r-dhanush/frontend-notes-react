import { useState,useEffect } from 'react';
import React  from 'react'
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

const ProductEditComp=() => {
    const {id}=useParams();
    const nav =useNavigate();

    const [product,setProduct] = useState({
        id:"",
        pname:"",
        pprice:"",
        pcompany:"",
        pquantity:""
    });

    useEffect(()=>{
        axios.get(`http://localhost:8888/products/${id}`,product).then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{})
    },[]);

    const inputChangeHandler = (event)=>{
        const{type,name,value}=event.target;
        setProduct({...product,[name]:value});
    }

    const addProduct = (event)=>{
        event.preventDefault();
        //console.log(product);
        axios.put(`http://localhost:8888/products/${id}`,product).then(()=>{
            window.alert("Product Added Successfully");
            nav('/maindashboard/productdash');
        }).catch((error)=>{})
    }

    return (
        <div>
            <h2>This is Product Edit</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addProduct}>
                        <label className='form-label'>Enter the Name:</label>
                        <input type='text' name="pname" onChange={inputChangeHandler} value={product.pname} className='form-control' required
                        />
                        <label className='form-label'>Enter the Price:</label>
                        <input type='text' name="pprice" onChange={inputChangeHandler} value={product.pprice} className='form-control'/>
                        <label className='form-label'>Enter the Company:</label>
                        <input type='text' name="pcompany" onChange={inputChangeHandler} value={product.pcompany} className='form-control'/>
                        <label className='form-label'>Enter the Quantity:</label>
                        <input type='text' name="pquantity" onChange={inputChangeHandler} value={product.pquantity} className='form-control'/>
                        <button type='submit' className='btn btn-primary mt-2'>Add Data</button>
                    </form>
                </div>
                <div classname='col-sm-3'></div>
            </div>
        </div>
    )
}

export default ProductEditComp
