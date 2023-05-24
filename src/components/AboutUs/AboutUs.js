import React,{useState,useRef,useEffect} from 'react';
import './AboutUs.css';
import RightArrow from '../../assests/images/right-arrow.gif';

import {motion } from 'framer-motion'



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

const AboutUs = () => {


    const [ref, inView] = useIntersectionObserver();

    const animationVariants = {
      hidden: { x: -300,opacity:0 },
      visible: { x: 0 ,opacity: 1 },
      transition:{
        type: "spring",
        duration: 4,
        bounce: 0.3,
        delay: 4
    }
    };
    const animationVariants1 = {
        hidden: { x: 300 ,opacity:0},
        visible: { x: 0,  opacity:1 },
        transition:{
            type: "spring",
            duration: 4,
            bounce: 0.3,
            delay: 4
        }
      };
      const animationVariants2 = {
        hidden: { y:100 },
        visible: { y:0,   
        transition:{
            type: "spring",
            duration: 1.8,
            bounce: 0.3,
            delay: 0.2
        }
        },
      };
  
    return (
        <div ref={ref} id='about-us' className='about-us'>
            <div className="right-arrow-container">
                <img src={RightArrow} height={30} alt='right arrow'/>
            </div>
            <div className='about-us-container'>
            <motion.h1 

ref={ref}
 initial="hidden"
 animate={inView ? "visible" : "hidden"}
 transition={{ duration: 0.5 }}
    
 variants={animationVariants2}
 >ABOUT US</motion.h1>
    <div className='about-us-content'>
    <motion.div 
     initial="hidden"
     animate={inView ? "visible" : "hidden"}
     variants={animationVariants}
     transition={{ duration: 0.5 }}
     whileHover={{scale:1.3}}
     className='about-us-content-left box'>
        <h3>
            WALTZ 23
        </h3>
        <div className='box1'>
        <p>
         Waltz, the cultural fest of UIT, brings students from across the country to showcase their skills in music, dance, drama, and sports. It also offers alumni a chance to relive their college memories.
        </p></div>
    </motion.div >
    <motion.div
     initial="hidden"
     animate={inView ? "visible" : "hidden"}
     variants={animationVariants1}
     transition={{ duration: 0.5 }}
     whileHover={{scale:1.3}}
    
      className='about-us-content-right box'>
        <h3>
            UIT BURDWAN
        </h3>
        <p>
                UIT is a top engineering college with quality education, excellent infrastructure, experienced faculty, and a dynamic student community that promotes extracurricular activities and hosts various events.
       
        </p>
    </motion.div>
</div>
            </div>
        </div>
    )
}

export default AboutUs
