import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';

const PosManager = () => {
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
              <section className>
                <form
                  className
                  action
                  method="POST"
                  encType="multipart/form-data"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="u9KyxmTVltuCixNS12r2Tl1ddNjPykBZK4rFuTNs"
                  />{" "}
                  <div className="row gutters-5">
                    <div className="col-md pr-3">
                      <div className="row gutters-5 mb-3">
                        <div className="col-md-6 mb-2 mb-md-0">
                          <div className="form-group mb-0">
                            <input
                              className="form-control form-control-lg"
                              type="text"
                              name="keyword"
                              placeholder="Search by Product Name"
                              onkeyup="filterProducts()"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="dropdown bootstrap-select form-control form-control-lg aiz-">
                            <select
                              name="poscategory"
                              className="form-control form-control-lg aiz-selectpicker"
                              data-live-search="true"
                              onchange="filterProducts()"
                              tabIndex={-98}
                            >
                              <option value>All categories</option>
                              <option value="category-1">
                                Women Clothing &amp; Fashion
                              </option>
                              <option value="category-2">
                                Men Clothing &amp; Fashion
                              </option>
                              <option value="category-3">
                                Baby &amp; Kids
                              </option>
                              <option value="category-4">
                                Sports &amp; Outdoor
                              </option>
                              <option value="category-13">
                                Automobile &amp; Motorcycle
                              </option>
                              <option value="category-14">
                                Computer &amp; Accessories
                              </option>
                              <option value="category-15">
                                Cellphones &amp; Tabs
                              </option>
                              <option value="category-16">
                                Beauty, Health &amp; Hair
                              </option>
                              <option value="category-17">
                                Women Western &amp; Maternity Wear
                              </option>
                              <option value="category-18">Party Dresses</option>
                              <option value="category-19">Ethnic Wear</option>
                              <option value="category-20">
                                Ethnic Bottoms
                              </option>
                              <option value="category-21">Footwear</option>
                              <option value="category-22">Sports Wear</option>
                              <option value="category-23">Winter Wear</option>
                              <option value="category-24">
                                Bags &amp; Accessories
                              </option>
                              <option value="category-25">
                                Wedding &amp; Events
                              </option>
                              <option value="category-26">
                                Tops &amp; Sets
                              </option>
                              <option value="category-27">
                                Suits, Blazers &amp; Waistcoats
                              </option>
                              <option value="category-28">
                                T-Shirts &amp; Tank Tops
                              </option>
                              <option value="category-29">Mens Jeans</option>
                              <option value="category-30">
                                Sleepwear &amp; Robes
                              </option>
                              <option value="category-31">
                                Ties, Socks &amp; Caps
                              </option>
                              <option value="category-32">
                                Men's Grooming
                              </option>
                              <option value="category-33">
                                Fashion Hoodies &amp; Sweatshirts
                              </option>
                              <option value="category-34">Toys</option>
                              <option value="category-35">
                                School Supplies
                              </option>
                              <option value="category-36">
                                Gear &amp; Activity
                              </option>
                              <option value="category-37">
                                Diapers &amp; Wipes
                              </option>
                              <option value="category-38">
                                Baby Bathing Accessories
                              </option>
                              <option value="category-39">
                                Jumpers, Cardigans
                              </option>
                              <option value="category-40">
                                Nightwear, Underwear
                              </option>
                              <option value="category-41">
                                Nightwear &amp; Underwear
                              </option>
                              <option value="category-42">
                                Derby shoes &amp; Loafers
                              </option>
                              <option value="category-43">
                                Athletic Apparl
                              </option>
                              <option value="category-44">
                                Boating &amp; Fishing
                              </option>
                              <option value="category-45">
                                Game room &amp; Backyard games
                              </option>
                              <option value="category-46">Winter Sports</option>
                              <option value="category-47">
                                Exercise &amp; Fitness
                              </option>
                              <option value="category-48">
                                Skates, Skatesboards &amp; Scooters
                              </option>
                              <option value="category-49">Team Sports</option>
                              <option value="category-50">Smartphones</option>
                              <option value="category-51">Basic Phones</option>
                              <option value="category-52">Accessories</option>
                              <option value="category-53">Headsets</option>
                              <option value="category-54">
                                Cases &amp; Covers
                              </option>
                              <option value="category-55">Power Banks</option>
                              <option value="category-56">Gaming Phones</option>
                              <option value="category-57">Screen guards</option>
                              <option value="category-58">
                                Mounts &amp; Stands
                              </option>
                              <option value="category-59">Selfie Sticks</option>
                              <option value="category-60">Skin Stickers</option>
                              <option value="category-61">Smartwatch</option>
                              <option value="category-62">
                                Beauty &amp; Grooming
                              </option>
                              <option value="category-63">Luxury Beauty</option>
                              <option value="category-64">Make up</option>
                              <option value="category-65">
                                Health &amp; Personal care
                              </option>
                              <option value="category-66">
                                Personal care appliance
                              </option>
                              <option value="category-67">
                                Diet &amp; Nutrition
                              </option>
                              <option value="category-68">
                                Weight Management
                              </option>
                              <option value="category-69">
                                Bath &amp; Shower
                              </option>
                              <option value="category-70">Skin Care</option>
                              <option value="category-71">
                                Motorbike Accessories &amp; Parts
                              </option>
                              <option value="category-72">
                                Car accessories
                              </option>
                              <option value="category-73">
                                Engines &amp; Engine Parts
                              </option>
                              <option value="category-74">
                                Frames &amp; Fittings
                              </option>
                              <option value="category-75">Helmets</option>
                              <option value="category-76">Sports Bike</option>
                              <option value="category-77">
                                Tyres &amp; Rims
                              </option>
                              <option value="category-78">
                                Protective Gear &amp; Clothing
                              </option>
                              <option value="category-79">Horns</option>
                              <option value="category-80">Desktops</option>
                              <option value="category-81">Laptops</option>
                              <option value="category-82">
                                External Devices &amp; Data Storage
                              </option>
                              <option value="category-83">
                                Printers, Inks &amp; Accessories
                              </option>
                              <option value="category-84">Monitors</option>
                              <option value="category-85">
                                Networking Devices
                              </option>
                              <option value="category-86">
                                Gaming Laptops
                              </option>
                              <option value="category-87">
                                Mouse &amp; Keyboard
                              </option>
                              <option value="category-88">Pendrives</option>
                              <option value="category-89">Formal Shirt</option>
                            </select>
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-light"
                              data-toggle="dropdown"
                            //   role="combobox"
                              aria-owns="bs-select-1"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                              title="All categories"
                            >
                              <div className="filter-option">
                                <div className="filter-option-inner">
                                  <div className="filter-option-inner-inner">
                                    All categories
                                  </div>
                                </div>{" "}
                              </div>
                            </button>
                            <div className="dropdown-menu ">
                              <div className="bs-searchbox">
                                <input
                                  type="search"
                                  className="form-control"
                                  autoComplete="off"
                                  role="combobox"
                                  aria-label="Search"
                                  aria-controls="bs-select-1"
                                  aria-autocomplete="list"
                                />
                              </div>
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
                        <div className="col-md-3 col-6">
                          <div className="dropdown bootstrap-select form-control form-control-lg aiz-">
                            <select
                              name="brand"
                              className="form-control form-control-lg aiz-selectpicker"
                              data-live-search="true"
                              onchange="filterProducts()"
                              tabIndex={-98}
                            >
                              <option value>All brands</option>
                              <option value={1}>HERMES</option>
                              <option value={2}>Audi</option>
                              <option value={3}>LOUIS VUITTON</option>
                              <option value={6}>Adidas</option>
                              <option value={7}>Nike</option>
                              <option value={8}>Giorgio Armani</option>
                              <option value={9}>H&amp;M</option>
                              <option value={10}>Versace</option>
                              <option value={11}>Balenciaga</option>
                              <option value={12}>HP</option>
                              <option value={13}>Dell</option>
                              <option value={14}>Asus</option>
                              <option value={15}>Lenevo</option>
                              <option value={16}>Huwawei</option>
                              <option value={17}>One Plus</option>
                              <option value={18}>Samsung</option>
                              <option value={19}>Apple</option>
                              <option value={20}>Kicks N' Crawls</option>
                              <option value={21}>Baby Palace</option>
                              <option value={22}>Canon</option>
                              <option value={23}>Nikon</option>
                              <option value={24}>Huggies</option>
                              <option value={25}>Pampers</option>
                              <option value={26}>BMW</option>
                              <option value={27}>Marcedes</option>
                              <option value={28}>Honda</option>
                              <option value={29}>Yamaha</option>
                              <option value={30}>CHANEL</option>
                              <option value={31}>Dior</option>
                              <option value={32}>L'Oreal</option>
                              <option value={33}>Lancome</option>
                              <option value={34}>Maybelline New York</option>
                              <option value={35}>Guerlain</option>
                              <option value={36}>Puma</option>
                              <option value={37}>Jhonson</option>
                              <option value={38}>Dove</option>
                              <option value={39}>Vasline</option>
                              <option value={40}>Nokia</option>
                              <option value={41}>Beats</option>
                              <option value={42}>Microsoft</option>
                              <option value={43}>Ray-Ban</option>
                              <option value={44}>Bulova</option>
                              <option value={45}>Gillette</option>
                              <option value={46}>Philips</option>
                              <option value={47}>Nestle</option>
                              <option value={48}>Olay</option>
                              <option value={49}>Mobil</option>
                              <option value={50}>DEWALT</option>
                              <option value={51}>Tommy Hilfiger</option>
                              <option value={52}>Street Style Stalk</option>
                            </select>
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-light"
                              data-toggle="dropdown"
                              role="combobox"
                              aria-owns="bs-select-2"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                              title="All brands"
                            >
                              <div className="filter-option">
                                <div className="filter-option-inner">
                                  <div className="filter-option-inner-inner">
                                    All brands
                                  </div>
                                </div>{" "}
                              </div>
                            </button>
                            <div className="dropdown-menu ">
                              <div className="bs-searchbox">
                                <input
                                  type="search"
                                  className="form-control"
                                  autoComplete="off"
                                  role="combobox"
                                  aria-label="Search"
                                  aria-controls="bs-select-2"
                                  aria-autocomplete="list"
                                />
                              </div>
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
                      </div>
                      <div className="aiz-pos-product-list c-scrollbar-light">
                        <div
                          className="d-flex flex-wrap justify-content-start"
                          id="product-list"
                        >
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Small
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/zhD91QC7yQeUpuLDLiTug9bBporo0z9tyZv1hiHF.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Fashions Women's Sleeveless Chiffon Tiered
                                  Cocktail Dress Petite and Missy
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$56.10</del>
                                  <span>$50.49</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={97}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Medium
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/zhD91QC7yQeUpuLDLiTug9bBporo0z9tyZv1hiHF.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Fashions Women's Sleeveless Chiffon Tiered
                                  Cocktail Dress Petite and Missy
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$61.20</del>
                                  <span>$55.08</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={98}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Large
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/zhD91QC7yQeUpuLDLiTug9bBporo0z9tyZv1hiHF.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Fashions Women's Sleeveless Chiffon Tiered
                                  Cocktail Dress Petite and Missy
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$66.30</del>
                                  <span>$59.67</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={99}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Small
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/ix013yiczU4DZ4314gNCZTAljB2smAIRJV3ExsBC.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Night After Night Tonal Stripe Short Sleeve
                                  Dress
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$142.80</del>
                                  <span>$128.52</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={100}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Medium
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/ix013yiczU4DZ4314gNCZTAljB2smAIRJV3ExsBC.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Night After Night Tonal Stripe Short Sleeve
                                  Dress
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$147.90</del>
                                  <span>$133.11</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={101}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Large
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/ix013yiczU4DZ4314gNCZTAljB2smAIRJV3ExsBC.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Night After Night Tonal Stripe Short Sleeve
                                  Dress
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$153.00</del>
                                  <span>$137.70</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={102}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Black
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/nZhwGu2ytRt7e0Hs6sCH02OUtz1nn8MZm5xUafM5.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Women Casual Dresses Tea Dress Flared Sleeve
                                  Aline Swing Cocktail Party Dress
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$104.94</del>
                                  <span>$94.45</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={103}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Silver
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/nZhwGu2ytRt7e0Hs6sCH02OUtz1nn8MZm5xUafM5.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Women Casual Dresses Tea Dress Flared Sleeve
                                  Aline Swing Cocktail Party Dress
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$127.20</del>
                                  <span>$114.48</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={104}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Blanchedalmond
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/nZhwGu2ytRt7e0Hs6sCH02OUtz1nn8MZm5xUafM5.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Women Casual Dresses Tea Dress Flared Sleeve
                                  Aline Swing Cocktail Party Dress
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$127.20</del>
                                  <span>$114.48</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={105}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Red
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/2WwMTy7pGgdDCozZHJaWzj2fZwo13dsjobRgi5T4.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Women's Sleeveless Chiffon Tiered Cocktail
                                  Dress Petite and Missy
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$100.98</del>
                                  <span>$90.88</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={106}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Blueviolet
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/2WwMTy7pGgdDCozZHJaWzj2fZwo13dsjobRgi5T4.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Women's Sleeveless Chiffon Tiered Cocktail
                                  Dress Petite and Missy
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$202.98</del>
                                  <span>$182.68</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={107}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  darkgreen
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/2WwMTy7pGgdDCozZHJaWzj2fZwo13dsjobRgi5T4.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Women's Sleeveless Chiffon Tiered Cocktail
                                  Dress Petite and Missy
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$202.98</del>
                                  <span>$182.68</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={108}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Small
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/3hDl6Jjov9a5llMGyBbObEZsEBAqudYgdSfUDkxm.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  MODELTY Pink Floral Maxi dress
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$81.60</del>
                                  <span>$77.52</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={109}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Medium
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/3hDl6Jjov9a5llMGyBbObEZsEBAqudYgdSfUDkxm.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  MODELTY Pink Floral Maxi dress
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$83.64</del>
                                  <span>$79.46</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={110}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  Large
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/3hDl6Jjov9a5llMGyBbObEZsEBAqudYgdSfUDkxm.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  MODELTY Pink Floral Maxi dress
                                </div>
                                <div className>
                                  <del className="mr-2 ml-0">$86.70</del>
                                  <span>$82.37</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={111}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="w-140px w-xl-180px w-xxl-210px mr-2">
                            <div className="card bg-white c-pointer product-card hov-container">
                              <div className="position-relative">
                                <span className="absolute-top-left mt-1 ml-1 mr-0">
                                  <span className="badge badge-inline badge-success fs-13">
                                    In Stock
                                  </span>
                                </span>
                                <span className="badge badge-inline badge-warning absolute-bottom-left mb-1 ml-1 mr-0 fs-13 text-truncate">
                                  32 gb
                                </span>
                                <img alt=''
                                  src="https://shop.activeitzone.com/public/uploads/all/Ox2fJZjezhY2uqkI5XArrVqTiRfl4flpxlOnSKe1.png"
                                  className="card-img-top img-fit h-120px h-xl-180px h-xxl-210px mw-100 mx-auto"
                                />
                              </div>
                              <div className="card-body p-2 p-xl-3">
                                <div className="text-truncate fw-600 fs-14 mb-2">
                                  Apple iPhone 13 Pro Max 17 cm (6.7") 128 GB
                                  Dual SIM 5G Blue iOS 14 iPhone
                                </div>
                                <div className>
                                  <span>$406.98</span>
                                </div>
                              </div>
                              <div
                                className="add-plus absolute-full rounded overflow-hidden hov-box "
                                data-variation_id="null"
                                data-product_variation_combination_id={112}
                              >
                                <div className="absolute-full bg-dark opacity-50"></div>
                                <i className="las la-plus absolute-center la-6x text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="load-more" className="text-center">
                          <div
                            className="fs-14 d-inline-block fw-600 btn btn-soft-primary c-pointer"
                            onclick="loadMoreProduct()"
                          >
                            Load More.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-auto w-md-350px w-lg-400px w-xl-500px">
                      <div className="card mb-3 bg-pos-gray">
                        <div className="card-body">
                          <div className="d-flex border-bottom pb-3">
                            <div className="flex-grow-1">
                              <div className="dropdown bootstrap-select form-control aiz- pos-customer">
                                <select
                                  name="user_id"
                                  className="form-control aiz-selectpicker pos-customer"
                                  data-live-search="true"
                                  onchange="getShippingAddress()"
                                  tabIndex={-98}
                                >
                                  <option value>Walk In Customer</option>
                                  <option
                                    value={58}
                                    data-contact="customer13@example.com"
                                  >
                                    Eric M Spradlin
                                  </option>
                                  <option
                                    value={57}
                                    data-contact="customer12@example.com"
                                  >
                                    Concepcion A Newsome
                                  </option>
                                  <option
                                    value={56}
                                    data-contact="customer11@example.com"
                                  >
                                    Sharon P Bonnett
                                  </option>
                                  <option
                                    value={55}
                                    data-contact="customer10@example.com"
                                  >
                                    Carey W Nicholas
                                  </option>
                                  <option
                                    value={54}
                                    data-contact="customer8@example.com"
                                  >
                                    William J Allen
                                  </option>
                                  <option
                                    value={53}
                                    data-contact="customer7@example.com"
                                  >
                                    Linda R Helton
                                  </option>
                                  <option
                                    value={52}
                                    data-contact="customer6@example.com"
                                  >
                                    Ann C Mansfield
                                  </option>
                                  <option
                                    value={50}
                                    data-contact="customer4@example.com"
                                  >
                                    Marshall D Smith
                                  </option>
                                  <option
                                    value={49}
                                    data-contact="customer3@example.com"
                                  >
                                    Kevin M Cook
                                  </option>
                                  <option
                                    value={47}
                                    data-contact="customer5@example.com"
                                  >
                                    Emily Roach
                                  </option>
                                  <option
                                    value={42}
                                    data-contact="lusy@mailinator.com"
                                  >
                                    Commodo incidunt nu
                                  </option>
                                  <option
                                    value={39}
                                    data-contact="customer2@example.com"
                                  >
                                    Mary G Benson
                                  </option>
                                  <option
                                    value={38}
                                    data-contact="hridoymahmud71@gmail.com"
                                  >
                                    Mahmudur Rahman
                                  </option>
                                  <option
                                    value={36}
                                    data-contact="pazuwa@mailinator.com"
                                  >
                                    Enim voluptates dolo
                                  </option>
                                  <option
                                    value={35}
                                    data-contact="qucekocan@mailinator.com"
                                  >
                                    Officiis qui consect
                                  </option>
                                  <option value={34} data-contact>
                                    Aute et modi mollit
                                  </option>
                                  <option value={33} data-contact>
                                    Mollitia qui at exer
                                  </option>
                                  <option
                                    value={32}
                                    data-contact="creativedemo4@gmail.com"
                                  >
                                    Explicabo Dolores q
                                  </option>
                                  <option
                                    value={31}
                                    data-contact="creatsivedemo4@gmail.com"
                                  >
                                    Sed qui provident a
                                  </option>
                                  <option
                                    value={30}
                                    data-contact="hihaq@mailinator.com"
                                  >
                                    Iure quas fuga Et d
                                  </option>
                                  <option
                                    value={29}
                                    data-contact="kysu@mailinator.com"
                                  >
                                    Eiusmod molestiae ma
                                  </option>
                                  <option
                                    value={28}
                                    data-contact="ponodyw@mailinator.com"
                                  >
                                    Quisquam earum conse
                                  </option>
                                  <option
                                    value={27}
                                    data-contact="vamib@mailinator.com"
                                  >
                                    Quasi ea amet asper
                                  </option>
                                  <option
                                    value={26}
                                    data-contact="creatidsvedemo4@gmail.com"
                                  >
                                    Mollitia exercitatio
                                  </option>
                                  <option
                                    value={24}
                                    data-contact="wakymiw@mailinator.com"
                                  >
                                    Dignissimos mollitia
                                  </option>
                                  <option
                                    value={23}
                                    data-contact="namehosuci@mailinator.com"
                                  >
                                    Numquam doloremque e
                                  </option>
                                  <option
                                    value={22}
                                    data-contact="lajuryce@mailinator.com"
                                  >
                                    Voluptatem pariatur
                                  </option>
                                  <option
                                    value={21}
                                    data-contact="xyxoge@mailinator.com"
                                  >
                                    Debitis illo non nis
                                  </option>
                                  <option
                                    value={20}
                                    data-contact="dadefyfak@mailinator.com"
                                  >
                                    Excepturi voluptate
                                  </option>
                                  <option
                                    value={19}
                                    data-contact="tunyseg@mailinator.com"
                                  >
                                    Vitae autem ea vel q
                                  </option>
                                  <option
                                    value={18}
                                    data-contact="rekijoc@mailinator.com"
                                  >
                                    Voluptas doloremque
                                  </option>
                                  <option
                                    value={17}
                                    data-contact="pirakoje@mailinator.com"
                                  >
                                    Ut id veritatis volu
                                  </option>
                                  <option
                                    value={16}
                                    data-contact="qiwageniki@mailinator.com"
                                  >
                                    Omnis eligendi adipi
                                  </option>
                                  <option value={15} data-contact>
                                    Veniam commodi iure
                                  </option>
                                  <option value={14} data-contact>
                                    Vel voluptatem reru
                                  </option>
                                  <option value={13} data-contact>
                                    Quis maiores aute qu
                                  </option>
                                  <option value={12} data-contact>
                                    Velit modi culpa iu
                                  </option>
                                  <option value={11} data-contact>
                                    Illum ab quia digni
                                  </option>
                                  <option value={10} data-contact>
                                    Qui ut voluptate com
                                  </option>
                                  <option
                                    value={8}
                                    data-contact="customer@example.com"
                                  >
                                    Christina Ashens
                                  </option>
                                </select>
                                <button
                                  type="button"
                                  className="btn dropdown-toggle btn-light"
                                  data-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-3"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Walk In Customer"
                                >
                                  <div className="filter-option">
                                    <div className="filter-option-inner">
                                      <div className="filter-option-inner-inner">
                                        Walk In Customer
                                      </div>
                                    </div>{" "}
                                  </div>
                                </button>
                                <div className="dropdown-menu ">
                                  <div className="bs-searchbox">
                                    <input
                                      type="search"
                                      className="form-control"
                                      autoComplete="off"
                                      role="combobox"
                                      aria-label="Search"
                                      aria-controls="bs-select-3"
                                      aria-autocomplete="list"
                                    />
                                  </div>
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
                            <button
                              type="button"
                              className="btn btn-icon btn-soft-dark ml-3 mr-0"
                              data-target="#new-customer"
                              data-toggle="modal"
                            >
                              <i className="las la-truck" />
                            </button>
                          </div>
                          <div className id="cart-details">
                            <div className="aiz-pos-cart-list mb-4 mt-3 c-scrollbar-light">
                              <div className="text-center">
                                <i className="las la-frown la-3x opacity-50" />
                                <p>No Product Added</p>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-between fw-600 mb-2 opacity-70">
                                <span>Sub Total</span>
                                <span>$0.00</span>
                              </div>
                              <div className="d-flex justify-content-between fw-600 mb-2 opacity-70">
                                <span>Tax</span>
                                <span>$0.00</span>
                              </div>
                              <div className="d-flex justify-content-between fw-600 mb-2 opacity-70">
                                <span>Shipping</span>
                                <span>$0.00</span>
                              </div>
                              <div className="d-flex justify-content-between fw-600 mb-2 opacity-70">
                                <span>Discount</span>
                                <span>$0.00</span>
                              </div>
                              <div className="d-flex justify-content-between fw-600 fs-18 border-top py-3">
                                <span>Total</span>
                                <span>$0.00</span>
                              </div>
                            </div>
                          </div>
                          <div className="pos-footer mar-btm">
                            <div className="justify-content-between">
                              <div className="d-flex justify-content-between mb-3">
                                <div className="dropdown mr-3 ml-0 dropup">
                                  <button
                                    className="btn btn-outline-dark btn-styled dropdown-toggle"
                                    type="button"
                                    data-toggle="dropdown"
                                  >
                                    Shipping
                                  </button>
                                  <div className="dropdown-menu p-3 dropdown-menu-lg">
                                    <div className="input-group">
                                      <input
                                        type="number"
                                        min={0}
                                        placeholder="Amount"
                                        name="shipping"
                                        className="form-control"
                                        defaultValue={0}
                                        required
                                        onchange="setShipping()"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          Flat
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="dropdown dropup">
                                  <button
                                    className="btn btn-outline-dark btn-styled dropdown-toggle"
                                    type="button"
                                    data-toggle="dropdown"
                                  >
                                    Discount
                                  </button>
                                  <div className="dropdown-menu p-3 dropdown-menu-lg discount-popover">
                                    <div className="input-group">
                                      <input
                                        type="number"
                                        min={0}
                                        placeholder="Amount"
                                        name="discount"
                                        className="form-control"
                                        defaultValue={0}
                                        required
                                        onchange="setDiscount()"
                                      />
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          Flat
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="my-2 my-md-0">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-block h-60px fs-20 font-weight-bold"
                                  onclick="orderConfirmation()"
                                >
                                  Place Order
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
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

export default PosManager
