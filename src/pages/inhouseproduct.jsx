import React from 'react'
import SideBar from '../component/sidebar/sidebar';
import Header from '../component/hearder/header';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import _route from '../constants/routes';
import Footer from '../component/footer/footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import placeholder from "../assets/images/placeholder.jpg"
import useGetAllProduct from '../hooks/product/getallproducts';

const InHouseProduct = () => {
    const [menu, setMenu] = useState(false)
    const { getAllProduct, loading, data } = useGetAllProduct()

    useEffect(()=>{
      getAllProduct()
    }, [])

    console.log(data)
  
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
                    <h1 className="h3">All products</h1>
                  </div>
                  <div className="col-md-8 text-md-right">
                    <a
                      href=""
                      className="btn btn-primary"
                    >
                      <span>Add New Product</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <form className id="sort_products" action method="GET">
                  <div className="card-header row gutters-5">
                    <div className="col text-center text-md-left">
                      <h5 className="mb-md-0 h6">All products</h5>
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
                          <option value="unit_price,desc">
                            Base Price (High &gt; Low)
                          </option>
                          <option value="unit_price,asc">
                            Base Price (Low &gt; High)
                          </option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
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
                            className="col-xl-2"
                            style={{ display: "table-cell" }}
                          >
                            Name
                          </th>
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Info
                          </th>
                          <th
                            data-breakpoints="md"
                            width="20%"
                            style={{ display: "table-cell" }}
                          >
                            Categories
                          </th>
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Brand
                          </th>
                          {/* <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Published
                          </th> */}
                          <th
                            data-breakpoints="md"
                            className="text-right footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            Options
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          loading
                          ?
                          <tr className='w-full h-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faSpinner} size="lg" spin/>
                          </tr>
                          :
                          data != null ?
                            data.map((product, index)=>{
                              return (
                                <tr key={index}>
                                  <td
                                    className="footable-first-visible"
                                    style={{ display: "table-cell" }}
                                  >
                                    <div className="form-group d-inline-block">
                                      <label className="aiz-checkbox">
                                        <input
                                          type="checkbox"
                                          className="check-one"
                                          name={product._id}
                                        />
                                        <span className="aiz-square-check" />
                                      </label>
                                    </div>
                                  </td>
                                  <td style={{ display: "table-cell" }}>
                                    <a
                                      href="#"
                                      target="_blank"
                                      className="text-reset d-block"
                                    >
                                      <div className="d-flex align-items-center">
                                        <img
                                          src={product.images[0].image}
                                          alt="Image"
                                          className="size-60px size-xxl-80px mr-2"
                                          onerror={placeholder}
                                        />
                                        <span className="flex-grow-1 minw-0">
                                          <div className=" text-truncate-2 fs-12">
                                            {product.name}
                                          </div>
                                        </span>
                                      </div>
                                    </a>
                                  </td>
                                  <td style={{ display: "table-cell" }}>
                                    <div>
                                      <div>
                                        <span>Rating</span>:{" "}
                                        <span className="rating rating-sm my-2">
                                          <i className="las la-star active" />
                                          <i className="las la-star active" />
                                          <i className="las la-star active" />
                                          <i className="las la-star active" />
                                          <i className="las la-star active" />
                                        </span>
                                      </div>
                                      <div>
                                        <span>Total Sold</span>:{" "}
                                        <span className="fw-600">2</span>
                                      </div>
                                      <div>
                                        <span>Price</span>:
                                        <span className="fw-600">
                                          {` $${product.price}`}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td style={{ display: "table-cell" }}>
                                    <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                      Cellphones &amp; Tabs
                                    </span>
                                    <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                      Smartphones
                                    </span>
                                  </td>
                                  <td style={{ display: "table-cell" }}>
                                    <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                                      <img
                                        src="https://shop.activeitzone.com/public/uploads/all/TRcc8CiQwf6YXDPVPNtmaZ6RQZDyFtDGxWZ2fuIb.png"
                                        alt="Brand"
                                        className="mw-100 mh-100"
                                        onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                      />
                                    </div>
                                  </td>
                                  {/* <td style={{ display: "table-cell" }}>
                                    <label className="aiz-switch aiz-switch-success mb-0">
                                      <input
                                        onchange="update_published(this)"
                                        defaultValue={307}
                                        type="checkbox"
                                        defaultChecked
                                      />
                                      <span className="slider round" />
                                    </label>
                                  </td> */}
                                  <td
                                    className="text-right footable-last-visible"
                                    style={{ display: "table-cell" }}
                                  >
                                    <a
                                      className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                      href=""
                                      title="View"
                                    >
                                      <i className="las la-eye" />
                                    </a>
                                    <a
                                      className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                      href=""
                                      title="Edit"
                                    >
                                      <i className="las la-edit" />
                                    </a>
                                    <a
                                      className="btn btn-soft-success btn-icon btn-circle btn-sm"
                                      href=""
                                      title="Duplicate"
                                    >
                                      <i className="las la-copy" />
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                                      data-href="https://shop.activeitzone.com/admin/product/destroy/307"
                                      title="Delete"
                                    >
                                      <i className="las la-trash" />
                                    </a>
                                  </td>
                                </tr>
                              )
                            })
                          :
                          <p>No Available Product</p>
                        }
                      </tbody>
                    </table>

                    {/* Pagination section  */}
                    {/* <div className="aiz-pagination">
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
                              href="https://shop.activeitzone.com/admin/product?page=2"
                            >
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=3"
                            >
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=4"
                            >
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=5"
                            >
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=6"
                            >
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=7"
                            >
                              7
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=8"
                            >
                              8
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=9"
                            >
                              9
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=10"
                            >
                              10
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=11"
                            >
                              11
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=12"
                            >
                              12
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=13"
                            >
                              13
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/product?page=2"
                              rel="next"
                              aria-label="pagination.next"
                            >
                              ›
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div> */}
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

export default InHouseProduct
