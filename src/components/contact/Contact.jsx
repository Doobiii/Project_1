import React from 'react'
import './contact.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import {IoCallOutline, IoMailOutline} from 'react-icons/io5'
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
        <iframe className='map' width="360" height="260" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=260&amp;hl=en&amp;q=NIT%20Silchar,%20silchar-788010,%20Assam%20,%20India+(NSS%20-%20NIT%20Silchar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
        </div>
      </div>

    </div>
  )
}

export default Contact