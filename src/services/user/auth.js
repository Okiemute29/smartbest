import myApi from "../common/interceptors/apiinterceptor";
import CryptoJS from 'crypto-js'
import {  _signUpUser, _logInUser, _forgotPassword } from "../../network/network"
const HashPasswordKey = process.env.REACT_APP_BASE_HASH_KEY

const Authservices = {
  logIn: async (data, source) => {
    return await myApi.post(_logInUser, { email: data.email, password: data.password }, {
      // cancelToken: source.token,
    }).then(async (res) => {
      console.log(res)
      return res;
    });

  },
  getUser: () => {
    const encrptToken = JSON.parse(localStorage.getItem("authorization"));
    var bytes  = CryptoJS.AES.decrypt(encrptToken, HashPasswordKey);
    var token = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    
    return token
  },

  signUp: async (data, source) => {
    return await myApi.post(_signUpUser, data, {
      // cancelToken: source.token,
      // withCredentials: true
    }).then((res) => {
      console.log(res)
      return res;
    });
  },

  logOut() {
    localStorage.clear()
  },

  forgotPassword: async (email, source) => {
    return await myApi.post(_forgotPassword, { username: email }, {
      // cancelToken: source.token
    })

  },


}

export default Authservices