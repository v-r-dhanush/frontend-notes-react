import { createBrowserRouter } from "react-router-dom";
import VirtualDOM from "../components/VirtualDOM";
import MyImagesComp from "../components/MyImagesComp";
import EventComp from "../components/EventComp";
import CssComp from "../components/CssComp";
import MyStateComp from "../components/MyStateComp";
import PageNotFoundComp from "../Layout/PageNotFoundComp";
import ReacthooksComp from "../Hooks/ReactHooksComp";
import UserStateHooksComp from "../Hooks/UseStatehooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import MainDashboardComp from "../Layout/MainDashboardComp";
import LoginComp from "../Layout/LoginComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValidationComp from "../components/FormValidationComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";
import ProtectedRouting from "./ProtectedRouting";
import CarouselComp from "../components/CarouselComp";
import DataListComp from "../reduxCode/DataListComp";

const routing = createBrowserRouter([

    {path:"",element:<LoginComp/>},
    {path:"login",element:<LoginComp/>},

    //{path:"maindashboard",element:<MainDashboardComp/>,children:[
    {path:"maindashboard",element:<ProtectedRouting Component={MainDashboardComp}/>,children:[
            //1.naming routing
        {path:"virtualdom",element:<VirtualDOM/>},
        {path:"myfavcolor",element:<MyFavColorComp newColor="Green"/>},
        {path:"formvalidation",element:<FormValidationComp/>},
        {path:"productdash",element:<ProductDashComp/>},
        {path:"productadd",element:<ProductAddComp/>},
        {path:"productedit/:id",element:<ProductEditComp/>},
        {path:"carouselcomp",element:<CarouselComp/>},
        {path:"datalistcomp",element:<DataListComp/>},
        
        //2.default routing
        // {path:"",element:<MyStateComp/>},
        {path:"mystate",element:<MyStateComp/>},
        //3.parameter routing
        {path:"images/:id",element:<MyImagesComp/>},
        {path:"event",element:<EventComp/>},
        {path:"mycss",element:<CssComp/>},
        //4.Child routing
        {path:"hooks",element:<ReacthooksComp/>,children:[
            {path:"usestate",element:<UserStateHooksComp/>},
            {path:"useeffect",element:<UseEffectHooksComp/>},
        ]},
    ]},
    //5.wild-card routing
    {path:"*",element:<PageNotFoundComp/>}
]);

export default routing;