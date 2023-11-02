import React from 'react'
import { Link } from 'react-router-dom';
import bd from '../../assets/images/flags/bd.png';
import en from '../../assets/images/flags/en.png';
import fr from '../../assets/images/flags/fr.png';
import inn from '../../assets/images/flags/in.png';
import sa from '../../assets/images/flags/sa.png';
import logo from "../../assets/images/logo/logo.png"

const Header = ({setMenu}) => {
  return (
    <>
      <div className="aiz-topbar border-bottom px-15px px-lg-25px d-flex align-items-stretch justify-content-between">
        <div className=" d-flex">
          <div
            className="aiz-topbar-nav-toggler d-flex align-items-center justify-content-start mr-2 mr-md-3"
            data-toggle="aiz-mobile-nav"
          >
            <button onClick={()=> setMenu(prev => !prev)} className="btn btn-icon btn-outline-secondary border-gray-300 p-0 d-flex align-items-center justify-content-center">
              <span className="aiz-mobile-toggler d-inline-block">
                <span />
              </span>
            </button>
          </div>
          <div className="aiz-topbar-logo-wrap d-xl-none d-flex align-items-center justify-content-start">
            <Link to="#" className="d-block">
              <img
                src={logo}
                className="brand-icon"
                alt="Altinsmart"
              />
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-stretch flex-grow-xl-1">
          <div className="d-none d-md-flex justify-content-around align-items-center align-items-stretch">
            <div className="aiz-topbar-item align-items-center ml-3">
              <Link
                className="btn btn-outline-secondary border-gray-300 d-flex align-items-center px-3"
                to="#"
              >
                <i className="las la-hdd opacity-60" />
                <span className="fw-500 fs-13 ml-2 mr-0 opacity-60">
                  Clear Cache
                </span>
              </Link>
            </div>
            <div className="aiz-topbar-item align-items-center ml-3">
              <Link
                className="btn btn-outline-secondary border-gray-300 d-flex align-items-center px-3"
                to="#"
                target="_blank"
              >
                <i className="las la-globe opacity-60" />
                <span className="fw-500 fs-13 ml-2 mr-0 opacity-60">
                  Browse Website
                </span>
              </Link>
            </div>
            <div className="aiz-topbar-item align-items-center dropdown ml-3 mr-0 ">
              <Link
                className="btn btn-outline-secondary border-gray-300 d-flex align-items-center px-3"
                to="#"
                data-toggle="dropdown"
              >
                <i className="las la-plus ts-08 opacity-60" />
                <span className="fw-500 fs-13 ml-2 mr-0 opacity-60">
                  Add New
                </span>
              </Link>
              <div className="dropdown-menu p-3">
                <ul className="list-group list-group-raw text-capitalize">
                  <li className="list-group-item p-2">
                    <Link
                       to="#"
                      className="text-reset fs-14 opacity-60"
                    >
                      Add New Product
                    </Link>
                  </li>
                  <li className="list-group-item p-2">
                    <Link
                       to="#"
                      className="text-reset fs-14 opacity-60"
                    >
                      Add new coupon
                    </Link>
                  </li>
                  <li className="list-group-item p-2">
                    <Link
                       to="#"
                      className="text-reset fs-14 opacity-60"
                    >
                      Add New Offer
                    </Link>
                  </li>
                  <li className="list-group-item p-2">
                    <Link
                       to="#"
                      className="text-reset fs-14 opacity-60"
                    >
                      Add New Staff
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around align-items-center align-items-stretch">
            <div className="aiz-topbar-item ml-2">
              <div className="align-items-stretch d-flex dropdown">
                <Link
                  className="dropdown-toggle no-arrow"
                  data-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <span className="btn btn-icon p-0 d-flex justify-content-center align-items-center">
                    <span className="d-flex align-items-center position-relative">
                      <i className="las la-bell fs-24" />
                    </span>
                  </span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-xl py-0">
                  <div className="notifications">
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                      <li className="nav-item">
                        <Link
                          className="nav-link text-dark active"
                          data-toggle="tab"
                          data-type="order"
                          to="#"
                          role="tab"
                          id="orders-tab"
                        >
                          Order Notifications
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link text-dark"
                          data-toggle="tab"
                          data-type="seller"
                          to="#"
                          role="tab"
                          id="sellers-tab"
                        >
                          Seller Notifications
                        </Link>
                      </li>
                    </ul>
                    <div
                      className="tab-content c-scrollbar-light overflow-auto"
                      style={{
                        height: "75vh",
                        maxHeight: 400,
                        overflowY: "auto",
                      }}
                    >
                      <div
                        className="tab-pane active"
                        id="orders-notifications"
                        role="tabpanel"
                      >
                        <li className="list-group-item">
                          <div className="py-4 text-center fs-16">
                            No notification found
                          </div>
                        </li>
                      </div>
                      <div
                        className="tab-pane"
                        id="sellers-notifications"
                        role="tabpanel"
                      >
                        <li className="list-group-item">
                          <div className="py-4 text-center fs-16">
                            No notification found
                          </div>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="text-center border-top">
                    <Link
                       to="#"
                      className="text-reset d-block py-2"
                    >
                      View All Notifications
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* language */}
            <div className="aiz-topbar-item ml-3 mr-0">
              <div
                className="align-items-center d-flex dropdown"
                id="lang-change"
              >
                <Link
                  className="dropdown-toggle no-arrow"
                  data-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <span className="btn btn flex btn-outline-secondary border-gray-300 px-3 px-md-4 items-center justify-center">
                    <img
                      src={en}
                      alt='en flag'
                      className='h-3 w-4 '
                    />
                    <span className="fw-500 fs-13 ml-2 mr-0 opacity-60  d-none d-md-inline-block">
                      English
                    </span>
                  </span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                  <li>
                    <Link
                      to="#"
                      data-flag="en"
                      className="dropdown-item  active flex items-center "
                    >
                      <img
                        src={en}
                        alt='en flag'
                        className="h-3 w-4 mr-2"
                      />
                      <span className="language">English</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                       to="#"
                      data-flag="ar"
                      className="dropdown-item flex items-center "
                    >
                      <img
                        src={sa}
                        alt='sa flag'
                        className="h-3 w-4 mr-2"
                      />
                      <span className="language">Arabic</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                       to="#"
                      data-flag="bn"
                      className="dropdown-item flex items-center"
                    >
                      <img
                        src={bd}
                        alt='bd flag'
                        className="h-3 w-4 mr-2"
                      />
                      <span className="language">Bangla</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                       to="#"
                      data-flag="hi"
                      className="dropdown-item flex items-center"
                    >
                      <img
                        src={inn}
                        alt='in flag'
                        className="h-3 w-4 mr-2"
                      />
                      <span className="language">Hindi</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                       to="#"
                      data-flag="fr"
                      className="dropdown-item flex items-center"
                    >
                      <img
                        src={fr}
                        alt='fr flag'
                        className="h-3 w-4 mr-2"
                      />
                      <span className="language">France</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="aiz-topbar-item ml-3 mr-0">
              <div className="align-items-center d-flex dropdown">
                <Link
                  className="dropdown-toggle no-arrow text-dark"
                  data-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <span className="d-flex align-items-center">
                    <span className="d-none d-md-block">
                      <span className="d-block fw-500">Admin</span>
                      <span className="d-block small opacity-60">admin</span>
                    </span>
                    <span className="avatar avatar-sm ml-md-2 mr-0">
                      <img
                      alt=''
                        src="https://shop.activeitzone.com/public/uploads/all/zBaW7VqLwNgOLSwkcSda97w8bSA4vyG6CvIXNsyQ.png"
                        onerror="this.onerror=null;this.src='../../assets/images/placeholder.jpg';"
                      />
                    </span>
                  </span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-md">
                  <Link
                     to="#"
                    className="dropdown-item"
                  >
                    <i className="las la-user-circle" />
                    <span>Profile</span>
                  </Link>
                  <Link
                     to="#"
                    className="dropdown-item"
                  >
                    <i className="las la-sign-out-alt" />
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* .aiz-topbar-item */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
