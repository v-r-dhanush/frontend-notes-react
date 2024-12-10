import { Link, Outlet } from "react-router-dom";

const ReacthooksComp=()=>{
    return(
        <div>
            <h1>React Hooks Component</h1>
            <div className="card">
                <div className="card-header">
                    <Link to="usestate" className='btn btn-warning'>UseState</Link>{" "}
                    <Link to="useeffect" className='btn btn-primary'>Useeffect</Link>{" "}
                </div>
                <div className="card-body">
                    <Outlet></Outlet>
                </div>

            </div>
            
        </div>
    )
}
export default ReacthooksComp;