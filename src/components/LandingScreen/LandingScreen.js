import React from "react";
import "./LandingScreen.css";
import Logo2 from "../../assests/images/newHeading2.png";
import Timer from "../../utils/Timer/Timer";
import { Link } from "react-router-dom";
const LandingScreen = () => {
  return (
    <div id="home" className="landing-container">
      <div className="landing-content">
        <div className="landing-logo-container">
          <img src={Logo2} alt="logo" />
        </div>
        <Timer />
        <div className="landing-button-container ">
              <Link to="/">
                <div className="button-solid-round view-btn mt-5 ">
                  <p className="mt-3">
                    VIEW DETAILS
                  </p>
                </div>
              </Link>
              <Link to="/register">
                <div className="button-solid-round register-btn mt-5 ">
                  <p className="mt-3">
                      REGISTER NOW
                  </p>
                </div>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
