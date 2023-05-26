import React, { useState } from "react";
import SponsorWave from "../../assests/images/sponsorWave.png";
import "./Sponsors.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Tilt } from "react-tilt";
import NewLifeHospital from "./SponsorImages/NewLifeHospital.jpeg";
import PeachNCream from "./SponsorImages/PeachNCream.jpeg";
import Sarachi from "./SponsorImages/Sarachi.jpeg";
import Pearl from "./SponsorImages/Pearl.png";
import ISBM from "./SponsorImages/ISBM.png";
import FitnessFactory from "./SponsorImages/FitnessFactory.png";
function useIntersectionObserver() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return [ref, inView];
}
const defaultTiltOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
function SponsorCard({ SponsorImage, SponsorName, SponsorType }) {
  return (
    <Tilt options={defaultTiltOptions} className="SponsorCard">
      <img src={SponsorImage} alt={SponsorName} className="SponsorImage" />
      <div className="SponsorCardText">
        <p className="SponsorName">{SponsorName}</p>
        <p className="SponsorType">{SponsorType}</p>
      </div>
    </Tilt>
  );
}
const Sponsors = () => {
  const [ref, inView] = useIntersectionObserver();
  const animationVariants = {
    hidden: { y: -300, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    transition: {
      type: "spring",
      duration: 4,
      bounce: 0.3,
      delay: 4,
    },
  };
  const animationVariants1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      duration: 5,
      delay: 6,
    },
  };

  return (
    <div ref={ref} id="sponsors" className="sponsors-container">
      <div className="sponsors-container-top-image">
        <img src={SponsorWave} alt="sponsor" />
        {/* <img src={SponsorWave1} alt="sponsor1" /> */}
      </div>
      <div className="sponsors-content">
        <motion.h1
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          variants={animationVariants}
        >
          SPONSORS
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          variants={animationVariants1}
        >
          Their support and partnership has been invaluable in making WALTZ 2023
          possible
        </motion.p>
        <div className="SponsorNames">
          <SponsorCard
            SponsorName="ISB & M"
            SponsorType="Title sponsor"
            SponsorImage={ISBM}
          />
          <SponsorCard
            SponsorName="SHRACHI"
            SponsorType="Powered By"
            SponsorImage={Sarachi}
          />
          <SponsorCard
            SponsorName="Pearl"
            SponsorType="Fooding and Lodging Partner"
            SponsorImage={Pearl}
          />
          <SponsorCard
            SponsorName="Peaches & Cream"
            SponsorType="Hair and Grooming Partner"
            SponsorImage={PeachNCream}
          />
          <SponsorCard
            SponsorName="New Life Hospital"
            SponsorType="Health Partner"
            SponsorImage={NewLifeHospital}
          />
          <SponsorCard
            SponsorName="Fitness Factory"
            SponsorType="Fitness sponsor"
            SponsorImage={FitnessFactory}
          />
        </div>
        <HashLink to={"/#contact-us"}>
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="button-outline-transparent sponsor-btn"
          >
            SPONSOR US
          </motion.div>
        </HashLink>
      </div>
    </div>
  );
};

export default Sponsors;
