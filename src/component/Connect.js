import React, { useState } from 'react';
import { MdOutlineSend } from 'react-icons/md';
import { useForm } from '@formspree/react';
import connect from './images/connect.png';

const Connect = () => {
  const [state, handleSubmit] = useForm('xrgvbbed');
  const [ismodal, modalon] = useState(false);
  const handleModal = () => {
    modalon(!ismodal);
  };
  if (state.succeeded) {
    return (
      <div className={ismodal ? 'thanks' : 'close-t'}>
        Thank you for you message, we&apos;ll get back to you shortly &#129303;
        <button type="button" onClick={handleModal}>Close</button>
      </div>
    );
  }
  return (
    <section id="connect">
      <h1 className="project-title">
        <MdOutlineSend />
        <b>Connect with me</b>
      </h1>
      <div className="connect-con" data-aos="fade-up">
        <div className="down">
          <div className="p-con">
            <h1 className="connect-title">
              <MdOutlineSend />
              <b>Get in touch</b>
            </h1>
            <p>
              If you like what you see and have a project you want to build
              Or if you just want to chat, please don&apos;t hesitate to get in touch with us.
            </p>
          </div>
          <button onClick={handleModal} className="contact-btn" type="button">Say Hello</button>
        </div>
        <div>
          <img className="wrap-img1" src={connect} alt="Connect with me" />
        </div>
      </div>
      <div className={ismodal ? 'more-projects-on' : 'more-projects'}>
        <p>
          If you like what you see and have a project you need coded
          Or if you just want to chat, please don&apos;t hesitate to get in touch with me.
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" required id="name" name="name" placeholder="Full Name" />
          <input type="email" id="email" name="email" required placeholder="Email address" />
          <textarea required id="message" name="message" rows="3" placeholder="message" />
          <div><button className="connect-btn" type="submit" disabled={state.submitting}>Send</button></div>
        </form>
        <button className="connect-btn red" onClick={handleModal} type="button">Close</button>
      </div>
    </section>
  );
};

export default Connect;
