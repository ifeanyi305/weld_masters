import React from 'react';
import { MdOutlineSend } from 'react-icons/md';

const Skills = () => {
  const x = 'Qualities';

  return (
    <div id="skills">
      <h1 className="project-title">
        <MdOutlineSend />
        <b>{x}</b>
      </h1>
      <div
        data-aos="fade-up"
      >
        <div className="qualities">
          <ul>
            <li>Ability to read and interpret technical drawings and blueprints</li>
            <li>Knowledge of welding materials such as steel, aluminum, and copper</li>
            <li>Understanding of safety procedures and regulations related to welding</li>
            <li>Experience with welding machines, tools, and equipment</li>
            <li>Attention to detail and ability to maintain accuracy in welding work</li>
            <li>Ability to work with precision measuring tools such as calipers and micrometers</li>
            <li>
              Proficiency in cutting and shaping metal using
              tools such as plasma cutters, saws, and grinders
            </li>
            <li>
              Ability to perform basic math calculations
              and use computer software to record and track work
            </li>
            <li>Knowledge of different welding joints and techniques for joining metals</li>
            <li>
              Familiarity with different welding positions
              such as overhead, horizontal, and vertical
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
