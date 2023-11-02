import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';

const SellersOrder = () => {
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
              <div className="card">
                <form className id="sort_orders" action method="GET">
                  <div className="card-header row gutters-5">
                    <div className="col text-center text-md-left">
                      <h5 className="mb-md-0 h6">Orders</h5>
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
                    <div className="col-xl-2 col-md-3 ml-auto">
                      <div className="dropdown bootstrap-select form-control aiz-">
                        <select
                          className="form-control aiz-selectpicker"
                          name="payment_status"
                          onchange="sort_orders()"
                          data-selected
                          tabIndex={-98}
                        >
                          <option value>Filter by Payment Status</option>
                          <option value="paid">Paid</option>
                          <option value="unpaid">Unpaid</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-1"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          title="Filter by Payment Status"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Filter by Payment Status
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
                    <div className="col-xl-2 col-md-3">
                      <div className="dropdown bootstrap-select form-control aiz-">
                        <select
                          className="form-control aiz-selectpicker"
                          name="delivery_status"
                          onchange="sort_orders()"
                          data-selected
                          tabIndex={-98}
                        >
                          <option value>Filter by Deliver Status</option>
                          <option value="order_placed">Order Placed</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="processed">Processed</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-2"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          title="Filter by Deliver Status"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                Filter by Deliver Status
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
                    <div className="col-md-2 ml-auto">
                      <div className="dropdown bootstrap-select form-control form-control-sm aiz- mb-2 mb-md-0">
                        <select
                          id="demo-ease"
                          className="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0"
                          name="shop_id"
                          onchange="sort_orders()"
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
                          aria-owns="bs-select-3"
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
                            id="bs-select-3"
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
                    <div className="col-xl-2 col-md-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="search"
                          name="search"
                          placeholder="Type Order code & hit Enter"
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
                          <th style={{ display: "table-cell" }}>shop</th>
                          <th style={{ display: "table-cell" }}>Order Code</th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Num. of Products
                          </th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Customer
                          </th>
                          <th style={{ display: "table-cell" }}>Amount</th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Delivery Status
                          </th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Payment Status
                          </th>
                          <th
                            data-breakpoints="lg"
                            className="text-right footable-last-visible"
                            width="15%"
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
                                    defaultValue={222}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>Beauty Shop</td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 2 of</div>
                            <div className="fw-600">20221221-16180436</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$26.98</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">
                              Order Placed
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-success">
                              Paid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/222"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/222')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/222"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/222"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={216}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>Beauty Shop</td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220125-08204785</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$289.28</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">
                              Order Placed
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-danger">
                              Unpaid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/216"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/216')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/216"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/216"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={215}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Violetâs Dresser
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-10175072</div>
                          </td>
                          <td style={{ display: "table-cell" }}>7</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$239.00</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">Delivered</span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-success">
                              Paid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/215"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/215')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/215"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/215"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={214}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Beyond Threads
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-10143089</div>
                          </td>
                          <td style={{ display: "table-cell" }}>2</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$16.00</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">Delivered</span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-success">
                              Paid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/214"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/214')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/214"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/214"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={213}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Beyond Threads
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-10073186</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$8.00</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">Delivered</span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-success">
                              Paid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/213"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/213')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/213"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/213"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={212}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Hitech Gadget &amp; Phone Shop
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-10070599</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$82.00</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">
                              Order Placed
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-success">
                              Paid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/212"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/212')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/212"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/212"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={211}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Beyond Threads
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-10062164</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$34.00</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">
                              Order Placed
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-danger">
                              Unpaid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/211"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/211')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/211"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/211"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={210}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Beyond Threads
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-10054817</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$42.00</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">Cancelled</span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-danger">
                              Unpaid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/210"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/210')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/210"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/210"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={209}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>Tech Scope</td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-10015033</div>
                          </td>
                          <td style={{ display: "table-cell" }}>2</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$927.97</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">Delivered</span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-success">
                              Paid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/209"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/209')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/209"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/209"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={208}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Consistent Dresses
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-09595921</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Kevin M Cook
                          </td>
                          <td style={{ display: "table-cell" }}>$27.75</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">Delivered</span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-success">
                              Paid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/208"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/208')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/208"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/208"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={207}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Consistent Dresses
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-09593952</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Kevin M Cook
                          </td>
                          <td style={{ display: "table-cell" }}>$38.05</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">Delivered</span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-success">
                              Paid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/207"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/207')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/207"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/207"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={206}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Consistent Dresses
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-09592431</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Kevin M Cook
                          </td>
                          <td style={{ display: "table-cell" }}>$51.44</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">
                              Order Placed
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-danger">
                              Unpaid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/206"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/206')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/206"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/206"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={205}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>Sweet Kids</td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-09573291</div>
                          </td>
                          <td style={{ display: "table-cell" }}>3</td>
                          <td style={{ display: "table-cell" }}>
                            Kevin M Cook
                          </td>
                          <td style={{ display: "table-cell" }}>$208.10</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">Delivered</span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-success">
                              Paid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/205"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/205')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/205"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/205"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={204}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>Sweet Kids</td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220123-09565655</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Kevin M Cook
                          </td>
                          <td style={{ display: "table-cell" }}>$38.00</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">Delivered</span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-success">
                              Paid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/204"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/204')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/204"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/204"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
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
                                    defaultValue={203}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>Beauty Shop</td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220120-10514213</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$51.81</td>
                          <td style={{ display: "table-cell" }}>
                            <span className="text-capitalize">Processed</span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-danger">
                              Unpaid
                            </span>
                          </td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/seller-order/show/203"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/203')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/203"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/203"
                              title="Delete"
                            >
                              <i className="las la-trash" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="aiz-pagination">
                      <nav>
                        <ul className="pagination">
                          <li
                            className="page-item disabled"
                            aria-disabled="true"
                            aria-label="pagination.previous"
                          >
                            <span className="page-link" aria-hidden="true">
                              ‹
                            </span>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <span className="page-link">1</span>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/seller-orders?page=2"
                            >
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/seller-orders?page=2"
                              rel="next"
                              aria-label="pagination.next"
                            >
                              ›
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
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

export default SellersOrder
