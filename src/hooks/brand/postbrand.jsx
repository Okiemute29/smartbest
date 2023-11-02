import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Warning, Error, Success } from "../../component/toastify/toastify";
import Brandservices from "../../services/brand/brand";
import { useSelector } from "react-redux";

const usePostBrand = () => {
  const [loading, setloading] = useState(false);
  const admin = useSelector((state) => state.auth.user)
  const [data, setData] = useState(null);
  const CancelToken = axios.CancelToken;
  const source = useRef();

  const postBrand = async (data) => {
    if (source.current === undefined) {
      source.current = CancelToken.source();
    }
    try {
      setloading(true);

      const res = await Brandservices.postBrand(source.current, {adminid: admin.id, brand: data.brand});
      if (!res) {
        throw new Error("Error Posting Brand");
      } else {
        Success(res.data.message)
        console.log(res);
        setloading(false);
        return true;
      }
    } catch (error) {
      console.log(error)
      setloading(false);
      if (axios.isCancel(error)) {
        Warning('An Error Occured')
      }
      else if(error.response){
          Error(error.response.data.message)
      } else {
          Warning('An Error Occured')
      }
    }
  };

  useEffect(() => {
    
    return () => {
      if (source.current != null) source.current.cancel();
    };
  }, []);

  return { postBrand, loading, data };
};

export default usePostBrand;
