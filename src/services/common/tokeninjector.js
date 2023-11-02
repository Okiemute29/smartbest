import CryptoJS from 'crypto-js';

const HashPasswordKey = process.env.REACT_APP_BASE_HASH_KEY;

function addTokentoRequest() {
  let token = ''
  if(localStorage.getItem("authorization") !== null){

  // Get tokens from local storage
  const encryptedToken = localStorage.getItem("authorization").replaceAll('"', '');
 
  // Decrypt tokens before sending 
    var tokenBytes  = CryptoJS.AES.decrypt(encryptedToken, HashPasswordKey);
    token = JSON.parse(tokenBytes.toString(CryptoJS.enc.Utf8));

    
  }
  
  // Add tokens to request headers
  if (token) {
    return {
      headers: {
        "Authorization":`Bearer ${token}`,
      }
    };
  }

  return {};
}



export default addTokentoRequest;
