import React, { useContext } from "react";
import "./LandingScreen.css";
import Logo2 from "../../assests/images/newHeading2.png";
import Timer from "../../utils/Timer/Timer";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { HashLink } from "react-router-hash-link";
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
          <HashLink to={"/#about-us"}>
            <div className="button-solid-round view-btn">
              <p className="mt-3">VIEW DETAILS</p>
            </div>
          </HashLink>
          {user.token === "" ? (
            <Link to="/register">
              <div className="button-solid-round register-btn">
                <p className="mt-3">REGISTER NOW</p>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
