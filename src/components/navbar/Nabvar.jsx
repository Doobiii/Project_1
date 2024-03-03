import './navbar.css'
import React, { useState } from 'react'

import { TfiAlignRight } from 'react-icons/tfi'
import { MdClose } from 'react-icons/md'
import { Link} from 'react-router-dom'


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color,setcolor] = useState(false);
  const changeColor=()=>{
    if(window.scrollY >=10){
      setcolor(true);
    }
    else setcolor(false);
  };

  window.addEventListener('scroll',changeColor);

  return (
    <div className={color ? 'header navbar sticky-top navbar-light navbar-fixed-top header-bg':'header navbar sticky-top navbar-light navbar-fixed-top'}>
    {/* <div className='header navbar sticky-top navbar-light navbar-fixed-top' > */}
      <Link to="/" className='navbar-brand '>
        <h2 style={{color:'white'}} className='nav-nss'>NSS-NIT Silchar</h2>

      </Link>
      <div className='nav-sec'>
        {/* <div className='navbar-nav'> */}
        <ul  className={click ? 'nav-menu navbar-nav' : 'nav-menu active navbar-nav'}>
          <li className='nav-item'>
            <Link to='/' className='nav-link' style={{color:'white'}}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/About' className='nav-link' style={{color:'white'}}>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/Event' className='nav-link' style={{color:'white'}}>Event</Link>
          </li>
          <li className='nav-item'>
            <Link to='/Team' className='nav-link' style={{color:'white'}}>Team</Link>
          </li>
        </ul>
        {/* </div> */}
        <div className='btn1 btn' onClick={handleClick}>
          {click ? (
            <MdClose size={25} style={{color:'white'}} />
          ) : (
            <TfiAlignRight size={20} style={{color:'white'}} />
          )}


        </div>
      </div>
    </div>

  )
}

export default Navbar