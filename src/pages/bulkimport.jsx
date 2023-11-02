import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';

const BulkImport = () => {
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
                <div className="card-header">
                  <h5 className="mb-0 h6">Product Bulk Upload</h5>
                </div>
                <div className="card-body">
                  <div
                    className="alert"
                    style={{
                      color: "#004085",
                      backgroundColor: "#cce5ff",
                      borderColor: "#b8daff",
                      marginBottom: 0,
                      marginTop: 10,
                    }}
                  >
                    <strong>Step 1:</strong>
                    <p>
                      1. Download the skeleton file and fill it with proper
                      data.
                    </p>
                    <p>
                      2. You can download the example file to understand how the
                      data must be filled.
                    </p>
                    <p>
                      3. Once you have downloaded and filled the skeleton file,
                      upload it in the form below and submit.
                    </p>
                    <p>
                      4. After uploading products you need to edit them and set
                      product's images and choices.
                    </p>
                  </div>
                  <br />
                  <div className>
                    <a
                      href="https://shop.activeitzone.com/public/download/product_bulk_demo.xlsx"
                      download
                    >
                      <button className="btn btn-info">Download CSV</button>
                    </a>
                  </div>
                  <div
                    className="alert"
                    style={{
                      color: "#004085",
                      backgroundColor: "#cce5ff",
                      borderColor: "#b8daff",
                      marginBottom: 0,
                      marginTop: 10,
                    }}
                  >
                    <strong>Step 2:</strong>
                    <p>1. Category and Brand should be in numerical id.</p>
                    <p>
                      2. You can download the pdf to get Category and Brand id.
                    </p>
                  </div>
                  <br />
                  <div className>
                    <a href="https://shop.activeitzone.com/admin/bulk-upload/download/category">
                      <button className="btn btn-info">
                        Download Category
                      </button>
                    </a>
                    <a href="https://shop.activeitzone.com/admin/bulk-upload/download/brand">
                      <button className="btn btn-info">Download Brand</button>
                    </a>
                  </div>
                  <br />
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">
                    <strong>Upload Product File</strong>
                  </h5>
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    action="https://shop.activeitzone.com/admin/bulk-product-upload"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="QWhXrUnq7x5EtYb0qsJZBxuUby5Fo44n6v47yCJa"
                    />{" "}
                    <div className="form-group row">
                      <div className="col-sm-9">
                        <div className="custom-file">
                          <label className="custom-file-label">
                            <input
                              type="file"
                              name="bulk_file"
                              className="custom-file-input"
                              required
                            />
                            <span className="custom-file-name">
                              Choose file
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <button type="submit" className="btn btn-info">
                        Upload CSV
                      </button>
                    </div>
                  </form>
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

export default BulkImport
