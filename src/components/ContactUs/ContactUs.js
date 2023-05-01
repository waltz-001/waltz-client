import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div id='contact-us' className='contact-us-container'>
        <h1><span>CONTACT US</span></h1>
        <div className='contact-us-content'>
            <div className='contact-us-content-left'>
                <div className='email-us'>
                    <h3>Email Us on:</h3>
                    <ul>
                        <li>xyz@gmail.com</li>
                        <li>uit@gmail.com</li>
                    </ul>
                </div>
                <div className='call-us'>
                <h3>Call us on:</h3>
                    <ul>
                        <li>+91-294250825</li>
                        <li>+91-395859836</li>
                    </ul>
                </div>
            </div>
            <div className='contact-us-content-right'>
                <form>
                    <label>Name</label>
                    <input type='text'/>
                    <label>Email</label>
                    <input type='text'/>
                    <label>Message</label>
                    <textarea rows={3} />
                </form>
                <button>SUBMIT</button>
            </div>
        </div>
    </div>
    

  )
}

export default ContactUs