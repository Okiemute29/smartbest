import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';

const Seller = () => {
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
        {/* sidebar */}
        {!menu && <SideBar setMenu={setMenu} />}
        {/* .aiz-sidebar */}
        <div className="aiz-content-wrapper">
          {/* Header */}
          <Header setMenu={setMenu} />
          {/* .aiz-topbar */}
          <div className="aiz-main-content">
            <div className="px-15px px-lg-25px">
              <div className="aiz-titlebar text-left mt-2 mb-3">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h1 className="h3">All Sellers</h1>
                  </div>
                </div>
              </div>
              <div className="card">
                <form className id="sort_sellers" action method="GET">
                  <div className="card-header row gutters-5">
                    <div className="col">
                      <h5 className="mb-md-0 h6">Sellers</h5>
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
                          Delete selection
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 ml-auto">
                      <div className="dropdown bootstrap-select form-control aiz-">
                        <select
                          className="form-control aiz-selectpicker"
                          name="approved_status"
                          id="approved_status"
                          onchange="sort_sellers()"
                          data-selected
                          tabIndex={-98}
                        >
                          <option value>Filter by Approval</option>
                          <option value={1}>Approved</option>
                          <option value={0}>Non-Approved</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-1"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-id="approved_status"
                          title="Filter by Approval"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Filter by Approval
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
                    <div className="col-md-3">
                      <div className="form-group mb-0">
                        <input
                          type="text"
                          className="form-control"
                          id="search"
                          name="search"
                          placeholder="Type name or phone & Enter"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <table
                      className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                      style={{}}
                    >
                      <thead>
                        <tr className="footable-header">
                          <th
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-all"
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Seller info
                          </th>
                          <th style={{ display: "table-cell" }}>Shop info</th>
                          <th
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            Verification status
                          </th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Current package
                          </th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Current balance
                          </th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Seller Approval
                          </th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Shop Published
                          </th>
                          <th
                            width="10%"
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            Options
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={85}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/npnzWUXngIpkfyhtu9lbmwSiGi9ylE4UJpSoutAy.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Trinidad O. Sheppard
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +18177629984
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller14@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/oLnlopQfHn9I4OZjlVQ8c1Cps45XzonH0TekmbgD.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Lauraâ€™s Closet
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 18177629984
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Premium</div>
                            <div>Valid till: 2054-12-09</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-secondary">
                              $0.00
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={21}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={21}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('85');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/21"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('85');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=21"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6ImtIZHd0YkIvdi84cURGOThyQ2ZiQXc9PSIsInZhbHVlIjoiVkdGaXJiUWNiVmdmakxlTDNmcVR1QT09IiwibWFjIjoiM2NjMGMzZjdlZTY3YmI3YTk4MWU1ODNjZjY1NTE2N2I4NzZhZWY4YjgwZjRjMDA4ZTEwNzIzMWJlMDUxZTk3YyIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/85"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={84}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/z1v3Og6WWI7d0bv6cl7h1GxohiVQ7XEbtEyfKUrV.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Kurt G. Morris
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +13103797631
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller13@gmail.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/EYcJ9Nqibq3AYDEwXW69cu2GQiMzq4IIyrnYaPI3.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  The Tech Cube
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 13103797631
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Premium</div>
                            <div>Valid till: 2054-12-09</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-secondary">
                              $0.00
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={20}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={20}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('84');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/20"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('84');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=20"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6IlZJL1N6NWJoWXM5MUZOTzZQNXR6SFE9PSIsInZhbHVlIjoicVBhT1NsZVJSVkpUb0FTV05ud0NmUT09IiwibWFjIjoiYmUwOGEwYzdjOTMwNWE4ZDE0ZGMzNjhhZmQ2ZThjMTVjYjhiMzM2OGEyOThiOWYzZjNiZjFiZmJhZmIzMGE4ZCIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/84"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={83}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/dZnKuJdXHc0hWHqXnzyc7imt0DRPjufEbCD39NMj.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Jimmy C. McCarthy
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +14087325761
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: Seller12@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/GCEJ8vNBdUloqZdhxY65hJkpr8XydpgCcE1ua3g8.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Captiva Girl
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 14087325761
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Gold</div>
                            <div>Valid till: 2025-05-14</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-secondary">
                              $0.00
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={19}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={19}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('83');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/19"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('83');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=19"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6IlZob1JJdGxQRnRjNGF1clRMWk1UdkE9PSIsInZhbHVlIjoiVjE0V0o1SE95dGtVR0F1REFPUDZTdz09IiwibWFjIjoiOWE2ZWUwYjA4NTExODkwYjRhYzcyOWJkODJlYzgyY2QwNjYyZWI3MDIwN2JkNjUyMmVlYjllZDE1NjAxNTBkOCIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/83"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={82}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/vfNgFhiOS6LbcJHKGLgNzaYViE2d1y0qTX0Rf9nE.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Judy B. Ives
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +19147415434
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: Seller11@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/RhMA4EyJRzhHTWJ2NqC83SSYfSAYMzarLCUo3yOH.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Goodwill Outlet
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 19147415434
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Premium</div>
                            <div>Valid till: 2025-05-11</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-secondary">
                              $0.00
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={18}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={18}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('82');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/18"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('82');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=18"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6IjkyTjFxbDk0S2pxckI3R25PR2MydWc9PSIsInZhbHVlIjoiUUliL3VuTkc5RENZZ0NuOXI4NDJmZz09IiwibWFjIjoiNjM1Y2IzMWJhODE1ZjRjYWNiY2M5NjhhNmNiNDhkZTIxMTM2NDAwZTBjZTg0NmFhYTIxOWZiMTYwYTRmNjVkZiIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/82"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={81}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/GhCcnzllcJERNoZOpt12ECD8k6RX8EIrIYuUEy9d.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Stephen S. Reasor
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +18604897201
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller10@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/kHQd4iLWQM87v865Z7uVjAPF6vPmDcFtPjNrFIUc.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Apple Store
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 18604897201
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Premium</div>
                            <div>Valid till: 2025-05-07</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-secondary">
                              $0.00
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={17}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={17}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('81');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/17"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('81');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=17"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6IjFhdGUyZ0RFVkVUVFQ3eFpIR0NRU1E9PSIsInZhbHVlIjoiNmtack1WOTRXL0toMkoxRWxvVXJidz09IiwibWFjIjoiNjk3NDBkMzkwZmNmNmNjZjJhOTczNzJiNzEzNzdkYThhMzdkNTU1YmE2ODhjMTdmOTNlOTJiZGE1OTBlODVjYyIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/81"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={80}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/fGPVnLB7Xd3ojbIWho5p2m5sNWWQEbdO4X9DksBg.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Rosalina F. Smith
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +15708539854
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller9@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/MCnAg056NrS98nmGmuxC3pFXPgxiqTah7Pw8beKC.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Morning Glory
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 15708539854
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Premium</div>
                            <div>Valid till: 2025-05-08</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-secondary">
                              $0.00
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={16}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={16}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('80');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/16"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('80');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=16"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6IkhUdTVNbk5acDJMcEtxb0FXRVVEVmc9PSIsInZhbHVlIjoiOGEwQ3g1ZGFZZHQvWWF3R2ZzeDhhUT09IiwibWFjIjoiNzIwYzdjZDdkMmZjYjhlZWFhNDUwMTUzMmE0MjdiODExNjk1MWE0YTE1NzA2ZWFkYzIyM2Q2MmMwYWE5Mjk2MCIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/80"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={79}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/YRiKcsrO2wUdbd5V1uOb8kMZ8GyuJMAKUSqfWS8X.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  John K. Larsen
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +12393905851
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller8@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/cMmT8FRfhj0pbAuJ2zgTVQ7Wfkt8PPAAIagIbBLX.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Bloom Boutique
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 12393905851
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Gold</div>
                            <div>Valid till: 2025-05-07</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-secondary">
                              $0.00
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={15}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={15}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('79');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/15"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('79');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=15"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6Ijc5dVhGMnBnaTVtdUR2YXYzaHczNVE9PSIsInZhbHVlIjoiTmNlalNTYUtDS2pEdlBMTmcrdVhlQT09IiwibWFjIjoiMWQyNzlhZDllZTNlN2ZhNzU5YzNmMWE4ZmVjNTIyMDQ2ODcxMTA0ODQ2ZDY0MjQyNzk5NWViMGExN2M3MDMwYSIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/79"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={78}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/j2Y6dZvlVcsT2ax3j6HfJBDnC55JudXX5aaqy2Ml.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Rudolph C. Gephart
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +14342063290
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller7@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/hbXZCcXk3s8gSrDeDLEphBfa4xyjyrvsRh6w0sOO.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Violetâs Dresser
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 14342063290
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Gold</div>
                            <div>Valid till: 2025-05-07</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-danger">
                              $215.30
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={14}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={14}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('78');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/14"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('78');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=14"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6Ik9hdjY5WDRLNmtreU5LNWdiNVVUY2c9PSIsInZhbHVlIjoiNjEzWWQ4blRJT1lyS0wyVTVqczlJdz09IiwibWFjIjoiNDAxODFlMGQwMDVlZGZlOTc5ZWZiMGVhMDI1OWI1MDkyODlkMmZjYjg5NDg1ZjI4NjQ2MmNmZTg3MmJhMzY2NSIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/78"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={77}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/sGxbrONZxVBB227RDU4Fhp2G7EfHZKxIL3wHsWBe.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Phillip B. Oliver
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +19095574979
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller6@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/B9VFbaS6gjWnhQGlOBgvGOREsb3616ZGnWXGTgc9.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Beyond Threads
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 19095574979
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Premium</div>
                            <div>Valid till: 2025-05-07</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-danger">
                              $23.00
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={13}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={13}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('77');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/13"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('77');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=13"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6IkxCbFk5VXREOGExcWI3RnUzeUZzSkE9PSIsInZhbHVlIjoiaUkvOFRDVXl6Y0txNEJPOGg3aDJadz09IiwibWFjIjoiYTQ1ZDFlZWQyYzZiZjFiY2RiMWM4M2UzOTY0MmYwMTlmNjkzZDczNjIzNjE5Nzg4YTE4YTY3OWVmM2ZjOTU0YyIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/77"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={76}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/WgBxbvlxu3vtbpmq6cFKPEu4LDPFEZEv6vfBoQ7s.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Nelson J. Dickson
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +8594931409
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller5@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/4B9NO0ZSlmlUE9UMdmF0DTRWYZWoUHieobMnZhrK.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Tech Scope
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 8594931409
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-danger">
                              No active Package
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-danger">
                              $883.02
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={12}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={12}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('76');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/12"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('76');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=12"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6Ik1lRTBPV3FEL1ZvclIwTGc3MUVNeVE9PSIsInZhbHVlIjoib0VlWFB6ZGw4NmFIUXNodUpFdjdSdz09IiwibWFjIjoiZTQ0ZDgzYzc1ZWNlNGZkOWYwMzkxYzE0OWRjZjBiNGZjZDM3YWIzZDUyMmY2MzcxYTViMmQzOGE3ZmE3Zjg4OSIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/76"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={75}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/BlZDeEZ4MeAHggnwN9wp8E76NynjgW2Tasf0GYds.jpg"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Joseph M. Defoor
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +18152180574
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller4@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/evmygqxGol69sqIH1HiVnaGltLpV2G1ZYDhQyfzU.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Consistent Dresses
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 18152180574
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 6
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Premium</div>
                            <div>Valid till: 2054-12-09</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-danger">
                              $62.80
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={11}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={11}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('75');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/11"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('75');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=11"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6ImMzQUwvSTlDMVR3VFAzYm9VU0dBS2c9PSIsInZhbHVlIjoiK1cySHZadUhMT0pDWHN5aC9BVzgvUT09IiwibWFjIjoiYTU2YTNiNTZlMDYwOGIwZDdjNzBiOTg5MDZmNzlhNjBiODU0Zjk4OGRhMzg5YWQ0ZTc2Njg2NWNlYTZjM2MwYyIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/75"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={74}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/4zJdpKmkeBuMHUzFYvU7rK2dRSEJge0IrHiLfSrT.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Rosemary A. Marshall
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +15596404833
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller3@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/4NgELAyS1Nebwlu9a0TQ1EilE8q40GL6ORNiSbrg.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Sweet Kids
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 15596404833
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 10
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Premium</div>
                            <div>Valid till: 2054-12-09</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-danger">
                              $234.29
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={10}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={10}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('74');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/10"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('74');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=10"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6ImdjVjVKWFBqN01JZXlCL25wbWpvRkE9PSIsInZhbHVlIjoiMlhVaS85SlFlMVZTNm5YMnJ3bFVudz09IiwibWFjIjoiNDNlMjdhNDVmMWU1ZDUyNmY5MTlhOTNmOWRiNmQ1YzJmNjI5NDI4ZmFiOGRkOTZhOWQ3MTc1MzIzZGQ5YWM1NSIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/74"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={73}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/rnlaxYovs83Q12n3W5rE2oSo7pJFfCO5bFf3U9ko.jpg"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Jessica L. Timko
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +14197350473
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller2@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/Juyoctxzo6eZkHct3L4vWwqd5iBATmOenBBJ9IAl.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Hitech Gadget &amp; Phone Shop
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 14197350473
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 11
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-danger">
                              No active Package
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-danger">
                              $1,328.40
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={9}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={9}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('73');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/9"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('73');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=9"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6IjRrNkxUTzFwMC94WTJxSTNHcU5Obmc9PSIsInZhbHVlIjoiQXRQSjNjSjVPck45RHlUSG5IUFYxZz09IiwibWFjIjoiMWFkZWM1NTk0NWVmMDI0YTVjMGIyZTFkNTZmYjQ1NDJkNjhlYjk3MTcxOGUzYjlhZGJlNGE0OGE0NmZlN2NmNCIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/73"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={72}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/oQnCsq7oaNCLwaePc9RoYqOgYWz6KUCQEplRlcbd.jpg"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Noelle R. Brock
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +17817742274
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller1@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/4GnbgOOz8kW3cGrgsuPXxFcnDxIk7OsyIC0jPqIg.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Sleek Style
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 17817742274
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 10
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-danger">
                              No active Package
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-danger">
                              $501.15
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={8}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={8}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('72');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/8"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('72');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=8"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6IjZlWWRZajdic3FvMnVWR0JKTFNNSWc9PSIsInZhbHVlIjoiR1Z2MU9SMWg4RmNUMTdNbE9rNUt5QT09IiwibWFjIjoiYzBlYmY3M2VlODgwZTU4MDBiOTFjMjFmM2JhNjJmNzIwZGJhNGY2ZjZmNTRiYjNmNzFkN2Y4Y2Y1MmQ0ODI0MCIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/72"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="form-group">
                              <div className="aiz-checkbox-inline">
                                <label className="aiz-checkbox">
                                  <input
                                    type="checkbox"
                                    className="check-one"
                                    name="id[]"
                                    defaultValue={71}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/Dmr0aKHDt0DaB2HHTlfw7ZaAl2AmEs3ilNXDgErh.jpg"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  John N. Klein
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: +14082484504
                                </div>
                                <div className="text-truncate fs-12">
                                  Email: seller@example.com
                                </div>
                              </span>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/WubUneHPvGBJFfr5M5NxpFvE5uh7vELJIjPmP1G1.png"
                                className="size-50px rounded-circle mr-2"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                              <span className="flex-grow-1 minw-0">
                                <div className="text-truncate fs-12 fw-600">
                                  Beauty Shop
                                </div>
                                <div className="text-truncate fs-12">
                                  Phone: 435 627 0212
                                </div>
                                <div className="text-truncate fs-12">
                                  Total Products: 15
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            className="text-center"
                            style={{ display: "table-cell" }}
                          >
                            <span className="badge badge-inline badge-warning">
                              Not verified
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package: Premium</div>
                            <div>Valid till: 2058-03-22</div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Due to seller:</div>
                            <span className="fs-16 fw-700 text-danger">
                              $1,233.99
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="seller_approval(this)"
                                defaultValue={7}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="shop_publish(this)"
                                defaultValue={7}
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="slider round" />
                            </label>
                          </td>
                          <td
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-soft-primary btn-icon dropdown-toggle no-arrow"
                                data-toggle="dropdown"
                                href="javascript:void(0);"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                              >
                                <i className="las la-ellipsis-v" />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                <a
                                  href="#"
                                  onclick="show_seller_profile('71');"
                                  className="dropdown-item"
                                >
                                  Profile
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/verification/7"
                                  className="dropdown-item"
                                >
                                  Verification Info
                                </a>
                                <a
                                  href="#"
                                  onclick="show_seller_payment_modal('71');"
                                  className="dropdown-item"
                                >
                                  Pay to Seller
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/sellers/payout-history?shop_id=7"
                                  className="dropdown-item"
                                >
                                  Payment History
                                </a>
                                <a
                                  href="https://shop.activeitzone.com/admin/seller-edit/eyJpdiI6InJtRkhTTk5vRXUyWVBkMXUzU2lUakE9PSIsInZhbHVlIjoibWFNWmlyTnlJWk5WVi9RTnNvbER5Zz09IiwibWFjIjoiYzA0ZTVmNmM1YWQ4NjI3NGZlZjc2MGFhNDQwMTM5ODg5MDNkMmZiNTk4NTUzZDVkMTc1ZjhhNjg2NTJkMmMxNiIsInRhZyI6IiJ9"
                                  className="dropdown-item"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item confirm-delete"
                                  data-href="https://shop.activeitzone.com/admin/sellers/destroy/71"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default Seller
