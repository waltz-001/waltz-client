import React from 'react';
import LandingScreen from '../components/LandingScreen/LandingScreen';
import AboutUs from '../components/AboutUs/AboutUs';
import Sponsors from '../components/Sponsors/Sponsors';
import ContactUs from '../components/ContactUs/ContactUs';

const HomePage = () => {
    return (
        <div className='home-page'>
            <LandingScreen />
            <AboutUs />
            <Sponsors />
            <ContactUs />
        </div>
    )
}

export default HomePage