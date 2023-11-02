import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';

const Attributes = () => {
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
                  <h1 className="h3">All Attributes</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7 col-xl-8">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0 h6">Attributes</h5>
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
                            <th
                              data-breakpoints="lg"
                              style={{ display: "table-cell" }}
                            >
                              Values
                            </th>
                            <th
                              className="text-right footable-last-visible"
                              style={{ display: "table-cell" }}
                            >
                              Actions
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
                            <td style={{ display: "table-cell" }}>Memory</td>
                            <td style={{ display: "table-cell" }}>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                32 gb
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                64 gb
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                128 gb
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                256 gb
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                512 gb
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                3/32 GB
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                4/64 GB
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                6/64 GB
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                6/128 GB
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                8/256 GB
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                12/512 GB
                              </span>
                            </td>
                            <td
                              className="text-right footable-last-visible"
                              style={{ display: "table-cell" }}
                            >
                              <a
                                className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                href="https://shop.activeitzone.com/admin/attributes/5"
                                title="Values"
                              >
                                <i className="las la-cog" />
                              </a>
                              <a
                                className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                href="https://shop.activeitzone.com/admin/attributes/edit/5?lang=en"
                                title="Edit"
                              >
                                <i className="las la-edit" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="footable-first-visible"
                              style={{ display: "table-cell" }}
                            >
                              2
                            </td>
                            <td style={{ display: "table-cell" }}>Color</td>
                            <td style={{ display: "table-cell" }}>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Black
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                White
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Blue
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Red
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                green
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Silver
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Yellow
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Orange
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Maroon
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Purple
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Fuchsia
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Teal
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Aliceblue
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Antiquewhite
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Aqua
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Blanchedalmond
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Blueviolet
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Burlywood
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                cadetblue
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                chartreuse
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                chocolate
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                coral
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                cornflowerblue
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                cornsilk
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                crimson
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                cyan
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                darkgreen
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                darkgrey
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                darkmagenta
                              </span>
                            </td>
                            <td
                              className="text-right footable-last-visible"
                              style={{ display: "table-cell" }}
                            >
                              <a
                                className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                href="https://shop.activeitzone.com/admin/attributes/4"
                                title="Values"
                              >
                                <i className="las la-cog" />
                              </a>
                              <a
                                className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                href="https://shop.activeitzone.com/admin/attributes/edit/4?lang=en"
                                title="Edit"
                              >
                                <i className="las la-edit" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="footable-first-visible"
                              style={{ display: "table-cell" }}
                            >
                              3
                            </td>
                            <td style={{ display: "table-cell" }}>Fabric</td>
                            <td style={{ display: "table-cell" }}>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                silk
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                muslin
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Suti
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Jamdani silk
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Leather
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Satin
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Crepe
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Denim
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Chiffon
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Cotton
                              </span>
                            </td>
                            <td
                              className="text-right footable-last-visible"
                              style={{ display: "table-cell" }}
                            >
                              <a
                                className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                href="https://shop.activeitzone.com/admin/attributes/2"
                                title="Values"
                              >
                                <i className="las la-cog" />
                              </a>
                              <a
                                className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                href="https://shop.activeitzone.com/admin/attributes/edit/2?lang=en"
                                title="Edit"
                              >
                                <i className="las la-edit" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="footable-first-visible"
                              style={{ display: "table-cell" }}
                            >
                              4
                            </td>
                            <td style={{ display: "table-cell" }}>Size</td>
                            <td style={{ display: "table-cell" }}>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Small
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Medium
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                Large
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                S
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                M
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                L
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                XL
                              </span>
                              <span className="badge badge-inline badge-md bg-soft-dark mb-1">
                                XXL
                              </span>
                            </td>
                            <td
                              className="text-right footable-last-visible"
                              style={{ display: "table-cell" }}
                            >
                              <a
                                className="btn btn-soft-info btn-icon btn-circle btn-sm"
                                href="https://shop.activeitzone.com/admin/attributes/1"
                                title="Values"
                              >
                                <i className="las la-cog" />
                              </a>
                              <a
                                className="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                href="https://shop.activeitzone.com/admin/attributes/edit/1?lang=en"
                                title="Edit"
                              >
                                <i className="las la-edit" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="aiz-pagination"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-xl-4">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0 h6">Add new attribute</h5>
                    </div>
                    <div className="card-body">
                      <form
                        action="https://shop.activeitzone.com/admin/attributes"
                        method="POST"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="QWhXrUnq7x5EtYb0qsJZBxuUby5Fo44n6v47yCJa"
                        />{" "}
                        <div className="alert alert-info">
                          Attributes are non deletable. You can only add or
                          edit.
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="form-group mb-3 text-right">
                          <button type="submit" className="btn btn-primary">
                            Add
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
    </>
  );
}

export default Attributes
