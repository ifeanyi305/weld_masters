/* eslint-disable react/prop-types */
import React from 'react';

const Myskills = ({ skill }) => (
  <div className="skills-con">
    <div className="skillImg-con"><img className="skill-img" src={skill.img} alt={skill.name} /></div>
    <p>{skill.name}</p>
  </div>
);

export default Myskills;
