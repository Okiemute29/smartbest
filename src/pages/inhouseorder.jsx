import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';

const InHouseOrder = () => {
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
                                    defaultValue={226}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20230927-05154224</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$186.11</td>
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
                              href="https://shop.activeitzone.com/admin/orders/226"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/226')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/226"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/226"
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
                                    defaultValue={225}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20221221-16221030</div>
                          </td>
                          <td style={{ display: "table-cell" }}>3</td>
                          <td style={{ display: "table-cell" }}>
                            Eric M Spradlin
                          </td>
                          <td style={{ display: "table-cell" }}>$235.96</td>
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
                              href="https://shop.activeitzone.com/admin/orders/225"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/225')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/225"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/225"
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
                                    defaultValue={224}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20221221-16213423</div>
                          </td>
                          <td style={{ display: "table-cell" }}>3</td>
                          <td style={{ display: "table-cell" }}>
                            Eric M Spradlin
                          </td>
                          <td style={{ display: "table-cell" }}>$46.40</td>
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
                              href="https://shop.activeitzone.com/admin/orders/224"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/224')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/224"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/224"
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
                                    defaultValue={223}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20221221-16192167</div>
                          </td>
                          <td style={{ display: "table-cell" }}>3</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$1,335.40</td>
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
                              href="https://shop.activeitzone.com/admin/orders/223"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/223')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/223"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/223"
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
                                    defaultValue={221}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20221221-16180436</div>
                          </td>
                          <td style={{ display: "table-cell" }}>2</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$41.00</td>
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
                              href="https://shop.activeitzone.com/admin/orders/221"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/221')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/221"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/221"
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
                                    defaultValue={220}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20221221-16172360</div>
                          </td>
                          <td style={{ display: "table-cell" }}>2</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$230.00</td>
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
                              href="https://shop.activeitzone.com/admin/orders/220"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/220')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/220"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/220"
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
                                    defaultValue={219}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20221221-16165889</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$577.70</td>
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
                              href="https://shop.activeitzone.com/admin/orders/219"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/219')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/219"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/219"
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
                                    defaultValue={218}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20221221-16153848</div>
                          </td>
                          <td style={{ display: "table-cell" }}>2</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$263.81</td>
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
                              href="https://shop.activeitzone.com/admin/orders/218"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/218')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/218"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/218"
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
                                    defaultValue={217}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220912-09450924</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$2,603.00</td>
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
                              href="https://shop.activeitzone.com/admin/orders/217"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/217')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/217"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/217"
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
                                    defaultValue={191}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20220120-08273687</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$19.70</td>
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
                              href="https://shop.activeitzone.com/admin/orders/191"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/191')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/191"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/191"
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
                                    defaultValue={190}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20211118-18162446</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$80.40</td>
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
                              href="https://shop.activeitzone.com/admin/orders/190"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/190')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/190"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/190"
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
                                    defaultValue={189}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20211118-18040377</div>
                          </td>
                          <td style={{ display: "table-cell" }}>3</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$245.39</td>
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
                              href="https://shop.activeitzone.com/admin/orders/189"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/189')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/189"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/189"
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
                                    defaultValue={188}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20211118-17490876</div>
                          </td>
                          <td style={{ display: "table-cell" }}>2</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$244.90</td>
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
                              href="https://shop.activeitzone.com/admin/orders/188"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/188')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/188"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/188"
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
                                    defaultValue={187}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20211118-17453462</div>
                          </td>
                          <td style={{ display: "table-cell" }}>3</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$844.03</td>
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
                              href="https://shop.activeitzone.com/admin/orders/187"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/187')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/187"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/187"
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
                                    defaultValue={186}
                                  />
                                  <span className="aiz-square-check" />
                                </label>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div>Package 1 of</div>
                            <div className="fw-600">20211118-17410366</div>
                          </td>
                          <td style={{ display: "table-cell" }}>1</td>
                          <td style={{ display: "table-cell" }}>
                            Christina Ashens
                          </td>
                          <td style={{ display: "table-cell" }}>$161.80</td>
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
                              href="https://shop.activeitzone.com/admin/orders/186"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              className="btn btn-soft-success btn-icon btn-circle btn-sm"
                              title="Print Invoice"
                              href="javascript:void(0)"
                              onclick="print_invoice('https://shop.activeitzone.com/admin/orders/print/186')"
                            >
                              <i className="las la-print" />
                            </a>
                            <a
                              className="btn btn-soft-info btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/orders/invoice/186"
                              title="Download invoice"
                            >
                              <i className="las la-download" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/orders/destroy/186"
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
                              href="https://shop.activeitzone.com/admin/orders?page=2"
                            >
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=3"
                            >
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=4"
                            >
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=5"
                            >
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=6"
                            >
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=7"
                            >
                              7
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=8"
                            >
                              8
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=9"
                            >
                              9
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=10"
                            >
                              10
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=11"
                            >
                              11
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=12"
                            >
                              12
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/orders?page=2"
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

export default InHouseOrder
