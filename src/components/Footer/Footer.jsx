import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {faFacebook, faTwitter,faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Icon } from "@iconify/react";
import CJ from "../../assests/images/CJ.png"
const Footer = () => {

    return (
      <div className="wrapper">
        <div className="footer">
          <div className="first-child">
            <div className="left-col">
              <h1>
                WALTZ 20<span>23</span>
              </h1>
              <p>
                Waltz, the cultural fest of UIT, brings students from across the
                country to showcase their skills in music, dance, drama, and
                sports. It also offers alumni a chance to relive their
                college memories.
              </p>
            </div>
            <div className="right-col">
              <div className="left-list">
                <ul>
                  <li>
                    <a href="#About">About us</a>
                  </li>
                  <li>
                    <a href="#About">FAQs</a>
                  </li>
                  <li>
                    <a href="#About">SPP</a>
                  </li>
                  <li>
                    <Link to={"/terms"}>Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="right-list">
                <ul>
                  <li>
                    <Link to={"/detailedEvents"}>Events</Link>
                  </li>
                  <li>
                    <a href="#About">News</a>
                  </li>
                  <li>
                    <Link to={"/gallery"}>Galleries</Link>
                  </li>
                  <li>
                    <a href="#About">Know more</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="last-child">
            <p>Contact with us on:</p>
            <div className="icons">
              <a href="https://instagram.com/waltz.uitbu?igshid=YmMyMTA2M2Y=">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/waltz.uit">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </a>
              <a href="https://www.linkedin.com/company/waltz-uit-2k23/about/">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>
              <a href="https://www.youtube.com/@uitwaltz23/">
                <FontAwesomeIcon className="icon" icon={faYoutube} />
              </a>
            </div>
            <p>
              <a href="https://codingjunction2022.ml/">
                <img src={CJ} alt="</Coding Junction>" style={{ height: 25 }} />
              </a>
              <br />
              <a href="https://codingjunction2022.ml/">
                Coding Junction 2023
                <Icon icon="pepicons-pop:open" width="22" color="fuchsia" />
                {". "}
              </a>
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer;
