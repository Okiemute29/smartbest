import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import _route from "../constants/routes";

export default function BusinessCheckRoute() {
     const business = useSelector((state) => state.business.business)
     return business ? <Outlet /> : <Navigate to={_route._welcome} />;
     
}
