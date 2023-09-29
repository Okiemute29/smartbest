import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import './assets/css/vendors.css'
import _route from "./constants/routes"

import LogIn from './pages/login';
import SignUp from './pages/signup';
import ForgotPassword from './pages/forgotpassword';
import Dashboard from './pages/dashboard';
import PrivateRoute from './routeguard/privateroute'
import PosManager from './pages/posmanager';

function App() {
  return (
    
    <div id='App'>
      <BrowserRouter>
        <Routes>
          <Route path={_route._signin} element={<LogIn />} />
          <Route path={_route._signup} element={<SignUp />} />
          <Route path={_route._forgotpassword} element={<ForgotPassword />} />
          <Route element={<PrivateRoute />} >
            <Route path={_route._dashboard} element={<Dashboard />} />
            <Route path={_route._pos_manager} element={<PosManager />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
