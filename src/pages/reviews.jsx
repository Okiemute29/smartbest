import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';
const Reviews = () => {
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
                  <h1 className="h3">Product Reviews</h1>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-block d-md-flex">
                  <h5 className="mb-0 h6">Product Reviews</h5>
                  <div className="ml-auto mr-0">
                    <form
                      className
                      id="sort_by_rating"
                      action="https://shop.activeitzone.com/admin/reviews"
                      method="GET"
                    >
                      <div className="box-inline pad-rgt pull-left">
                        <div className="select" style={{ minWidth: 300 }}>
                          <div className="dropdown bootstrap-select form-control aiz-">
                            <select
                              className="form-control aiz-selectpicker"
                              name="rating"
                              id="rating"
                              onchange="filter_by_rating()"
                              tabIndex={-98}
                            >
                              <option value>Filter by Rating</option>
                              <option value="rating,desc">
                                Rating (High &gt; Low)
                              </option>
                              <option value="rating,asc">
                                Rating (Low &gt; High)
                              </option>
                            </select>
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-light"
                              data-toggle="dropdown"
                            //   role="combobox"
                              aria-owns="bs-select-1"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                              data-id="rating"
                              title="Filter by Rating"
                            >
                              <div className="filter-option">
                                <div className="filter-option-inner">
                                  <div className="filter-option-inner-inner">
                                    Filter by Rating
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
                        <th
                          className="col-lg-3"
                          data-breakpoints="lg"
                          style={{ display: "table-cell" }}
                        >
                          Product &amp; rating
                        </th>
                        <th style={{ display: "table-cell" }}>Customer</th>
                        <th
                          className="col-lg-5"
                          data-breakpoints="lg"
                          style={{ display: "table-cell" }}
                        >
                          Comment
                        </th>
                        <th
                          className="col-lg-5"
                          data-breakpoints="lg"
                          style={{ display: "table-cell" }}
                        >
                          Review Image
                        </th>
                        <th
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          Published
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/EfkQ1cPK445zLWUDvYRXbXH7rp6cs9PJaL6FJY22.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Apple iPhone 12 Pro, 128GB, 256GB, 512 GB Deep
                              Purple
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          This is my first iPhone bought by myself i worked for
                          it and ummm I’m not going to lie I mean to purchase
                          the Pro Max BUT I accidentally bought the Pro only so
                          yup there it is But I must say the phone is still
                          amazing and looks so nice like if I wouldve bought it
                          from the apple store it had 100% battery life is 512GB
                          thats so good to have that much space to install how
                          many games or videos Id like and still have a toon of
                          space overall I totally recommend this phone to
                          anybody and it’s a great start before you get to the
                          13 Pro or Pro max because you don’t value stuff if you
                          didn’t have something worse or less valuable before
                          that definitely worth every penny.
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={116}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/GKBWBuqhdBz0r4oLgXpJ5o8dAMz0iAaeG7KRCpDp.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Under Armour Men's HeatGear Compression
                              Long-Sleeve T-Shirt
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={115}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/Rkby0DjU7Pxsafv7EFaB3JgMKT7LKFxahzE4R26m.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Women Stripe Pocket Knee Length Slim Casual
                              Pullover Hoodie Dress
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={114}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/8FhX7Ck06qMKnwrMMLQkGrf8YvVndyDvvEPgkvqu.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Womens V-Neck 3/4 Sleeve A Line Midi Faux Wrap
                              Plus Size Cocktail Party Swing Dress
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star" />
                              <i className="las la-star" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={113}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/M3LHOCHzr1w4puPjdWy6b4eSjzKNPbKTJ3lTIBsU.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Women's Hiking Pants Fleece Lined Snow Ski Pants
                              Water Resistant Windproof Insulated Cargo
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star" />
                              <i className="las la-star" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={112}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/ktPgX5lUwC3UAeCj3Mf6LXhcy0qVawaMyqdbk854.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Women's 2 Pieces Lace Mother of The Bride Dress
                              with Jacket Chiffon Formal Evening Dresses
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={111}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/SYfmNKm48ku1KPcojkPpgvaqxhJq5OEC9cg10kSz.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Mens 2 Piece Suit Notched Lapel Sport Coat Floral
                              One Button Slim Fit Tweed Suit
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={110}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/qC0GI4ABZgM6A2BzxcnsU9WlZ2D5RxaAghvb9tTs.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              NIVEA Essentially Enriched Body Lotion,Dry to Very
                              Dry Skin, 16.9 Fl Oz
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star" />
                              <i className="las la-star" />
                              <i className="las la-star" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={109}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/2x5KNR1UY7vlh4UauEy2jZpVeQCrbNTfNGKrHhsA.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Love Beauty &amp; Planet Body Lotion Delicious
                              Glow 13.5 oz
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star" />
                              <i className="las la-star" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={108}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/Wv0prO30kLgDXeWIeKCqA1XlOAepRu3kx3iYXYOM.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Lâ€Oreal Paris Skincare Revitalift Triple Power
                              Anti-Aging Face Moisturizer with Pro Retinol
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={107}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/gWC3QT4cpEXJb05SogTnwSRrrEsf9eoBK0Ncb686.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Xbox Core Wireless Controller â Pulse Red
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star" />
                              <i className="las la-star" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={106}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/6KxBv7PcigAYnE4bfW11KIRtmScEuA17de2l1tgD.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Lenovo IdeaPad 3 Laptop, 17.3" HD+ (1600 x 900)
                              Display, AMD Ryzen 5 5500U Processor
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">
                            Name: Christina Ashens
                          </span>
                          <span className="d-block">
                            Email: customer@example.com
                          </span>
                          <span className="d-block">Phone: +1603-842-2079</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={105}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/y9HSBnjKTgl4hpJDRq8om55YE53q2jS08dFPffam.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Women One Piece Muslim Hijab Lace Applique Head
                              Wrap Scarf Shawl with Rhinestones
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">Name: Kevin M Cook</span>
                          <span className="d-block">
                            Email: customer3@example.com
                          </span>
                          <span className="d-block">Phone: +16035347661</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={104}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/zBvwxgEXjn8JXZtMJnVELuvzBf0qXNpmU4bSUfVS.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              Mens Dress Shirts Casual Button Down Shirt Long
                              Sleeve Button up Shirts
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">Name: Kevin M Cook</span>
                          <span className="d-block">
                            Email: customer3@example.com
                          </span>
                          <span className="d-block">Phone: +16035347661</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={103}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
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
                          <span className="d-flex align-items-center">
                            <img alt=''
                              src="https://shop.activeitzone.com/public/uploads/all/MPuIcMV9o6rWRmDkdrAuPzLBSykb7Iu9St1bipZB.webp"
                              className="size-80px mr-2"
                              onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                            />
                            <span className="flex-grow-1 minw-0 text-truncate-2">
                              OshKosh B'Gosh baby-girls World's Best Overalls
                            </span>
                          </span>
                        </td>
                        <td
                          className="lh-1-8"
                          style={{ display: "table-cell" }}
                        >
                          <span className="d-block">Name: Kevin M Cook</span>
                          <span className="d-block">
                            Email: customer3@example.com
                          </span>
                          <span className="d-block">Phone: +16035347661</span>
                          <span className="d-block">
                            Rating:{" "}
                            <span className="rating">
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star active" />
                              <i className="las la-star" />
                            </span>
                          </span>
                        </td>
                        <td style={{ display: "table-cell" }}>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences that are extremely painful. Nor again is
                          there anyone who loves or pursues or desires to obtain
                          pain of itself, because it is pain, but because
                          occasionally circumstances occur in which toil and
                          pain can procure him some great pleasure. To take a
                          trivial example, which of us ever undertakes laborious
                          physical exercise, except to obtain some advantage
                          from it? But who has any right to find fault with a
                          man who chooses to enjoy a pleasure that has no
                          annoying consequences, or one who avoids a pain that
                          produces no resultant pleasure?"
                        </td>
                        <td style={{ display: "table-cell" }}>
                          <img alt=''
                            src="https://shop.activeitzone.com/public//assets/img/placeholder.jpg"
                            className="size-80px mr-2"
                            onerror="this.onerror=null;this.src='https://shop.activeitzone.com/public//assets/img/placeholder.jpg';"
                          />
                        </td>
                        <td
                          className="footable-last-visible"
                          style={{ display: "table-cell" }}
                        >
                          <label className="aiz-switch aiz-switch-success mb-0">
                            <input
                              onchange="update_published(this)"
                              defaultValue={102}
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="slider round" />
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="aiz-pagination">
                    <nav>
                      <ul className="pagination">
                        <li
                          className="page-item disabled"
                        //   aria-disabled="true"
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
                            href="https://shop.activeitzone.com/admin/reviews?page=2"
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/reviews?page=3"
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/reviews?page=4"
                          >
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/reviews?page=5"
                          >
                            5
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/reviews?page=6"
                          >
                            6
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/reviews?page=7"
                          >
                            7
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/reviews?page=8"
                          >
                            8
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="https://shop.activeitzone.com/admin/reviews?page=2"
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

export default Reviews
