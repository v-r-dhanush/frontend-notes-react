import { createBrowserRouter } from "react-router-dom";
import MainDashboardComp from "../layout/MainDashboardComp";

const routing = createBrowserRouter([
    {path:"",element:<MainDashboardComp/>}
])
export default routing;