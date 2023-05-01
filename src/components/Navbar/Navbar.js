import React, { useState } from "react";
import Logo from "../../assests/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) setNavBar(true);
    else setNavBar(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={
          navBar
            ? "navbar-container active navbar-fixed-top navbar-expand-lg"
            : "navbar-container navbar-expand-md "
        }
      >
        <a className="navbar-brand p-1" href="/">
          <img src={Logo} alt="" style={{ width: "4rem" }} />
        </a>
        {/* OFFCANVAS */}

        <label
          htmlFor="navbar-toggle"
          className="navbar-toggler togglebtn "
          data-bs-toggle="offcanvas"
          data-bs-target="#staticBackdrop"
          aria-controls="staticBackdrop"
        >
          <span className="navbar-toggler-icon"></span>
        </label>

        <div
          className="offcanvas offcanvas-start bg-dark"
          data-bs-backdrop="static"
          tabIndex="-1"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="staticBackdropLabel">
              <a className="navbar-brand" href="/">
                <img
                  className="mt-4"
                  src={Logo}
                  alt=""
                  style={{ width: "6rem" }}
                />
              </a>
            </h5>
            <button
              type="button"
              className="btn-close bg-warning"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div></div>
            <div className="navbar-option">
              <ul className="text-center">
                <li className="my- nav-item res">
                  <a href="/">HOME</a>
                </li>
                <li className="my- nav-item res">
                  <a href="/#about-us">ABOUT US</a>
                </li>
                <li className="my- nav-item res">
                  <a href="/#sponsors">SPONSORS</a>
                </li>
                <li className="my- nav-item res">
                  <a href="/#contact-us">CONTACT US</a>
                </li>
                <li className="my- nav-item res">
                  <a href="/signin">SIGN IN</a>
                </li>
                <li className="my- nav-item res">
                  <a href="/register">REGISTER</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-option-list justify-content-center align-items-center">
          <ul>
            <li className="mt-2">
              <a href="/">HOME</a>
            </li>
            <li className="mt-2">
              <a href="/#about-us">ABOUT US</a>
            </li>
            <li className="mt-2">
              <a href="/#sponsors">SPONSORS</a>
            </li>
            <li className="mt-2">
              <a href="/#contact-us">CONTACT US</a>
            </li>
            <li className="mt-2">
              <a href="/signin">SIGN IN</a>
            </li>
            <li className="mt-2">
              <a href="/register">REGISTER</a>
            </li>
          </ul>
        </div>
        <div className="navbar-option-icons mt-2">
          {/* <img src={SearchIcon} height={19} alt='search-icon' />

                <img src={UserIcon} height={19} alt='user-icon' /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
