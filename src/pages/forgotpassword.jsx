import { useState } from "react"
import logo from "../assets/images/logo/logo.png"


const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const sumbmitEmail =(e)=>{
        e.preventDefault()
        console.log(email)
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
                                        <img src={logo} alt="logo" className="mw-100 mx-auto h-[100px]" />
                                        <h1 className="h3 text-primary mb-0 border-top text-uppercase pt-3" style={{borderColor: '#fff !important'}}>Welcome</h1>
                                        <p className="fs-15 opacity-80">Enter your email and we'll send you a link to reset your password.</p>
                                        </div>
                                        <form className="pad-hor" onSubmit={sumbmitEmail}>                        
                                        <div className="form-group mb-4">
                                            <label className="mb-1">Email</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                required 
                                                autoFocus 
                                                placeholder="Email" 
                                                value={email}
                                                onChange={(e)=> setEmail(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="w-full text-white bg-primary btn-block p-2">
                                            Submit
                                        </button>
                                        </form>
                                        <div className="mt-4">
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

export default ForgotPassword
