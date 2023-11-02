import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';
import SideBar from '../component/sidebar/sidebar';
import Header from '../component/hearder/header';

const PhysicalProduct = () => {
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
                    <table
                      className="table aiz-table mb-0 footable footable-1 breakpoint-xl"
                      style={{}}
                    >
                      <thead>
                        <tr className="footable-header">
                          <th
                            className="w-40px footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            #
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
                          <th
                            data-breakpoints="md"
                            style={{ display: "table-cell" }}
                          >
                            Approval
                          </th>
                          <th
                            data-breakpoints="md"
                            className="footable-last-visible"
                            style={{ display: "table-cell" }}
                          >
                            Published status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            1
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/nike-2020-2021-barcelona-re-issue-hooded-jacket-myjtq"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/GmU5OTrPAVaQbnq4alSDEyTVlBQFOOj1lkAbE3O2.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Nike Boys' Little Fleece Jogger Pants
                                    Discontinued
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$25.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Men Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/5iyohjnpBLopomjYPmbaCGI76O6VmJqnDoHGln7k.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={306}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            2
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/adidas-originals-mens-trefoil-t-shirt-pkbrd"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/AFIeRXYMxhCpSkv2nzMkZuhqtXjGtW1SUC0Qh0Hk.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Nike 2020-2021 Barcelona Re-Issue Hooded
                                    Jacket
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$85.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Men Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/5iyohjnpBLopomjYPmbaCGI76O6VmJqnDoHGln7k.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={305}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            3
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/adidas-originals-mens-trefoil-t-shirt-8kpzh"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/eSquruZ46Ntk0CdzYn9aOCUGb5tYTov8KpkBJrQx.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Adidas Originals Men's Trefoil T-Shirt
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$20.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Men Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/kF2gVfgiUd1LY0cDs7ZkRw6vEwFqpCReSyioiSop.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={304}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            4
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/nike-little-boys-dri-fit-block-stacked-graphic-tee-s7z1z"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/J7iYZ0WOaR8gcYsf2fxL1RCLyuFkZZHJJ4d5qQER.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Adidas Originals Men's Trefoil T-Shirt
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$12.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Men Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/kF2gVfgiUd1LY0cDs7ZkRw6vEwFqpCReSyioiSop.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={303}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            5
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/womens-crewneck-sweatshirts-long-sleeve-shirts-loose-pullover-tops-shirts-t6eyi"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/nb9S0Vygi47yEFWgz0FexWp5pTJWhLwLEdZx4fLJ.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Nike Little Boys Dri-FIT Block Stacked
                                    Graphic Tee
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$32.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Men Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/5iyohjnpBLopomjYPmbaCGI76O6VmJqnDoHGln7k.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={302}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            6
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/womens-crewneck-sweatshirts-long-sleeve-shirts-loose-pullover-tops-shirts-pohsu"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/Hh9NNe9mx8SBwnVlm7rH6tnGUl2keJ2WeSNjUSCa.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Womens Crewneck Sweatshirts Long Sleeve
                                    Shirts Loose Pullover Tops Shirts
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$32.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Women Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/jJt6OUUCu3RZfarr1TH8x6Ag9Cjss7sTNYPD5SRV.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={301}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            7
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/wild-meadow-womens-bib-front-u-back-knit-dress-z3hpn"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/OTfQMY4iHlQCoSSTKBwzsEIRToLSuRdiaBc7cSxs.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Wild Meadow Women's Bib Front U Back Knit
                                    Dress
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$25.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Women Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/al5TKVSD1W9yw8tyi1E7gRhzkSTqDQ1SWOsLSNZY.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={300}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            8
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/ramy-brook-womens-kaisley-dress-xqjrh"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/sxuBuw0k0MxlAikB1zfhEWXFAOhuqw6s4d0eKvCG.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Dress the Population Women's Corey Cap
                                    Sleeve Plunge Neck FIT
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$25.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Women Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/al5TKVSD1W9yw8tyi1E7gRhzkSTqDQ1SWOsLSNZY.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={299}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            9
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/wild-meadow-womens-bib-front-u-back-knit-dress-l3e8a"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/lezKCrJljHQx2t8xiuqiu5RnYUBSLIyjGb96W2Fc.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Wild Meadow Women's Bib Front U Back Knit
                                    Dress
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$25.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Women Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/al5TKVSD1W9yw8tyi1E7gRhzkSTqDQ1SWOsLSNZY.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={298}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            10
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/ramy-brook-womens-kaisley-dress-kbuef"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/FCD46auPMu470Q5gwNkq286FREVmTGUv3gsS88EH.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Ramy Brook Women's Kaisley Dress
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$25.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Women Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/al5TKVSD1W9yw8tyi1E7gRhzkSTqDQ1SWOsLSNZY.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={297}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            11
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/wild-meadow-womens-bib-front-u-back-knit-dress-licam"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/dlIFjMueq79t39jMEJEqxqZKU1ohHkN8llg36KXY.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Ramy Brook Women's Kaisley Dress
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$25.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Women Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/al5TKVSD1W9yw8tyi1E7gRhzkSTqDQ1SWOsLSNZY.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={296}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            12
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/wild-meadow-womens-bib-front-u-back-knit-dress-zj8lc"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/lezKCrJljHQx2t8xiuqiu5RnYUBSLIyjGb96W2Fc.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Wild Meadow Women's Bib Front U Back Knit
                                    Dress
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$25.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Women Clothing &amp; Fashion
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/al5TKVSD1W9yw8tyi1E7gRhzkSTqDQ1SWOsLSNZY.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={295}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            13
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/dr-browns-fresh-first-silicone-feeder-mint-grey-2-count-g28m5"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/r6YCxlueUx4twUd7QiO8rywa4O128joSHxDqQoWe.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Baby Boys Girls Lace Up Leather Sneakers
                                    Soft Rubber Sole Infant Moccasins Newborn
                                    Oxford Loafers Anti-Slip Toddler Wedding
                                    Uniform Dress Shoes
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$9.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Baby &amp; Kids
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/O6jTnEcxt5TETMlWcZp6naMciGda3QHtmyq7qqwP.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={294}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            14
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/hudson-baby-baby-girls-quilted-cardigan-and-dress-vadj6"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/fVeZRd1UOrvw4XiSHf9UUW7hTx0xbGo9XmAgAfXA.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Dr. Brown's Fresh First Silicone Feeder,
                                    Mint &amp; Grey, 2 Count
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$15.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Baby &amp; Kids
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/O6jTnEcxt5TETMlWcZp6naMciGda3QHtmyq7qqwP.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={293}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="footable-first-visible"
                            style={{ display: "table-cell" }}
                          >
                            15
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <a
                              href="https://shop.activeitzone.com/product/womens-sundress-v-neck-summer-casual-wrap-floralsolid-dresses-spaghetti-strap-swing-dress-tjuod"
                              target="_blank"
                              className="text-reset d-block"
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://shop.activeitzone.com/public/uploads/all/sAGV9GUn6e7ISuQNGkhnkenK4cmK3syPdh3Wf4Ra.webp"
                                  alt="Image"
                                  className="size-60px size-xxl-80px mr-2"
                                  onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                                />
                                <span className="flex-grow-1 minw-0">
                                  <div className=" text-truncate-2 fs-12">
                                    Hudson Baby Baby Girls' Quilted Cardigan and
                                    Dress
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
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                  <i className="las la-star" />
                                </span>
                              </div>
                              <div>
                                <span>Toal Sold</span>:{" "}
                                <span className="fw-600">0</span>
                              </div>
                              <div>
                                <span>Price</span>:
                                <span className="fw-600">$50.00</span>
                              </div>
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                              Baby &amp; Kids
                            </span>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <div className="h-50px w-100px d-flex align-items-center justify-content-center">
                              <img
                                src="https://shop.activeitzone.com/public/uploads/all/O6jTnEcxt5TETMlWcZp6naMciGda3QHtmyq7qqwP.png"
                                alt="Brand"
                                className="mw-100 mh-100"
                                onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                              />
                            </div>
                          </td>
                          <td style={{ display: "table-cell" }}>
                            <label className="aiz-switch aiz-switch-success mb-0">
                              <input
                                onchange="update_approved(this)"
                                defaultValue={292}
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
                            <span className="badge badge-inline badge-success">
                              Published
                            </span>
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
                              href="https://shop.activeitzone.com/admin/seller-products/physical?page=2"
                            >
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/seller-products/physical?page=3"
                            >
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/seller-products/physical?page=4"
                            >
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/seller-products/physical?page=5"
                            >
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/seller-products/physical?page=6"
                            >
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/seller-products/physical?page=7"
                            >
                              7
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/seller-products/physical?page=8"
                            >
                              8
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="https://shop.activeitzone.com/admin/seller-products/physical?page=2"
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

export default PhysicalProduct
