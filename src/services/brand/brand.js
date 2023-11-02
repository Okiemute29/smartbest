import myApi from "../common/interceptors/apiinterceptor";
import {  _getAllBrand, _postBrand } from "../../network/network"

const Brandservices = {
  getAllBrand: async (source, adminid) => {
    return await myApi.post(_getAllBrand, { adminid: adminid }, {
      // cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },
  postBrand: async (source, postData) => {
    return await myApi.post(_postBrand, postData, {
      // cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },


}

export default Brandservices