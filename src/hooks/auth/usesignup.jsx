import { useEffect, useState, useRef } from "react";
import AuthService from "../../services/user/auth";
import { useDispatch } from 'react-redux'
import { Warning } from "../../component/toastify/toastify";
import { setUser } from "../../redux/authreducer"
import axios from "axios";

const useSignUpUser = () => {
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch();
    const CancelToken = axios.CancelToken;
    const source = useRef();
   
    const signUpUser = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await AuthService.signUp(data, source.current );
            console.log(data)
            setloading(false)
            if(!res) {
                setloading(false);
                Warning('An error occured')
            }else{
                setloading(true);
                if(res.status === 200){
                    await dispatch(setUser(res.data))
                    localStorage.setItem("user", JSON.stringify(res.data));
                    
                }
            }
            
        } catch (error) {
            console.log(error)
            setloading(false);
            if (axios.isCancel(error)) {
                console.log(error);
            }
            // else if(error.response.status === 498){

            //     await logOutUser();
            // } else {
            //     // errorhandling(error)
            // }
        }
       
    }
    
    useEffect(()=>{
        return () =>{ 
            if (source.current != null) source.current.cancel()
        }
    }, [])

    return {signUpUser, loading};
}
 
export default useSignUpUser;