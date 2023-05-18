/* eslint-disable react/prop-types */
/*eslint-disable*/
import React, { useState } from 'react';

const Myproject = ({ allProject }) => {
  const [ismodal, modalon] = useState(false);
  const handleModal = () => {
    modalon(!ismodal);
  };
  return (
    <>
      <div className="projects">
        <div data-aos="fade-up">
          <h1 className="project-name">{allProject.name}</h1>
          <ul>
            <li>{allProject.lang1}</li>
            <li>{allProject.lang2}</li>
            <li>{allProject.lang4}</li>
          </ul>
          <img onClick={handleModal} className="project-img" src={allProject.img} alt={allProject.name} />
          <h1 onClick={handleModal} className="project-btn">Open project</h1>
        </div>
      </div>
      <div onClick={handleModal} className={ismodal ? 'more-projects-on' : 'more-projects'}>
        <div className="project-wrapper">
          <div><img className="img2" src={allProject.img} alt={allProject.name} /></div>
          <div className="description">
            <h1>{allProject.name}</h1>
            <div>
              <p>{allProject.desc}</p>
              <ul className="lang-list">
                <li className="list-item">{allProject.lang1}</li>
                <li className="list-item">{allProject.lang2}</li>
                <li className="list-item">{allProject.lang4}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myproject;
