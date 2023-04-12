import React from 'react';
import SocialsUp from '../../assests/images/socialsUp.svg';
import SocialsDown from '../../assests/images/socialsDown.svg';
import Blank from '../../assests/images/blanck.png';
import './Socials.css';

const Socials = () => {
    return (
        <div id="Socials" className="socials-container">
            <div className="socials">
                <img className="socialup" src={SocialsUp} alt="SocialUp" />
                <div className="socials-contains">
                    <div className="img1">
                        <img className="blank" src={Blank} alt="blank" />
                    </div>
                    <div className="content-box">
                        <h1>Socials</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque consectetur doloribus? Obcaecati, quisquam quia dicta officiis temporibus soluta! Animi?</p>
                        <span className="Event">Upcoming Events:</span><span> Social Media Content Creation</span>
                    </div>
                </div>
            </div>
            <div className="summit">
                <img className="socialdown" src={SocialsDown} alt="SocialsDown" />
                <div className="summit-contains">
                    <div id="summit" className="content-box">
                        <h1>Summit</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque consectetur doloribus? Obcaecati, quisquam quia dicta officiis temporibus soluta! Animi?</p>
                        <span className="Event">Upcoming Events:</span><span> Social Media Content Creation</span>
                    </div>
                    <div className="img2">
                        <img className="blank2" src={Blank} alt="blank" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials
