import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id='about-us' className='about-us'>
            <div className='about-us-container'>
                <h1>ABOUT US</h1>
                <div className='about-us-content'>
                    <div className='about-us-content-left box'>
                        <h3>
                            WALTZ 23
                        </h3>
                        <div className='box1'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque consectetur doloribus? Obcaecati, quisquam quia dicta officiis temporibus soluta! Animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque consectetur doloribus? Obcaecati, quisquam quia dicta officiis temporibus soluta! Animi?
                        </p></div>
                    </div>
                    <div className='about-us-content-right box'>
                        <h3>
                            UIT BURDWAN
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque consectetur doloribus? Obcaecati, quisquam quia dicta officiis temporibus soluta! Animi?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs