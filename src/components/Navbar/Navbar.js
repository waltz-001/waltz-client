import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assests/images/logo.png";
import "./Navbar.css";
import UserContext from "../../utils/UserContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) setNavBar(true);
    else setNavBar(false);
  };
  window.addEventListener("scroll", changeBackground);
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <nav className="navbar-container active navbar-fixed-top navbar-expand-lg">
        <Link className="navbar-brand p-1" to={"/"}>
          <img src={Logo} alt="" style={{ width: "4rem" }} />
        </Link>
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
                  <Link to={"/"}>HOME</Link>
                </li>
                <li className="my- nav-item res">
                  <HashLink smooth to="/#about-us">
                    ABOUT US
                  </HashLink>
                </li>
                <li className="my- nav-item res">
                  <HashLink smooth to="/#sponsors">
                    SPONSOR
                  </HashLink>
                </li>
                <li className="my- nav-item res">
                  <HashLink smooth to="/#contact-us">
                    CONTACT US
                  </HashLink>
                </li>
                {user.token === "" ? (
                  <div className="d-flex flex-column ">
                    <li className="my- nav-item res">
                      <Link to="/signin">SIGN IN</Link>
                    </li>
                    <li className="my- nav-item res">
                      <Link to="/register">REGISTER</Link>
                    </li>
                  </div>
                ) : (
                  <li className="my- nav-item res">
                    <Link
                      to="/"
                      onClick={() => {
                        setUser({
                          token: "",
                          isAlumni: false,
                          events: null,
                        });
                      }}
                    >
                      SIGN OUT
                    </Link>
                  </li>
                )}

                {/* <li className="my- nav-item res">
                  <Link to="/merchandise">MERCHANDISE </Link>
                </li> */}

                {user.isAlumni ? (
                  <li className="my- nav-item res">
                    <Link to="/alumni">ALUMNI</Link>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-option-list justify-content-center align-items-center">
          <ul>
            <li className="mt-2">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="mt-2">
              <HashLink smooth to="/#about-us">
                ABOUT US
              </HashLink>
            </li>
            <li className="mt-2">
              <HashLink smooth to="/#sponsors">
                SPONSOR
              </HashLink>
            </li>
            <li className="mt-2">
              <HashLink smooth to="/#contact-us">
                CONTACT US
              </HashLink>
            </li>
            {user.token === "" ? (
              <div className="d-flex gap-4">
                <li className="mt-2">
                  <div className="signinbutton">
                    <Link to="/signin">SIGN IN</Link>
                  </div>
                </li>
                <li className="mt-2">
                  <div className="registerbutton">
                    <Link to="/register">REGISTER</Link>
                  </div>
                </li>
              </div>
            ) : (
              <li className="mt-2">
                <div className="signinbutton">
                  <Link
                    to={"/"}
                    onClick={() => {
                      setUser({
                        token: "",
                        isAlumni: false,
                        events: null,
                      });
                    }}
                  >
                    SIGN OUT
                  </Link>
                </div>
              </li>
            )}
            {user.isAlumni ? (
              <li className="mt-2">
                <Link to="/alumni">ALUMNI</Link>
              </li>
            ) : null}
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
