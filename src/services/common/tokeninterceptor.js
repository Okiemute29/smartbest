import CryptoJS from 'crypto-js';

const HashPasswordKey = process.env.REACT_APP_BASE_HASH_KEY;

function interCeptTokenFromResponse(res) {
  if (res.token) {
    const { token } = res;
    // Encrypt tokens before storing robert 
    var encrptToken = CryptoJS.AES.encrypt(JSON.stringify(token), HashPasswordKey).toString();

    // Set tokens to local storage
    localStorage.setItem('authorization', JSON.stringify(encrptToken));
  }
}

export default interCeptTokenFromResponse;
