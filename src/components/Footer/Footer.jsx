import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {faFacebook, faTwitter,faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return(
    <div className='wrapper'>
        <div className="footer">
            <div className="first-child">
                <div className="left-col">
                    <h1>WALTZ 20<span>23</span></h1>
                    <p>Waltz, the cultural fest of UIT, brings students from across the country to showcase their skills in music, dance, drama, and sports. It also offers alumni a chance to relive their college memories.</p>

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
                            <li><Link to={"/gallery"}>Galleries</Link></li>
                            <li><a href="#About">Know more</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="last-child">
                <p>Contact with us on:</p>
                <div className="icons">
                    <a href="https://instagram.com/waltz.uitbu?igshid=YmMyMTA2M2Y="><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/waltz.uit"><FontAwesomeIcon className='icon' icon={faFacebook}/></a>
                    <a href="twitter.com"><FontAwesomeIcon className='icon' icon={faTwitter} /></a>
                    <a href="https://www.youtube.com/@uitwaltz23/"><FontAwesomeIcon className='icon' icon={faYoutube} /></a>
                </div>
                <p><a href="https://codingjunction2022.ml/">Coding Junction</a> 2023. All rights reserved</p>
            </div>
        </div>
        </div>
    )
}

export default Footer;