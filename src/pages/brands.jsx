import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import placeholder from "../assets/images/placeholder.jpg"
import useGetAllBrand from '../hooks/brand/getallbrand';
import usePostBrand from '../hooks/brand/postbrand'
import { Link } from 'react-router-dom';
import _route from '../constants/routes';

const Brands = () => {
    const [menu, setMenu] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const [delteModal, setDeleteModal] = useState(false)
    const { getAllBrand, loading, data } = useGetAllBrand()
    const { postBrand, loading: postLoading, data: postData } = usePostBrand()
    const [brandValue, setBrandValue] = useState({
      brand: ''
    })
  
    useEffect(()=>{
      menu ? 
      document.body.className = 'side-menu-closed'
      :
      document.body.className = 'side-menu-open';
    }, [menu])

    useEffect(()=>{
      getAllBrand()
    }, [])

    const submitBrand = (e) =>{
      e.preventDefault()
      postBrand(brandValue)
    }

    const closeModal = (e) =>{
      setDeleteId(null)
      setDeleteModal(false)
    }

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
                  <h1 className="h3">All brands</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="card">
                    <div className="card-header row gutters-5">
                      <div className="col text-center text-md-left">
                        <h5 className="mb-md-0 h6">Brands</h5>
                      </div>
                      <div className="col-md-4">
                        <form className id="sort_brands" action method="GET">
                          <div className="input-group input-group-sm">
                            <input
                              type="text"
                              className="form-control"
                              id="search"
                              name="search"
                              placeholder="Type name & Enter"
                            />
                          </div>
                        </form>
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
                              #
                            </th>
                            <th style={{ display: "table-cell" }}>Name</th>
                            {/* <th
                              data-breakpoints="lg"
                              style={{ display: "table-cell" }}
                            >
                              Logo
                            </th> */}
                            <th
                              className="text-right footable-last-visible"
                              style={{ display: "table-cell" }}
                            >
                              Options
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {loading ? (
                            <tr className="w-full h-full flex justify-center items-center">
                              <FontAwesomeIcon
                                icon={faSpinner}
                                size="lg"
                                spin
                              />
                            </tr>
                          ) : data != null ? (
                            data.map((brand, index) => {
                              return (
                                <tr key={index}>
                                  <td
                                    className="footable-first-visible"
                                    style={{ display: "table-cell" }}
                                  >
                                    1
                                  </td>
                                  <td style={{ display: "table-cell" }}>
                                    {brand.brand}
                                  </td>
                                  {/* <td style={{ display: "table-cell" }}>
                                    <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                                      <img
                                        src="https://shop.activeitzone.com/public/uploads/all/4qlx7dCiqfcDZgXdLp6kQPbU7ru6iiPmmytG6j4r.png"
                                        alt="Brand"
                                        className="img-fluid"
                                        onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                      />
                                    </div>
                                  </td> */}
                                  <td
                                    className="text-right footable-last-visible"
                                    style={{ display: "table-cell" }}
                                  >
                                    <Link
                                      className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                      to={`${_route._brand}/${brand._id}`}
                                      title="Edit"
                                    >
                                      <i className="las la-edit" />
                                    </Link>
                                    <div
                                      onClick={()=> {setDeleteModal(true); setDeleteId(brand._id)}}
                                      className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                                    >
                                      <i className="las la-trash" />
                                    </div>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <p>No Available Brand</p>
                          )}
                        </tbody>
                      </table>
                      {/* Pagination Section */}
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
                            <li
                              className="page-item active"
                              aria-current="page"
                            >
                              <span className="page-link">1</span>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="https://shop.activeitzone.com/admin/brands?page=2"
                              >
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="https://shop.activeitzone.com/admin/brands?page=3"
                              >
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="https://shop.activeitzone.com/admin/brands?page=4"
                              >
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="https://shop.activeitzone.com/admin/brands?page=2"
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
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0 h6">Add New Brand</h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={submitBrand}>
                        <div className="form-group mb-3">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            placeholder="Name"
                            value={brandValue.brand}
                            onChange={(e) =>
                              setBrandValue((prev) => ({
                                ...prev,
                                brand: e.target.value,
                              }))
                            }
                            className="form-control"
                            required
                          />
                        </div>
                        {/* <div className="form-group mb-3">
                          <label htmlFor="name">
                            Logo
                            <small>(120x80)</small>
                          </label>
                          <div
                            className="input-group"
                            data-toggle="aizuploader"
                            data-type="image"
                          >
                            <div className="input-group-prepend">
                              <div className="input-group-text bg-soft-secondary font-weight-medium">
                                Browse
                              </div>
                            </div>
                            <div className="form-control file-amount">
                              Choose file
                            </div>
                            <input
                              type="hidden"
                              name="logo"
                              className="selected-files"
                            />
                          </div>
                          <div className="file-preview box sm"></div>
                        </div> */}
                        <div className="form-group mb-3 text-right">
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </form>
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
      
        <div
          id="delete-modal"
          onClick={(e) => closeModal(e)}
          className={`modal fade ${delteModal && "show"}`}
          style={{ zIndex: 1040, background: "rgba(0, 0, 0, 0.3)", display: delteModal ? "block" : "none" }}
        >
          <div onClick={(e) => e.stopPropagation()} className="modal-dialog modal-md modal-dialog-centered modal-dialog-zoom">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title h6">Delete Confirmation</h4>
                <button
                  onClick={(e) => closeModal(e)}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                />
              </div>
              <div className="modal-body text-center">
                <i className="la la-4x la-warning text-primary mb-4" />
                <p className="fs-18 fw-600 mb-1">Are you sure to delete this?</p>
                <div>All data related to this will be deleted.</div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-link mt-2"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a
                  href="#"
                  id="delete-link"
                  className="btn btn-primary mt-2"
                >
                  Yes, Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Brands
