import React from 'react';
import LandingScreen from '../components/LandingScreen/LandingScreen';
import AboutUs from '../components/AboutUs/AboutUs';
import Sponsors from '../components/Sponsors/Sponsors';
import ContactUs from '../components/ContactUs/ContactUs';
import Socials from '../components/Socials/Socials';


const HomePage = () => {
    return (
        <div className='home-page'>
            <LandingScreen />
            <Socials />
            <AboutUs />
            <Sponsors />
            <ContactUs />
            
        </div>
    )
}

export default HomePage