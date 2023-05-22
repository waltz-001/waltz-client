import React,{useState} from 'react';
import SponsorWave from '../../assests/images/sponsorWave.png';
import './Sponsors.css';
import { useEffect ,useRef} from "react";
import {motion} from 'framer-motion'



function useIntersectionObserver() {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setInView(entry.isIntersecting);
      }, { threshold: 0.1 });
  
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
const Sponsors = () => {


    
    const [ref, inView] = useIntersectionObserver();

    const animationVariants = {
      hidden: { y: -300,opacity:0 },
      visible: { y: 0 ,opacity: 1 },
      transition:{
        type: "spring",
        duration: 4,
        bounce: 0.3,
        delay: 4
    }
    };
    const animationVariants1 = {
        hidden: { opacity:0 },
        visible: { opacity: 1 },
        transition:{
          
          duration: 5,
          delay: 6
      }
      };

    return (
        <div ref={ref} id='sponsors' className='sponsors-container'>
          
            <div className='sponsors-container-top-image'>
                <img src={SponsorWave} alt="sponsor" />
                {/* <img src={SponsorWave1} alt="sponsor1" /> */}
            </div>
            <div className='sponsors-content'>
                <motion.h1    
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
                   
                variants={animationVariants}
                
                >SPONSORS</motion.h1>
                <motion.p 
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
                   
                variants={animationVariants1}
                
                
                >Their support and partnership has been invaluable in making WALTZ 2023 possible</motion.p>
                <motion.div
                whileHover={{scale:1.3}}
                className='button-outline-transparent sponsor-btn'>
                    SPONSOR US
                </motion.div>
            </div>
        </div>
    )
}

export default Sponsors