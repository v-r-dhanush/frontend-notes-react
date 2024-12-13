import {Link} from "react-router-dom";

const NavComp=()=>{

    return(
        <div>
            <Link to="home" className='btn btn-primary'>Home</Link>{" "}
            <Link to="about" className='btn btn-warning'>About</Link>{" "}
            <Link to="product" className='btn btn-info'>Product</Link>{" "}
            <Link to="contact" className='btn btn-secondary'>Contact</Link>
        </div>
    )
}
export default NavComp;