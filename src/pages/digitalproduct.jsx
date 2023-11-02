
import { useEffect, useState } from 'react';
import SideBar from '../component/sidebar/sidebar';
import Header from '../component/hearder/header';
import Footer from '../component/footer/footer';

const DigitalProduct = () => {
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
          <Header setMenu={setMenu}  />
          {/* .aiz-topbar */}
          <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
              <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="text-md-right">
                  <a
                    href="https://shop.activeitzone.com/admin/digitalproducts/create"
                    className="btn btn-circle btn-info"
                  >
                    <span>Add New Digital Product</span>
                  </a>
                </div>
              </div>
              <div className="card">
                <form className id="sort_digital_products" action method="GET">
                  <div className="card-header row gutters-5">
                    <div className="col text-center text-md-left">
                      <h5 className="mb-md-0 h6">Digital Products</h5>
                    </div>
                    <div className="dropdown mb-2 mb-md-0">
                      <button
                        className="btn border dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                      >
                        Bulk Action
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item confirm-alert"
                          href="javascript:void(0)"
                          data-target="#bulk-delete-modal"
                        >
                          {" "}
                          Delete selection
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group input-group-sm">
                        <input
                          type="text"
                          className="form-control"
                          id="search"
                          name="search"
                          placeholder="Type name & Enter"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="aiz-pagination"></div>
                  </div>
                </form>
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

export default DigitalProduct
