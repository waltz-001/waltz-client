import React, { useContext } from "react";
import "./LandingScreen.css";
import Logo2 from "../../assests/images/newHeading2.png";
import Timer from "../../utils/Timer/Timer";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";

const LandingScreen = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div id="home" className="landing-container">
      <div className="landing-content">
        <div className="landing-logo-container">
          <img src={Logo2} alt="logo" />
        </div>
        <Timer />
        <div className="landing-button-container ">
          <div className="button-solid-round view-btn mt-5 ">
            <p className="mt-3">
              <Link to={"/#about"}>VIEW DETAILS</Link>
            </p>
          </div>
          {user.token === "" ? (
            <div className="button-solid-round register-btn mt-5 ">
              <p className="mt-3">
                <Link to="/register">REGISTER NOW</Link>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
