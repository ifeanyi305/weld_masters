import { MdOutlineSend } from 'react-icons/md';
import React from 'react';
import Myproject from './Myproject';
import handRail from './images/handRail.jpg';
import step from './images/stepRail.jpg';
import fenceRail from './images/fence.jpg';
import working from './images/working.jpg';
import curvyStepRail from './images/curvyStepRail.jpg';
import bulletProof from './images/door.jpg';

const project = [
  {
    name: 'Bullet proof door',
    id: 1,
    img: bulletProof,
    desc: 'Wrought_iron bullet proof door, built with fibre, wrought iron..., it has the ability to retain bullets from gun.',
  },
  {
    name: 'Fence Rail',
    id: 2,
    img: fenceRail,
    desc: 'Wrought Iron fence rail, built with wrought iron',
  },
  {
    name: 'Mounting step rails',
    id: 3,
    img: working,
    desc: 'Mounting a step rail, built with wrought iron',
  },
  {
    name: 'HandRail',
    id: 4,
    img: handRail,
    desc: 'Wrought Iron Hand rail, built with wrought iron',
  },
  {
    name: 'Step Rail',
    id: 5,
    img: step,
    desc: 'Wrought Iron fence rail, built with wrought iron',
  },
  {
    name: 'curvyStepRail',
    id: 6,
    img: curvyStepRail,
  },
];

const Project = () => (
  <div id="project">
    <h1 className="project-title">
      <MdOutlineSend />
      <b>Projects</b>
    </h1>
    <div className="grid-container">
      {
          project.map((allProject) => (
            <Myproject allProject={allProject} key={allProject.id} />
          ))
        }
    </div>
  </div>
);

export default Project;
