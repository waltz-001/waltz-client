import React from 'react';
import SponsorWave from '../../assests/images/sponsorWave.png';
import './Sponsors.css';

const Sponsors = () => {
    return (
        <div id='sponsors' className='sponsors-container'>
            <div className='sponsors-container-top-image'>
                <img src={SponsorWave} alt="sponsor" />
                {/* <img src={SponsorWave1} alt="sponsor1" /> */}
            </div>
            <div className='sponsors-content'>
                <h1>SPONSORS</h1>
                <p>Their support and partnership has been invaluable in making WALTZ 2023 possible</p>
                <div className='button-outline-transparent sponsor-btn'>
                    SPONSOR US
                </div>
            </div>
        </div>
    )
}

export default Sponsors