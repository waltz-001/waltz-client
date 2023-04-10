import React, {useState} from 'react';
import SearchIcon from '../../assests/images/searchIcon.png';
import UserIcon from '../../assests/images/userIcon.png';
import './Navbar.css';

const Navbar = () => {
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY>=80)
        setNavBar(true)
        else
        setNavBar(false)
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={navBar?'navbar-container active':'navbar-container'}>
            <div className='navbar-option-list'>
                <ul>
                    <li><a href='#home'>HOME</a></li>
                    <li><a href='#about-us'>ABOUT US</a></li>
                    <li><a href='#sponsors'>SPONSORS</a></li>
                    <li><a href='#contact-us'>CONTACT US</a></li>
                </ul>
            </div>
            <div className='navbar-option-icons'>
                <img src={SearchIcon} height={19} alt='search-icon' />
                <img src={UserIcon} height={19} alt='user-icon' />
            </div>
        </div>
    )
}

export default Navbar