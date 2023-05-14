
import './ContactUs.css';
import React,{useState,useRef,useEffect} from 'react';
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


const ContactUs = () => {



    const [ref, inView] = useIntersectionObserver();

    const animationVariants = {
      hidden: { y: 100,opacity:0 },
      visible: { y: 0 ,opacity: 1 },
      transition:{
        type: "spring",
        duration: 4,
        bounce: 0.3,
        delay: 4
    }
    };
    const animationVariants1 = {
        hidden: { x: 100 ,opacity:0},
        visible: { x: 0,  opacity:1 },
        transition:{
            type: "spring",
            duration: 4,
            bounce: 0.3,
            delay: 0.5
        }
      };
      const animationVariants2 = {
        hidden: { x:-100 },
        visible: { x:0,   
        transition:{
            type: "spring",
            duration: 1.5,
            bounce: 0.3,
            delay: 0.2
        }
        },
      };



  return (
    <div ref={ref} id='contact-us' className='contact-us-container'>
        <motion.h1
              initial="hidden"
               animate={inView ? "visible" : "hidden"}
               transition={{ duration: 0.5 }}
                 
               variants={animationVariants}
        
        ><span>CONTACT US</span></motion.h1>
        <div className='contact-us-content'>
            <motion.div
            
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants2}
            transition={{ duration: 0.5 }}
           
            
            
            className='contact-us-content-left'>
                <div className='email-us'>
                    <h3>Email Us on:</h3>
                    <ul>
                        <li>xyz@gmail.com</li>
                        <li>uit@gmail.com</li>
                    </ul>
                </div>
                <div className='call-us'>
                <h3>Call us on:</h3>
                    <ul>
                        <li>+91-294250825</li>
                        <li>+91-395859836</li>
                    </ul>
                </div>
            </motion.div>
            <motion.div 
            
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants1}
            transition={{ duration: 0.5 }}
            
            className='contact-us-content-right'>
                <form>
                    <label>Name</label>
                    <input type='text'/>
                    <label>Email</label>
                    <input type='text'/>
                    <label>Message</label>
                    <textarea rows={3} />
                </form>
                <motion.button 
                whileHover={{scale:1.4}}
                >SUBMIT</motion.button>
            </motion.div>
        </div>
    </div>
    
    

  )
}

export default ContactUs