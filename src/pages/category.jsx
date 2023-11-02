import React from 'react'
import Footer from '../component/footer/footer';
import SideBar from '../component/sidebar/sidebar';
import Header from '../component/hearder/header';
import useGetAllCategory from '../hooks/category/getallcategory';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

const Category = () => {
    const [menu, setMenu] = useState(false)
    const { getAllCategory, loading: categoryLoading, data: categoryData } = useGetAllCategory()
  
    useEffect(()=>{
      menu ? 
      document.body.className = 'side-menu-closed'
      :
      document.body.className = 'side-menu-open';
    }, [menu])

    
  useEffect(()=>{
    getAllCategory()
  }, [])
console.log(categoryData)
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
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h1 className="h3">All categories</h1>
                  </div>
                  <div className="col-md-6 text-md-right">
                    <a
                      href="https://shop.activeitzone.com/admin/categories/create"
                      className="btn btn-circle btn-primary"
                    >
                      <span>Add New category</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Categories</h5>
                  <div className="pull-right clearfix">
                    <form className id="sort_categories" action method="GET">
                      <div className="box-inline pad-rgt pull-left">
                        <div className style={{ minWidth: 200 }}>
                          <input
                            type="text"
                            className="form-control"
                            id="search"
                            name="search"
                            placeholder="Type name & Enter"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card-body">
                  <table
                    className="table aiz-table mb-0 footable footable-1 breakpoint breakpoint-md"
                    style={{}}
                  >
                    <thead>
                      <tr className="footable-header">
                        <th data-breakpoints="lg" style={{ display: "none" }}>
                          #
                        </th>
                        <th
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          Name
                        </th>
                        <th data-breakpoints="lg" >
                          Parent Category
                        </th>
                        <th data-breakpoints="lg" >
                          Order Level
                        </th>
                        <th data-breakpoints="lg" >
                          Level
                        </th>
                        <th data-breakpoints="lg" >
                          Banner
                        </th>
                        <th data-breakpoints="lg" >
                          Featured
                        </th>
                        <th
                          width="10%"
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Options
                        </th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      <tr>
                        <td style={{ display: "none" }}>1</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Women Western &amp; Maternity Wear
                        </td>
                        <td>—</td>
                        <td>1</td>
                        <td>0</td>
                        <td>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={17}
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/17?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/17"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ display: "none" }}>2</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Party Dresses
                        </td>
                        <td style={{ display: "table-cell" }}>—</td>
                        <td style={{ display: "table-cell" }}>1</td>
                        <td style={{ display: "table-cell" }}>1</td>
                        <td style={{ display: "table-cell" }}>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={18}
                              defaultChecked
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/18?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/18"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      {/* <tr>
                        <td style={{ display: "table-cell" }}>3</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Ethnic Wear
                        </td>
                        <td style={{ display: "none" }}>—</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "none" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={19}
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/19?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/19"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ display: "none" }}>4</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Ethnic Bottoms
                        </td>
                        <td style={{ display: "none" }}>—</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "none" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={20}
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/20?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/20"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ display: "none" }}>5</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Footwear
                        </td>
                        <td style={{ display: "none" }}>—</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "none" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={21}
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/21?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/21"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ display: "none" }}>6</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Sports Wear
                        </td>
                        <td style={{ display: "none" }}>—</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "none" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={22}
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/22?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/22"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ display: "none" }}>7</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Winter Wear
                        </td>
                        <td style={{ display: "none" }}>—</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "none" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={23}
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/23?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/23"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ display: "none" }}>8</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Bags &amp; Accessories
                        </td>
                        <td style={{ display: "none" }}>—</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "none" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={24}
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/24?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/24"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ display: "none" }}>9</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Wedding &amp; Events
                        </td>
                        <td style={{ display: "none" }}>—</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "none" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={25}
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/25?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/25"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ display: "none" }}>10</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Tops &amp; Sets
                        </td>
                        <td style={{ display: "none" }}>—</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "none" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={26}
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/26?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/26"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ display: "none" }}>11</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Sports &amp; Outdoor
                        </td>
                        <td style={{ display: "none" }}>—</td>
                        <td style={{ display: "none" }}>0</td>
                        <td style={{ display: "none" }}>0</td>
                        <td style={{ display: "none" }}>
                          <img
                            src="https://shop.activeitzone.com/public/uploads/all/0V78CrUJyi9nmr9SsqhK2AV8Rl0oTC44FUq45X8r.png"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "none" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={4}
                              defaultChecked
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/4?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/4"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ display: "none" }}>12</td>
                        <td
                          className="footable-first-visible"
                          style={{ display: "table-cell" }}
                        >
                          <span className="footable-toggle fooicon fooicon-plus" />
                          Team Sports
                        </td>
                        <td style={{ display: "none" }}>
                          Sports &amp; Outdoor
                        </td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>1</td>
                        <td style={{ display: "none" }}>
                          <img
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            alt="Banner"
                            className="h-50px"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td style={{ display: "none" }}>
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              type="checkbox"
                              onchange="update_featured(this)"
                              defaultValue={49}
                            />
                            <span />
                          </label>
                        </td>
                        <td
                          className="text-right footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <a
                            className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                            href="https://shop.activeitzone.com/admin/categories/edit/49?lang=en"
                            title="Edit"
                          >
                            <i className="las la-edit" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                            data-href="https://shop.activeitzone.com/admin/categories/destroy/49"
                            title="Delete"
                          >
                            <i className="las la-trash" />
                          </a>
                        </td>
                      </tr> */}
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
                            href="https://shop.activeitzone.com/admin/categories?page=2"
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/categories?page=3"
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/categories?page=4"
                          >
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/categories?page=5"
                          >
                            5
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/categories?page=6"
                          >
                            6
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/categories?page=7"
                          >
                            7
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/categories?page=2"
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

export default Category
