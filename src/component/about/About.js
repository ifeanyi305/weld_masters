/*eslint-disable*/
import React from 'react';
import { MdOutlineSend } from 'react-icons/md';
import myself from '../images/myself.jpg';

const About = () => {

  return (
    <div data-aos="fade-up" id="about">
      <h1>
        <MdOutlineSend />
        <b>About us</b>
      </h1>
      <div className="about-me">
        <div className="about-desc">
          <p className="">
            Weld Masters is not your average welding company - our USP is our unwavering commitment to customer satisfaction. With over 7 years of experience in the industry, we've built a reputation for excellence, quality, efficiency, and quick delivery, but what really sets us apart is our dedication to serving our customers better.

            <p>
              Our team of skilled and experienced welders approaches every project with attention to detail and a focus on delivering results that exceed expectations. We take the time to understand our customers' unique needs and work closely with them to find innovative solutions that meet their specific requirements.
            </p>

            <p>
              In addition to our welding services, we offer consulting services to our clients, providing expert guidance on welding processes, materials, and techniques. We believe that by sharing our knowledge and expertise, we can help our clients make informed decisions and achieve the best possible outcomes for their projects.
            </p>

            <p>
              At Weld Masters, we pride ourselves on our ability to deliver exceptional results on time and within budget. Our efficiency and quick turnaround times have earned us a reputation as a reliable and trustworthy welding company
            </p>
            <p>
              Overall, our USP is our commitment to serving our customers better. We believe that by putting our customers first and working closely with them throughout the entire project, we can deliver exceptional results that exceed expectations. With Weld Masters, you can be confident that your welding project is in good hands.
            </p>
          </p>
        </div>
        <div>
          <iframe
            width="400"
            height="450"
            className="weld_masters"
            src="https://www.youtube.com/embed/tqkiNCE5ILc?controls=0&loop=1&playlist=tqkiNCE5ILc&autoplay=1&mute=1"
            title="weld_masters"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
