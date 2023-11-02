import myApi from "../common/interceptors/apiinterceptor";
import {  _getAllProduct } from "../../network/network"

const Productservices = {
  getAllProduct: async (source, adminid) => {
    return await myApi.post(_getAllProduct, { adminid: adminid }, {
      // cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },


}

export default Productservices