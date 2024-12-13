import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import Button from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';


function ProductDashComp() {
    const[product,setProduct] = useState([]);
    const[show,setShow] = useState(false);
    const handleClose=() => setShow(false);

    const handleShow=(val) =>{
        setShow(true)
        setShow(val);
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = ()=>{
        axios.get("http://localhost:8888/products").then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{});
    }
    // delete request logic

     const deleteProduct = (id)=>{
     //   console.log(id);
        if(window.confirm(`are you sure to delete product with id :${id}`)){
            axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
            window.alert("Product deleted successfully");
            fetchData();
            }).catch((error)=>{})
        }
     }

    return (
        <div>
            <h2>This is Product Dash</h2>
            {/* <button type='button' className='btn btn-primary btn-sm mt-2 mb-3'>Add</button> */}
            <Link to ="/maindashboard/productadd" className='btn btn-success'>Add</Link>
            <div className="container">
                <table className="table table-hover table-bordered table-striped text-center">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Company</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.length > 0 && product.map((val,index)=>{
                                return <tr key={val.id}>
                                    <td>{index+1}</td>
                                    <td>{val.pname}</td>
                                    <td>{val.pprice}</td>
                                    <td>{val.pcompany}</td>
                                    <td>{val.pquantity}</td>
                                    <td>
                                    <Button variant="primary" onClick={()=>handleShow(val)}>
                                    <VisibilityIcon></VisibilityIcon>
                                    </Button>{" "}
                                        
                                        <Link to = {`/maindashboard/productedit/${val.id}`} className='btn btn-success'>
                                        <EditIcon></EditIcon>
                                        </Link>{" "}
                                        <button type='button' className='btn btn-outline-danger' onClick={()=>deleteProduct(val.id)}>
                                            <DeleteIcon></DeleteIcon>
                                            </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{show.pname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{show.pcompany}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>               
        </div>
    )
}

export default ProductDashComp
