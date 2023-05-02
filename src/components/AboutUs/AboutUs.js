import React from 'react';
import './AboutUs.css';
import RightArrow from '../../assests/images/right-arrow.gif';

const AboutUs = () => {
    return (
        <div id='about-us' className='about-us'>
            <div className="right-arrow-container">
                <img src={RightArrow} height={30} alt='right arrow'/>
            </div>
            <div className='about-us-container'>
                <h1>ABOUT US</h1>
                <div className='about-us-content'>
                    <div className='about-us-content-left box'>
                        <h3>
                            WALTZ 23
                        </h3>
                        <div className='box1'>
                        <p>
                        UIT is a top engineering college with quality education, excellent infrastructure, experienced faculty, and a dynamic student community that promotes extracurricular activities and hosts various events.
                        </p></div>
                    </div>
                    <div className='about-us-content-right box'>
                        <h3>
                            UIT BURDWAN
                        </h3>
                        <p>
                        Waltz, the cultural fest of UIT, brings students from across the country to showcase their skills in music, dance, drama, and sports. It also offers alumni a chance to relive their college memories.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs