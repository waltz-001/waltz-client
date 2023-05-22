import React, { useContext } from "react";
import LandingScreen from "../components/LandingScreen/LandingScreen";
import Event from "../components/Event/Events";
import AboutUs from "../components/AboutUs/AboutUs";
import Sponsors from "../components/Sponsors/Sponsors";
import ContactUs from "../components/ContactUs/ContactUs";
import UserContext from "../utils/UserContext";

const HomePage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="home-page">
      <LandingScreen />
      {user.token === "" ? <></> : <Event />}
      <AboutUs />
      <Sponsors />
      {user.token === "" ? <></> : <ContactUs />}
    </div>
  );
};

export default HomePage;
