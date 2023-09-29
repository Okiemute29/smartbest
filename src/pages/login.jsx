import { useState } from "react"
import { Link } from "react-router-dom"
import _route from "../constants/routes"
import useLoginUser from "../hooks/auth/uselogin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";


const Login = () => {
    const {loginUser, loading } = useLoginUser()
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const submitLogin =(e)=>{
        e.preventDefault()
        loginUser(data)
    }

  return (
    <>
        <div className="aiz-main-wrapper d-flex">
            <div className="flex-grow-1">
                <div className="h-100 bg-cover bg-center py-5 d-flex align-items-center" style={{backgroundImage: 'url(https://shop.activeitzone.com/public/uploads/all/EopYjyOJXF35w1EtOAsTjVJXtt3Wo8Ee0g28eEeO.png)'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xl-4 mx-auto">
                                <div className="card text-left bg-transparent">
                                    <div className="absolute-full bg-white opacity-70" />
                                    <div className="card-body position-relative z-1">
                                        <div className="mb-4 text-center">
                                        <img src="https://shop.activeitzone.com/public/uploads/all/R944f38sMNiOZFocJZTXMLStB9gixao0i0xqyaf9.png" alt="logo" className="mw-100 mb-4 mx-auto h-[40px]" />
                                        <h1 className="h3 text-primary mb-0 border-top text-uppercase pt-3" style={{borderColor: '#fff !important'}}>Welcome</h1>
                                        <p className="fs-15 opacity-80">Login to your account.</p>
                                        </div>
                                        <form className="pad-hor" onSubmit={submitLogin}>                        
                                        <div className="form-group mb-4">
                                            <label className="mb-1">Email</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                required 
                                                autoFocus 
                                                placeholder="Email" 
                                                value={data.email}
                                                onChange={(e)=> setData(prv => ({ ...prv, email: e.target.value}))}
                                            />
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="mb-1">Password</label>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                required 
                                                placeholder="Password"   
                                                value={data.password}
                                                onChange={(e)=> setData(prv => ({...prv, password: e.target.value}))}
                                            />
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                            <div className="text-left">
                                                <label className="aiz-checkbox">
                                                    <Link to={_route._forgotpassword} className="text-xs text-primary">Forgot Password</Link>
                                                </label>
                                            </div>
                                            </div>
                                        </div>
                                        {/* <div className="row mb-2">
                                            <div className="col-sm-6">
                                            <div className="text-left">
                                                <label className="aiz-checkbox">
                                                <input type="checkbox" name="remember" id="remember" />
                                                <span>Remember Me</span>
                                                <span className="aiz-square-check bg-white" />
                                                </label>
                                            </div>
                                            </div>
                                        </div> */}
                                        <button type="submit" className="w-full text-white bg-primary btn-block p-2">
                                            {loading ? <FontAwesomeIcon icon={faSpinner} size="lg" spin/> :'Login'}
                                        </button>
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <div className="text-left">
                                                    <label className="aiz-checkbox">
                                                        <span>Don't have an account? <Link to={_route._signup} className="text-primary">Signup</Link></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        </form>
                                        <div className="mt-4">
                                        {/* <table className="table table-bordered">
                                            <tbody>
                                            <tr>
                                                <td>admin@example.com</td>
                                                <td>123456</td>
                                                <td><button className="btn btn-info btn-xs" onclick="autoFill()">Copy</button></td>
                                            </tr>
                                            <tr>
                                                <td>seller@example.com</td>
                                                <td>123456</td>
                                                <td><button className="btn btn-info btn-xs" onclick="autoFillSeller()">Copy</button></td>
                                            </tr>
                                            </tbody>
                                        </table> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Login
