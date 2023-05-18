import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiMedium } from 'react-icons/si';

const Footer = () => (
  <footer>
    <small><b>&copy; All rights reserved</b></small>
    <ul>
      {/* eslint-disable-next-line */}
      <li><a href="https://medium.com/@otijoseph305/the-future-of-web-development-cc4a7dbf10ff" target="_blank" rel="noreferrer"><SiMedium /></a></li>
      {/* eslint-disable-next-line */}
      <li><a href="https://github.com/ifeanyi305" target="_blank" rel="noreferrer"><BsGithub /></a></li>
      {/* eslint-disable-next-line */}
      <li><a href="https://www.linkedin.com/in/oti-joseph-ifeanyi/" target="_blank" rel="noreferrer"><BsLinkedin /></a></li>
    </ul>
  </footer>
);

export default Footer;
