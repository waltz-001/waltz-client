import React from 'react';
import LandingScreen from '../components/LandingScreen/LandingScreen';
import Event from '../components/Event/Events'
import AboutUs from '../components/AboutUs/AboutUs';
import Sponsors from '../components/Sponsors/Sponsors';
import ContactUs from '../components/ContactUs/ContactUs';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer.jsx';

const HomePage = () => {
    return (
        <div className='home-page'>
            <LandingScreen />
            <Event/>
            <AboutUs />
            <Sponsors />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default HomePage
