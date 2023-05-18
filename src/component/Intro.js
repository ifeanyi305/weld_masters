/*eslint-disable*/
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { BsGithub, BsLinkedin, BsLink45Deg } from 'react-icons/bs';
import { SiMedium } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const Intro = () => {
  const [isIntro, setIntro] = useState(false);
  const handleIntro = () => {
    setIntro(!isIntro);
  };
  return (
    <section className="intro-section" id="home">
      <main className="main">
        <div>
          <p className="typeAnimation">
            <TypeAnimation
              className="typing-text"
              sequence={[
                'Welcome to Weld masters',
                1000,
                'We build and we deploy',
                1000,
                'Glad to see you',
              ]}
              wrapper="div"
              cursor
              repeat={Infinity}
              style={{ fontSize: '2em' }}
            />
          </p>
          <div className="into-heading">
            <ul className="intro-list">
              <li><a href="https://medium.com/@otijoseph305/the-future-of-web-development-cc4a7dbf10ff" target="_blank" rel="noreferrer"><SiMedium aria-label="Mute volume" /></a></li>
              <li><a href="https://github.com/ifeanyi305" target="_blank" rel="noreferrer"><BsGithub aria-label="Mute volume" /></a></li>
              <li><a href="https://www.linkedin.com/in/oti-joseph-ifeanyi/" target="_blank" rel="noreferrer"><BsLinkedin aria-label="Mute volume" /></a></li>
            </ul>
            <div>
              <h1>Here to serve you better</h1>
              <p>
                Weld Masters is a leading welding company that provides
                exceptional service to its customers. With a team of skilled
                and experienced welders, Weld Masters is committed to delivering
                high-quality results that exceed expectations. The company
                is dedicated to serving its customers better, offering
                innovative solutions and expert guidance throughout
                every project.
              </p>
            </div>
          </div>
          <button className="contact-btn" type="button" onClick={handleIntro}>Contact Us</button>
        </div>
      </main>
      <ul onClick={handleIntro} className={isIntro ? 'intro-list2' : 'intro-none'}>
        <li>
          <button type="button">
            <a href="https://medium.com/@otijoseph305/the-future-of-web-development-cc4a7dbf10ff" target="_blank" rel="noreferrer">
              <SiMedium />
              {' '}
              Medium
            </a>
          </button>
        </li>
        <li>
          <button type="button">
            <a href="https://www.linkedin.com/in/oti-joseph-ifeanyi/" target="_blank" rel="noreferrer">
              <BsLinkedin />
              {' '}
              Linkedin
            </a>
          </button>
        </li>
        <li>
          <button type="button">
            <a href="https://docs.google.com/document/d/102o_13jZXeXb1BhVK-gaE54Ht3f8kY988hebeuKjJDE/edit" target="_blank" rel="noreferrer">
              <BsLink45Deg />
              {' '}
              Resume
            </a>
          </button>
        </li>
        <li>
          <button type="button">
            <a href="mailto:otijoseph305@gmail.com" target="_blank" rel="noreferrer">
              <HiOutlineMail />
              {' '}
              Email
            </a>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Intro;
