import React,{useContext} from "react";
import "./LandingScreen.css";
import Logo2 from "../../assests/images/newHeading2.png";
import Timer from "../../utils/Timer/Timer";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
const LandingScreen = () => {
  return (
    <div id="home" className="landing-container">
      <div className="landing-content">
        <div className="landing-logo-container">
          <motion.img 
          whileHover={{scale:1.3}}
          animate={{ 
            y:0,
            opacity:1 ,
            scale:1.3      
           }} 
           initial={{
            y:500,
            opacity:0
           
           }} 
           transition={{ delay:0.4,
            type: "spring",
            stiffness: 200,
          }} 
           src={Logo2} alt="logo" />
        </div>
        <Timer />
        <div className="landing-button-container ">
          <motion.div
          whileHover={{scale:1.2}}
          className="button-solid-round view-btn mt-5 ">
            <p 
             whileHover={{scale:1.2}}
            className="mt-3">VIEW DETAILS</p>
          </motion.div>
          <motion.div 
           whileHover={{scale:1.2}}
          className="button-solid-round register-btn mt-5 ">
            <p 
            
            className="mt-3">
              <Link to="/register">REGISTER NOW</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
