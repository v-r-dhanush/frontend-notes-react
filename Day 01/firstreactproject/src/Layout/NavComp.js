import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavComp = () =>{
    const nav=useNavigate();
    const logout=()=>{
        if(window.confirm("Are you want to logout")){
            sessionStorage.clear();
            nav("/");
        }
    
    }
    return(
        <div>
            {/* <h2>This is Nav Componen</h2> */}
            <Link to="mystate" className='btn btn-info'>Mystate</Link>{" "}
            <Link to="virtualdom" className='btn btn-success'>VirtualDOM</Link>{" "}
            <Link to="images/:id" className='btn btn-primary'>Images</Link>{" "}
            <Link to="hooks" className='btn btn-danger'>Hooks</Link>{" "}
            <Link to="myfavcolor" className='btn btn-dark'>MyFavColor</Link>{" "}
            <Link to="formvalidation" className='btn btn-secondary'>Form Validation</Link>{" "}
            <Link to="productdash" className='btn btn-info'>Product Dash</Link>{" "}
            <Link to="carouselcomp" className='btn btn-success'>carouselcomp</Link>{" "}
            <Link to="datalistcomp" className='btn btn-dark'>datalist</Link>{" "}

            

            <button type='button' onClick={()=>logout()} className='btn btn-danger' style={{float:'right'}}>Logout</button>

        </div>
    )
}
export default NavComp;