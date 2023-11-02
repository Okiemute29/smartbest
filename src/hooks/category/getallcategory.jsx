import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Warning, Error } from "../../component/toastify/toastify";
import Categoryservices from "../../services/category/category";
import { useSelector } from "react-redux";

const useGetAllCategory = () => {
  const [loading, setloading] = useState(false);
  const admin = useSelector((state) => state.auth.user)
  const [data, setData] = useState(null);
  const CancelToken = axios.CancelToken;
  const source = useRef();

  const getAllCategory = async () => {
    console.log(admin)
    if (source.current === undefined) {
      source.current = CancelToken.source();
    }
    try {
      setloading(true);
      const res = await Categoryservices.getAllCategory(source.current, admin.id);
      if (!res) {
        throw new Error("Error fetching Offering");
      } else {
        setData(res.data.data);
        setloading(false);
        return true;
      }
    } catch (error) {
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

  return { getAllCategory, loading, data };
};

export default useGetAllCategory;
