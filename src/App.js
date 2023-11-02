import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

import './App.css';
// import './assets/css/vendors.css'
import _route from "./constants/routes"

import LogIn from './pages/login';
import SignUp from './pages/signup';
import ForgotPassword from './pages/forgotpassword';
import Dashboard from './pages/dashboard';
import PrivateRoute from './routeguard/privateroute'
import PosManager from './pages/posmanager';
import PosConfiguration from './pages/posconfiguration';
import InHouseProduct from './pages/inhouseproduct';
import DigitalProduct from './pages/digitalproduct';
import PhysicalProduct from './pages/physicalproduct';
import SellerDigitalProduct from './pages/sellerdigitalproduct';
import Category from './pages/category';
import Brands from './pages/brands';
import Attributes from './pages/attributes';
import Reviews from './pages/reviews';
import BulkImport from './pages/bulkimport';
import InHouseOrder from './pages/inhouseorder';
import SellersOrder from './pages/sellersorder';
import Customers from './pages/customers';
import Seller from './pages/seller';
import UpDateBrands from './pages/updatebrand';

function App() {
  return (
    
    <div id='App'>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path={_route._signin} element={<LogIn />} />
          <Route path={_route._signup} element={<SignUp />} />
          <Route path={_route._forgotpassword} element={<ForgotPassword />} />
          <Route element={<PrivateRoute />} >
            <Route path={_route._dashboard} element={<Dashboard />} />
            <Route path={_route._pos_manager} element={<PosManager />} />
            <Route path={_route._pos_activation} element={<PosConfiguration />} />
            <Route path={_route._inhouse_product} element={<InHouseProduct />} />
            <Route path={_route._digital_product} element={<DigitalProduct />} />
            <Route path={_route._physical_product} element={<PhysicalProduct />} />
            <Route path={_route._seller_digital_product} element={<SellerDigitalProduct />} />
            <Route path={_route._category} element={<Category />} />
            <Route path={_route._brand} element={<Brands />} />
            <Route path={_route._updateBrand} element={<UpDateBrands />} />
            <Route path={_route._attribute} element={<Attributes />} />
            <Route path={_route._reviews} element={<Reviews />} />
            <Route path={_route._bulk_import} element={<BulkImport />} />
            <Route path={_route._order} element={<InHouseOrder />} />
            <Route path={_route._seller_order} element={<SellersOrder />} />
            <Route path={_route._customer} element={<Customers />} />
            <Route path={_route._seller} element={<Seller />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
