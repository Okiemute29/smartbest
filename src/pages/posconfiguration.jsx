import React from 'react'
import Header from '../component/hearder/header'
import SideBar from '../component/sidebar/sidebar';
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';

const PosConfiguration = () => {
    const [menu, setMenu] = useState(false)
  
    useEffect(()=>{
      menu ? 
      document.body.className = 'side-menu-closed'
      :
      document.body.className = 'side-menu-open';
    }, [menu])
  return (
    <>
      <div className="aiz-main-wrapper">
        {!menu && <SideBar setMenu={setMenu} />}
        {/* .aiz-sidebar */}
        <div className="aiz-content-wrapper">
          {/* Header */}
          <Header setMenu={setMenu} />
          {/* .aiz-topbar */}
          <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
              <h4 className="text-center text-muted">
                POS Activation for Seller
              </h4>
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0 h6">POS Activation for Seller</h5>
                    </div>
                    <div className="card-body text-center">
                      <label className="aiz-switch aiz-switch-success mb-0">
                        <input
                          type="checkbox"
                          onchange="updateSettings(this, 'pos_activation_for_seller')"
                        />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          {/* .aiz-main-content */}
        </div>
        {/* .aiz-content-wrapper */}
      </div>
    </>
  );
}

export default PosConfiguration
