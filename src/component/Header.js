/*eslint-disable*/
import React, { useState } from 'react';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import logo from './images/mylogo.jpg';

const Header = () => {
  const [openNav, setNavbar] = useState(false);
  const toggleNav = () => {
    setNavbar(!openNav);
  };
  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <img src={logo} height={50} width={80} alt="my logo" />
        </div>
        <div className="telephone">
          <span><BsFillTelephonePlusFill /></span>
          <small className="header_links">
            <a href="tel:+2347067255308" target="_blank" rel="noreferrer">+2347067255308</a>
          </small>
        </div>
        <div className="telephone">
          <span><FiMail /></span>
          <small className="header_links">
            <a href="mailto:otijoseph305@gmail.com" target="_blank" rel="noreferrer">otijoseph305@gmail.com</a>
          </small>
        </div>
      </div>
      <ul onKeyDown={toggleNav} onClick={toggleNav} className={openNav ? 'hamburgerOn' : 'hamburgerOff'}>
        <li onClick={toggleNav}><a href="#home">Home</a></li>
        <li onClick={toggleNav}><a href="#about">About</a></li>
        <li onClick={toggleNav}><a href="#project">Project</a></li>
        <li onClick={toggleNav}><a href="#skills">Skills</a></li>
        <li onClick={toggleNav}><a href="#education">Education</a></li>
        <li onClick={toggleNav}><a href="#recommendations">Recommendations</a></li>
        <li onClick={toggleNav}><a href="#connect">Get in touch</a></li>
      </ul>
      <div className="humbuger" onClick={toggleNav}>
        {openNav ? (<AiOutlineCloseCircle />) : (<GiHamburgerMenu />)}
      </div>
    </div>
  );
};

export default Header;
