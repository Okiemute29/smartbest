import SideBar from '../component/sidebar/sidebar'
import Header from '../component/hearder/header'
import { useEffect, useState } from 'react';
import Footer from '../component/footer/footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import placeholder from "../assets/images/placeholder.jpg"
import useGetAllBrand from '../hooks/brand/getallbrand';
import usePostBrand from '../hooks/brand/postbrand'

const UpDateBrands = () => {
    const [menu, setMenu] = useState(false)
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
                <h5 className="mb-0 h6">Brand Information</h5>
              </div>
              <div className="col-lg-8 mx-auto">
                <div className="card">
                  <div className="card-body p-0">
                    <ul className="nav nav-tabs nav-fill border-light">
                      <li className="nav-item">
                        <a className="nav-link text-reset  active  py-3" href="https://shop.activeitzone.com/admin/brands/edit/50?lang=en">
                          <img src="https://shop.activeitzone.com/public/assets/img/flags/en.png" height={11} className="mr-1" />
                          <span>English</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-reset  bg-soft-dark border-light border-left-0  py-3" href="https://shop.activeitzone.com/admin/brands/edit/50?lang=ar">
                          <img src="https://shop.activeitzone.com/public/assets/img/flags/sa.png" height={11} className="mr-1" />
                          <span>Arabic</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-reset  bg-soft-dark border-light border-left-0  py-3" href="https://shop.activeitzone.com/admin/brands/edit/50?lang=bn">
                          <img src="https://shop.activeitzone.com/public/assets/img/flags/bd.png" height={11} className="mr-1" />
                          <span>Bangla</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-reset  bg-soft-dark border-light border-left-0  py-3" href="https://shop.activeitzone.com/admin/brands/edit/50?lang=hi">
                          <img src="https://shop.activeitzone.com/public/assets/img/flags/in.png" height={11} className="mr-1" />
                          <span>Hindi</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-reset  bg-soft-dark border-light border-left-0  py-3" href="https://shop.activeitzone.com/admin/brands/edit/50?lang=fr">
                          <img src="https://shop.activeitzone.com/public/assets/img/flags/fr.png" height={11} className="mr-1" />
                          <span>France</span>
                        </a>
                      </li>
                    </ul>
                    <form className="p-4" action="https://shop.activeitzone.com/admin/brands/50" method="POST" encType="multipart/form-data">
                      <input name="_method" type="hidden" defaultValue="PATCH" />
                      <input type="hidden" name="lang" defaultValue="en" />
                      <input type="hidden" name="_token" defaultValue="zR5ZWKHAfdq0Mi61hSa27Y567DCpkAjn4rqlsFBf" />                <div className="form-group row">
                        <label className="col-sm-3 col-from-label" htmlFor="name">Name <i className="las la-language text-danger" title="Translatable" /></label>
                        <div className="col-sm-9">
                          <input type="text" placeholder="Name" id="name" name="name" defaultValue="DEWALT" className="form-control" required />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Logo <small>(120x80)</small></label>
                        <div className="col-md-9">
                          <div className="input-group" data-toggle="aizuploader" data-type="image">
                            <div className="input-group-prepend">
                              <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                            </div>
                            <div className="form-control file-amount">1 File selected</div>
                            <input type="hidden" name="logo" defaultValue={961} className="selected-files" />
                          </div>
                          <div className="file-preview box sm"><div className="d-flex justify-content-between align-items-center mt-2 file-preview-item" data-id={961} title="DEWALT.png"><div className="align-items-center align-self-stretch d-flex justify-content-center thumb"><img src="https://shop.activeitzone.com//public/uploads/all/4a6v9voBwWVcpjH3RVL6hu1RqR5fGJYT61r0Nj2W.png" className="img-fit" /></div><div className="col body"><h6 className="d-flex"><span className="text-truncate title">DEWALT</span><span className="ext flex-shrink-0">.png</span></h6><p>4 KB</p></div><div className="remove"><button className="btn btn-sm btn-link remove-attachment" type="button"><i className="la la-close" /></button></div></div></div>
                        </div>
                      </div>
                      <div className="form-group mb-0 text-right">
                        <button type="submit" className="btn btn-primary">Save</button>
                      </div>
                    </form>
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

export default UpDateBrands
