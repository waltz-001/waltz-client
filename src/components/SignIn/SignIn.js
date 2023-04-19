import React from 'react'
import Box from "../../assests/images/box.jpg"
import google from "../../assests/images/icon1.png"
import facebook from "../../assests/images/icon2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SignIn.css'

function SignIn() {
  return (
    <>
    <div className='signin-container containe'>
      <h1 className='signin-head-txt'>Let's Get Classy</h1>
      <div className="card-container borde" style={{height:"80%"}}>
      <div className="card borde mb-3 shadow rounded" style={{width: "90%", height:"90%"}}>
  <div className="row g-0">
    <div className="col-md-6 borde part1 shadow rounded">
      {/* <img src={Box} className="img-fluid rounded-start boximg" alt="..."/> */}
    </div>
    <div className="col-md-6 container borde part2 shadow rounded">
      <div className="card-body">
        <h5 className="card-title text-center borde">Sign In</h5>
        <p className="card-text">
        <span className="input-group mb-3 email-box">
  <span className="input-group-text px-4"><i className="fa-solid fa-envelope fa-beat fa-xl" style={{color:"#DFB6FF"}}></i></span>
  <span className="form-floating">
    <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
    <label htmlFor="colFormLabelSm" className='text-secondary'>Email</label>
  </span>
</span>
<span className="input-group mb-1 pd-box">
<span className="input-group-text px-4"><i className="fa-solid fa-unlock-keyhole fa-bounce fa-xl" style={{color:"#DFB6FF"}}></i></span>
<span className="form-floating">

  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label htmlFor="floatingPassword" className='text-secondary'>Password</label>
</span>
</span>

{/* Remember me section */}

<span className="d-grid gap-2">
<span className="mb-4 text-secondary d-flex justify-content-between align-items-center justify-content-center" type="button" style={{height:"3rem", width:"100%"}}>
  <span className='rem '><input type="checkbox" /> Remember me</span>
  <span className='forg'><a href="/">Forgot password?</a></span>
</span>
</span>

{/* Button section */}
<span className="d-grid gap-2">
  <button className="btn text-white rounded-pill d-flex mx-auto align-items-center justify-content-center" type="button" style={{height:"3rem", width:"50%", backgroundColor:"#A023BF"}}>SIGN IN</button>
</span>
<span className="d-grid gap-2">
  <span className="borde mt-3 text-secondary d-flex mx-auto align-items-center justify-content-center" type="button" style={{height:"3rem", width:"100%"}}> ————— or continue with —————</span>
  <span className='d-flex mx-auto mt-2 gap-5'>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              {/* <i className="fab fa-facebook fa-flip"></i> */}
              <img src={google} alt="" className='fa-flip fab' style={{width:"2rem"}}/>
            </a>
            
            <a
              
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              {/* <i className="fab fa-google  fa-flip"></i> */}
              <img src={facebook} alt="" className='fa-flip fab' style={{width:"2.2rem"}}/>
            </a>
          </span>
</span>
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>

    </>
  )
}

export default SignIn
