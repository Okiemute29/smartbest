import axios from "axios";
import interCeptTokenFromResponse from "../tokeninterceptor";
import addTokentoRequest from "../tokeninjector";

const myApi = axios.create();

myApi.interceptors.response.use(
    response => {
      console.log(response.data.data)
        interCeptTokenFromResponse(response.data.data);
        return response;
    },
    error => {
      console.log(error)
        return Promise.reject(error);
    } 
);


myApi.interceptors.request.use(
    config => {
      const tokenConfig = addTokentoRequest();
      return {
        ...config,
        ...tokenConfig
      };
    },
    error => {
      console.log(error)
      return Promise.reject(error);
    }
  );
  


export default myApi;