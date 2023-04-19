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
      <div className="card-container borde" style={{width:"70%", height:"80%"}}>
      <div class="card borde mb-3" style={{width: "90%", height:"90%"}}>
  <div class="row g-0">
    <div class="col-md-6 borde part1">
      {/* <img src={Box} class="img-fluid rounded-start boximg" alt="..."/> */}
    </div>
    <div class="col-md-6 container borde part2">
      <div class="card-body">
        <h5 class="card-title text-center borde">Sign In</h5>
        <p class="card-text">
        <div class="input-group mb-3 email-box rounded-pill">
  <span class="input-group-text px-4"><i class="fa-solid fa-envelope fa-beat fa-xl" style={{color:"#DFB6FF"}}></i></span>
  <div class="form-floating">
    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
    <label for="colFormLabelSm" className='text-secondary'>Email</label>
  </div>
</div>
<div class="input-group mb-1 pd-box">
<span class="input-group-text px-4"><i class="fa-solid fa-unlock-keyhole fa-bounce fa-xl" style={{color:"#DFB6FF"}}></i></span>
<div class="form-floating">

  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword" className='text-secondary'>Password</label>
</div>
</div>

{/* Remember me section */}

<div class="d-grid gap-2">
<span class="mb-4 text-secondary d-flex justify-content-between align-items-center justify-content-center" type="button" style={{height:"3rem", width:"100%"}}>
  <span className='rem '><input type="checkbox" /> Remember me</span>
  <span className='forg'><a href="/">Forgot password?</a></span>
</span>
</div>

{/* Button section */}
<div class="d-grid gap-2">
  <button class="btn text-white rounded-pill d-flex mx-auto align-items-center justify-content-center" type="button" style={{height:"3rem", width:"50%", backgroundColor:"#A023BF"}}>SIGN IN</button>
</div>
<div class="d-grid gap-2">
  <span class="borde mt-3 text-secondary d-flex mx-auto align-items-center justify-content-center" type="button" style={{height:"3rem", width:"100%"}}> ————— or continue with —————</span>
  <div className='d-flex mx-auto mt-2 gap-5'>
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
          </div>
</div>
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
