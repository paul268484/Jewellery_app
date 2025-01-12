import { createBrowserRouter } from "react-router-dom";
import HomeComp from "../Components/HomeComp";
import { AboutComp } from "../Components/AboutComp";
import{ LoginComp } from "../Components/LoginComp";
import { HeaderComp} from "../Components/HeaderComp";
import {FooterComp } from "../Components/FooterComp";


const router = createBrowserRouter([
    // {path:"" , element:<LoginComp/>},
        {path:"homecomp" , element:<HomeComp></HomeComp>},
        {path:"aboutcomp" , element:<AboutComp></AboutComp>},
    
    {path:"" , element:<HeaderComp/>},
    {path:"footercomp" , element:<FooterComp/>},


])
export default router