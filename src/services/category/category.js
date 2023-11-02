import myApi from "../common/interceptors/apiinterceptor";
import {  _getAllCategory } from "../../network/network"

const Categoryservices = {
  getAllCategory: async (source, adminid) => {
    return await myApi.post(_getAllCategory, { adminid: adminid }, {
      // cancelToken: source.token,
    }).then(async (res) => {
      return res;
    });

  },


}

export default Categoryservices