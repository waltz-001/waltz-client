import React from 'react';
import './LandingScreen.css';
import Logo from '../../assests/images/logo.png';
import Timer from '../../utils/Timer/Timer';

const LandingScreen = () => {
    return (
        <div id='home' className='landing-container'>
            <div className='landing-content'>
                <div className='landing-logo-container'>
                    <img src={Logo} alt='logo' />
                </div>
                <Timer />
                <div className='landing-button-container'>
                    <div className="button-solid-round view-btn">
                        <p>VIEW DETAILS</p>
                    </div>
                    <div className="button-solid-round register-btn">
                        <p>RESGISTER NOW</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingScreen