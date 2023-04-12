import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return(
    <div className='wrapper'>
        <div className="footer">
            <div className="first-child">
                <div className="left-col">
                    <h1>WALTZ 20<span>23</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur esse cumque quos iste. Laudantium sapiente quia assumenda et doloremque id dolorem sequi, non illum unde quam, eaque ullam neque?</p>

                </div>
                <div className="right-col">
                    <div className="left-list">
                        <ul>
                            <li><a href="#About">About us</a></li>
                            <li><a href="#About">FAQs</a></li>
                            <li><a href="#About">SPP</a></li>
                            <li><a href="#About">About Theme</a></li>
                        </ul>
                    </div>
                    <div className="right-list">
                        <ul>
                            <li><a href="#About">Events</a></li>
                            <li><a href="#About">News</a></li>
                            <li><a href="#About">Galleries</a></li>
                            <li><a href="#About">Know more</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="last-child">
                <p>Contact with us on:</p>
                <div className="icons">
                    <a href="facebook.com"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                    <a href="facebook.com"><FontAwesomeIcon className='icon' icon={faFacebook}/></a>
                    <a href="facebook.com"><FontAwesomeIcon className='icon' icon={faTwitter} /></a>
                    <a href="facebook.com"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                </div>
                <p>@waltz 2023. All rights reserved</p>
            </div>
        </div>
        </div>
    )
}

export default Footer;