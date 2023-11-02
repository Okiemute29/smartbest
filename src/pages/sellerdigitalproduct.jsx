
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';
import Header from '../component/hearder/header';
import SideBar from '../component/sidebar/sidebar';

const SellerDigitalProduct = () => {
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
          <Header setMenu={setMenu} />
          {/* .aiz-topbar */}
          <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
              <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h1 className="h3">Seller Products</h1>
                  </div>
                </div>
              </div>
              <div className="card">
                <form className id="sort_products" action method="GET">
                  <div className="card-header row gutters-5">
                    <div className="col text-center text-md-left">
                      <h5 className="mb-md-0 h6">Seller Products</h5>
                    </div>
                    <div className="col-md-2 ml-auto">
                      <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0">
                        <select
                          className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0"
                          name="type"
                          id="type"
                          onchange="sort_products()"
                          tabIndex={-98}
                        >
                          <option value>Sort by</option>
                          <option value="rating,desc">
                            Rating (High &gt; Low)
                          </option>
                          <option value="rating,asc">
                            Rating (Low &gt; High)
                          </option>
                          <option value="num_of_sale,desc">
                            Num of Sale (High &gt; Low)
                          </option>
                          <option value="num_of_sale,asc">
                            Num of Sale (Low &gt; High)
                          </option>
                          <option value="lowest_price,desc">
                            Base Price (High &gt; Low)
                          </option>
                          <option value="highest_price,asc">
                            Base Price (Low &gt; High)
                          </option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-1"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-id="type"
                          title="Sort by"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Sort by
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div className="dropdown-menu ">
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-1"
                            tabIndex={-1}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 ml-auto">
                      <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0">
                        <select
                          id="demo-ease"
                          className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0"
                          name="shop_id"
                          onchange="sort_products()"
                          data-selected
                          tabIndex={-98}
                        >
                          <option value>Choose Shop</option>
                          <option value={7}>Beauty Shop</option>
                          <option value={8}>Sleek Style</option>
                          <option value={9}>
                            Hitech Gadget &amp; Phone Shop
                          </option>
                          <option value={10}>Sweet Kids</option>
                          <option value={11}>Consistent Dresses</option>
                          <option value={12}>Tech Scope</option>
                          <option value={13}>Beyond Threads</option>
                          <option value={14}>Violetâs Dresser</option>
                          <option value={15}>Bloom Boutique</option>
                          <option value={16}>Morning Glory</option>
                          <option value={17}>Apple Store</option>
                          <option value={18}>Goodwill Outlet</option>
                          <option value={19}>Captiva Girl</option>
                          <option value={20}>The Tech Cube</option>
                          <option value={21}>Lauraâ€™s Closet</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-2"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-id="demo-ease"
                          title="Choose Shop"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Choose Shop
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div className="dropdown-menu ">
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-2"
                            tabIndex={-1}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="search"
                          name="search"
                          placeholder="Type & Enter"
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

export default SellerDigitalProduct
