import React from 'react';
import './contact.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import MapImage from '../images/img1.jpg'; // Import the square image here

const Contact = () => {
  const goFb = () => {
    window.location.replace('https://www.facebook.com/NIT.Silchar.Assam.India/');
  };

  const goIg = () => {
    window.location.replace('https://www.instagram.com/nss_nits/');
  };

  return (
    <div className='footer w-100'>
      <div className='footer-container'>
        <div className='info'>
          <div className='left'>
            <div className='address'>
              <h3 className='heading'>Address</h3>
              <p>
                NIT SILCHAR
                <br></br>
                Silchar-788010
                <br></br>
                Assam, IN
              </p>
            </div>
            <div className='contact-us'>
              <h3 className='heading'>Contact Us</h3>
              <div className='contact-icon'>
                <p><IoMailOutline />  mail@gmail.com</p>
                <p><IoCallOutline />   +91-9999900000</p>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='follow-link'>
              <h3 className='heading'>Follow Us</h3>
              <div className='iconsss'>
                <FaFacebookF className='icon fb' size={20} onClick={goFb} />
                <FaInstagram className='icon ig' size={25} onClick={goIg} />
              </div>
            </div>
            <div className='imp-link'>
              <h3 className='heading'>Important Links</h3>
              <ul className='listing'>
                <li>link_1</li>
                <li>link_2</li>
                <li>link_3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='g-map w-100'>
          {/* Apply Bootstrap grid classes to reduce the size of the image */}
          <img className='map img-fluid' src={MapImage} alt='Map' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
