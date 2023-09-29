import { useState } from "react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import _route from "../constants/routes";

export default function MobileRoute() {
     const [mobile, setMobile] = useState(true)
     function myFunction() {
     setMobile(window.innerWidth < 768)
     console.log('rr')
     }
    
     useEffect(()=>{
          myFunction()
     }, [])
     window.addEventListener("resize", myFunction);

    console.log(mobile)
     return mobile  ? <Outlet /> : <Navigate to={_route._setting_profile} />;
}
