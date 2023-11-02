import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';

const Customers = () => {
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
                <div className="align-items-center">
                  <h1 className="h3">All Customers</h1>
                </div>
              </div>
              <div className="card">
                <form className id="sort_customers" action method="GET">
                  <div className="card-header">
                    <h5 className="mb-0 h6">Customers</h5>
                    <div className="d-flex flex-wrap">
                      <div className="dropdown mr-2 mb-md-0">
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
                      <div className="clearfix">
                        <div className="box-inline pad-rgt pull-left">
                          <div className style={{ minWidth: 200 }}>
                            <input
                              type="text"
                              className="form-control"
                              id="search"
                              name="search"
                              placeholder="Type email or name & Enter"
                            />
                          </div>
                        </div>
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
                          <th style={{ display: "table-cell" }}>Name</th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Email address
                          </th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Phone
                          </th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Wallet Balance
                          </th>
                          <th
                            data-breakpoints="lg"
                            style={{ display: "table-cell" }}
                          >
                            Number of Orders
                          </th>
                          <th
                            className="text-right footable-last-visible"
                            data-breakpoints="lg"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={58}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Eric M Spradlin
                          </td>
                          <td style={{ display: "table-cell" }}>
                            customer13@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +18432955495
                          </td>
                          <td style={{ display: "table-cell" }}>$5,034.59</td>
                          <td style={{ display: "table-cell" }}>9</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/58"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6Ikh1RnVnNm1YNTlPT0dCOXpzaStkRmc9PSIsInZhbHVlIjoibjc1YUdwTkZ6SUNadlZxeW9xd25XQT09IiwibWFjIjoiMzJlMGI1YzdkZDI1YmJlMDYzYTQyYTZmY2U3MzczYzE1MGI3ZjE4NmQ2OGIyOTAxMWRjZTQ5ODkxYzEzYmNmNiIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/58"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={57}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Concepcion A Newsome
                          </td>
                          <td style={{ display: "table-cell" }}>
                            customer12@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +18302335912
                          </td>
                          <td style={{ display: "table-cell" }}>$4,268.45</td>
                          <td style={{ display: "table-cell" }}>9</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/57"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6InB2QlZtam4xcEU2VG8ra0E4SnR5N2c9PSIsInZhbHVlIjoiYWpZckxjTFlrT2FCNFdyY0RNVmZVQT09IiwibWFjIjoiNjA1ZDFkMjU0MTcwODk0MTA4ZWQ1NTFjNzg0ZTE2MzE2ZDRjYzk0ZmZmMmQyNjVlNWQ2NzkyYjc5NDMzZDhlYyIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/57"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={56}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Sharon P Bonnett
                          </td>
                          <td style={{ display: "table-cell" }}>
                            customer11@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +16146192572
                          </td>
                          <td style={{ display: "table-cell" }}>$396.00</td>
                          <td style={{ display: "table-cell" }}>6</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/56"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6ImNWVkZLN1crQkxzZkhTNUdFM05ibGc9PSIsInZhbHVlIjoiTVZkTXFRK244eS93Rk4xN0NwMXhqdz09IiwibWFjIjoiNmY5NGMxZTVlMWVhMzMwOGZjZjA0MGZiYzY1N2VlOWM0NDI0MTZkMjU5M2FmOTk2ZjdhNzQ2MDljMDE0MmJjZSIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/56"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={55}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Carey W Nicholas
                          </td>
                          <td style={{ display: "table-cell" }}>
                            customer10@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +12039132687
                          </td>
                          <td style={{ display: "table-cell" }}>$4,925.38</td>
                          <td style={{ display: "table-cell" }}>10</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/55"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6IkpJRlVuNDVMbzh2RmFyZUJlS0pwTUE9PSIsInZhbHVlIjoiOXZyZzhxeVYxTU9WMHk1MGV2Z21SUT09IiwibWFjIjoiNDc2NTMyZWIwOWJhMmQ2NjA5YmVlZGI5YjI0MjdhMjE2NWVmOTEzMDUzOTMxNGRiMmZhODkwMjM3ZTlhYTYwNSIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/55"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={54}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            William J Allen
                          </td>
                          <td style={{ display: "table-cell" }}>
                            customer8@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +15756525001
                          </td>
                          <td style={{ display: "table-cell" }}>$9,639.05</td>
                          <td style={{ display: "table-cell" }}>14</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/54"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6IkNpemdsNmcwV3JoZWNOLzRjYm9xYWc9PSIsInZhbHVlIjoic210WkhqdmVSaXJFa3dOaHpKemUyUT09IiwibWFjIjoiZGI5ZDA5ZmI3NjQwZGY2MGU5NTNiOWY5Mzg4MTZiMDEyODlkMzQzMTlmM2NlYTU4ZWNkZDNlYzA5MjIzYWEzMCIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/54"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={53}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Linda R Helton
                          </td>
                          <td style={{ display: "table-cell" }}>
                            customer7@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +18135989004
                          </td>
                          <td style={{ display: "table-cell" }}>$1,850.00</td>
                          <td style={{ display: "table-cell" }}>11</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/53"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6IlRFdlVKVE1NMkFWcy9TSVJoWWdTRlE9PSIsInZhbHVlIjoibXhTL3ZvS3hNWk1vaTNBZXZRdGtMUT09IiwibWFjIjoiZjZlOGMzN2YzZWY4MjQ2NGNkNGZhNTBlNTlhYzQ3NmY1ZGRmMmJmMTNmZjNmYzU2ODdiYjA5MjA1NDYxNjI2MSIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/53"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={52}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Ann C Mansfield
                          </td>
                          <td style={{ display: "table-cell" }}>
                            customer6@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +18145743602
                          </td>
                          <td style={{ display: "table-cell" }}>$0.00</td>
                          <td style={{ display: "table-cell" }}>11</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/52"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6IlNXRWZwQkJka3pWb0pqV1EvN1BmWkE9PSIsInZhbHVlIjoiYytTNExaUkFTU2tVQlpuSmU3TDdpUT09IiwibWFjIjoiOGRkNzVjMDM4MjA5NzEwYTY2NDg1MWFhNmUwMDFlY2JjMWJhYmVhMDY5NjFhNmI2NDU4ODk2N2E5ZGQwMzQwZiIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/52"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={50}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Marshall D Smith
                          </td>
                          <td style={{ display: "table-cell" }}>
                            customer4@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +14197420294
                          </td>
                          <td style={{ display: "table-cell" }}>$4,152.60</td>
                          <td style={{ display: "table-cell" }}>10</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/50"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6Im1tTVpzSGtrQk9GdG01UFd1N3VlQWc9PSIsInZhbHVlIjoiRkp6SjBNMDFJc0VwSW1QS2piOEhYZz09IiwibWFjIjoiOWJmNDMwZjcyM2IyM2E2YmY1ZGZlZDcxMmM4NDhkOGUyNDQzOWQ3MjQ5ODU2YjljN2ViOTlmNTBjNTJlYjk4OSIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/50"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={49}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Kevin M Cook
                          </td>
                          <td style={{ display: "table-cell" }}>
                            customer3@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +16035347661
                          </td>
                          <td style={{ display: "table-cell" }}>$0.00</td>
                          <td style={{ display: "table-cell" }}>16</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/49"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6IjN1bVcxK3ZIbVBpaUcvUWdaM2wxSlE9PSIsInZhbHVlIjoiZVlvYi9OWXJTa0pzMzl4aVBuMkZldz09IiwibWFjIjoiYTQ3MjYyNDA0NzI0ZGI1ZTM5YThiNWU4N2M5MGRiOThmNGE5NWEyMGZiYTNjMjg3NDc0Yzc4ZWIyYjJhYzc4MyIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/49"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={47}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>Emily Roach</td>
                          <td style={{ display: "table-cell" }}>
                            customer5@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +8801399546887
                          </td>
                          <td style={{ display: "table-cell" }}>$0.00</td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/47"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6ImRvV3orZHhLckhZQ1RTU05LbExVTlE9PSIsInZhbHVlIjoiTitNdjVBRmNDVjVCZEpzTjdWNTRxZz09IiwibWFjIjoiNGI3ZTg4NGM2ZWRkZGYyOGQ1Zjg1MzQzZDdjZjRkMDFmOTE0MjQ3MTA5MzEwMWYxYjNlMDEwMmY4ODFjY2RiYyIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/47"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={42}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Commodo incidunt nu
                          </td>
                          <td style={{ display: "table-cell" }}>
                            lusy@mailinator.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +8809282683681
                          </td>
                          <td style={{ display: "table-cell" }}>$0.00</td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/42"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6ImpyNGVYUjZUU2xUSEdWR1QzQ1o0ZGc9PSIsInZhbHVlIjoiZlFLVXVtdFVySzVlQkRFY1hWMC9UUT09IiwibWFjIjoiMTBjNjI1OGFlYzIzNmNmMjVjMDlkMzY0Mzk4NWI5MjRlZjExNjZiZGFjMzViODYyOTdhOTE4ZGE3NWQ4YzZlYyIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/42"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={39}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Mary G Benson
                          </td>
                          <td style={{ display: "table-cell" }}>
                            customer2@example.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +16192178934
                          </td>
                          <td style={{ display: "table-cell" }}>$0.00</td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/39"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6IjBDbVJIMUhBQk9BTi8wa1JJVzhGNGc9PSIsInZhbHVlIjoiZDlkcW9uU1VTekY1Mktlazc3Yk1DZz09IiwibWFjIjoiMjc5MGJlYWU5Yzk2YWM3ZTAxNTVlZTc1ZGZhMmMwYzYwZmZmOGZkMDJiZjBmMjc1YTk3MTRlNzRhNjcxY2E3NyIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/39"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={38}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Mahmudur Rahman
                          </td>
                          <td style={{ display: "table-cell" }}>
                            hridoymahmud71@gmail.com
                          </td>
                          <td style={{ display: "table-cell" }} />
                          <td style={{ display: "table-cell" }}>$0.00</td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/38"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6ImRWeVRrM1FBMU0xZk9QbnRpUnZkOWc9PSIsInZhbHVlIjoibFZrUi9VdjBBWHlONDFndmJVV3JyUT09IiwibWFjIjoiODBjNWNhZDIxYTg4YWZlOTE2MTMxNTJiNjQ5ZjA4MTRlOTFiYzI3Mzc4YzlmYjM4OGUwY2Q1ZjJmYzUyOTE5ZCIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/38"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={36}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Enim voluptates dolo
                          </td>
                          <td style={{ display: "table-cell" }}>
                            pazuwa@mailinator.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +8803111335365
                          </td>
                          <td style={{ display: "table-cell" }}>$0.00</td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/36"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6IjRSLzBPbXQrN3hrQWhESDlRc0pBVkE9PSIsInZhbHVlIjoiUVdaR3padHV6NmdSa1AzYm05QS9xZz09IiwibWFjIjoiYzBhNTAxYjA5YjhjM2EwZTQ2NjA2ZjEyYzVmNGJmMzhjNjIxZTIzNWYxYTIwMGYyNGQ2NTk2NWFmY2M0Y2MzNSIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/36"
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
                            <div className="form-group d-inline-block">
                              <label className="aiz-checkbox">
                                <input
                                  type="checkbox"
                                  className="check-one"
                                  name="id[]"
                                  defaultValue={35}
                                />
                                <span className="aiz-square-check" />
                              </label>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            Officiis qui consect
                          </td>
                          <td style={{ display: "table-cell" }}>
                            qucekocan@mailinator.com
                          </td>
                          <td style={{ display: "table-cell" }}>
                            +1(764)392-6539
                          </td>
                          <td style={{ display: "table-cell" }}>$0.00</td>
                          <td style={{ display: "table-cell" }}>0</td>
                          <td
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            <a
                              className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                              href="https://shop.activeitzone.com/admin/customers/35"
                              title="View"
                            >
                              <i className="las la-eye" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm"
                              onclick="confirm_ban('https://shop.activeitzone.com/admin/customers_ban/eyJpdiI6InFyNk9WcE5HUWozQnlLeVpmZitLVkE9PSIsInZhbHVlIjoiUmYzUnF3SHc2Z1B1Rk5RMUJYR0NiZz09IiwibWFjIjoiNGNlZDliMWExYzNhNzBlNzEzNjc0MmRkOTg3NjFhYjA3ZTgwMTljZjc1Mzk0YzE3ODVlZDdjMzY0NTliMWY3NiIsInRhZyI6IiJ9');"
                              title="Ban this Customer"
                            >
                              <i className="las la-user-slash" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                              data-href="https://shop.activeitzone.com/admin/customers/destroy/35"
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
                              href="https://shop.activeitzone.com/admin/customers?page=2"
                            >
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/customers?page=3"
                            >
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/customers?page=2"
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
              <div className="modal fade" id="confirm-ban">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title h6">Confirmation</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      />
                    </div>
                    <div className="modal-body">
                      <p>Do you really want to ban this Customer?</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <a
                        type="button"
                        id="confirmation"
                        className="btn btn-primary"
                      >
                        Proceed
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal fade" id="confirm-unban">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title h6">Confirmation</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      />
                    </div>
                    <div className="modal-body">
                      <p>Do you really want to unban this Customer?</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <a
                        type="button"
                        id="confirmationunban"
                        className="btn btn-primary"
                      >
                        Proceed
                      </a>
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

export default Customers
