import { useState, useRef, useEffect } from "react";
import AuthService from "../../services/user/auth";
import { useDispatch } from 'react-redux'
import { Warning } from "../../component/toastify/toastify";
import { useNavigate } from "react-router-dom";
import _route from "../../constants/routes";
import { setEmail  } from "../../redux/authreducer"
import errorhandling from "../../helpers/errorhandling";
import useLogOutUser from "../auth/uselogout";
import axios from "axios";

const useForgotPassword = () => {
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {logOutUser} = useLogOutUser()
    const CancelToken = axios.CancelToken;
    const source = useRef();
   
    const forgotPassword = async (email) => { 
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await AuthService.forgotPassword( email, source.current );
            console.log(res)
            setloading(false)
            if(!res) {
                setloading(false);
                Warning('An error occured')
            }else{
                dispatch(setEmail(email))
                navigate(_route._forgotpasswordotp)
            }
            
            setloading(false)
        } catch (error) {
            setloading(false);
            if (axios.isCancel(error)) {
                console.log(error);
            }else if(error.response.status === 498){
                await logOutUser();
            } else {
                errorhandling(error)
            }
        }
       
    }
    
    useEffect(()=>{
        return () =>{ 
            if (source.current != null) source.current.cancel()
        }
    }, [])

    return {forgotPassword, loading};
}
 
export default useForgotPassword;