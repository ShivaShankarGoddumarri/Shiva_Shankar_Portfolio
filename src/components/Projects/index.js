import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Wrapper, Title, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
    });
  }, []);

  return (
    <Container id="projects">
      <Wrapper>
        <Title  data-aos="zoom-in-down">PROJECTS</Title>
        <ToggleButtonGroup data-aos="zoom-in-up">
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Self Core Projects' ?
            <ToggleButton active value="Self Core Projects" onClick={() => setToggle('Self Core Projects')}>Self Core Projects</ToggleButton>
            :
            <ToggleButton value="Self Core Projects" onClick={() => setToggle('Self Core Projects')}>Self Core Projects</ToggleButton>
          }
          
        </ToggleButtonGroup>
        <CardContainer data-aos="zoom-in-down">
          {toggle === 'all' && projects.map((project) => (
            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}  key={project.id} />
          ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}  key={project.id} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;