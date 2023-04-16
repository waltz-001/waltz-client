import React, {useState} from 'react';
import SearchIcon from '../../assests/images/searchIcon.png';
import UserIcon from '../../assests/images/userIcon.png';
import Logo from '../../assests/images/logo.png';
import './Navbar.css';
import { a } from "react-router-dom";


const Navbar = () => {
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY>=80)
        setNavBar(true)
        else
        setNavBar(false)
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
        <nav className={navBar?'navbar-container active navbar-fixed-top navbar-expand-lg':'navbar-container navbar-expand-lg'}>
        
        
        <a class="navbar-brand" href="/"><img src={Logo} alt="" style={{width:"6rem"}} /></a>
            <div className='navbar-option-list'>
            
                <ul>
                {/* <a class="navbar-brand" href="#"><img src={Logo} alt="" style={{width:"6rem"}} /></a> */}
                    <li className='mt-2'><a href='/'>HOME</a></li>
                    <li className='mt-2'><a href='#about-us'>ABOUT US</a></li>
                    <li className='mt-2'><a href='#sponsors'>SPONSORS</a></li>
                    <li className='mt-2'><a href='#contact-us'>CONTACT US</a></li>
                </ul>
            </div>
            <div className='navbar-option-icons mt-2'>
                <img src={SearchIcon} height={19} alt='search-icon' />
                <img src={UserIcon} height={19} alt='user-icon' />
            </div>
            
        </nav>

        {/* DEMO */}

        {/* <nav class="navbar navbar-expand-lg bg-body-tertiar text-light navbar-container">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar-option-list" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#"><img src={Logo} alt="" style={{width:"6rem"}} /></a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about-us">About</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav> */}

        </>
    )
}

export default Navbar