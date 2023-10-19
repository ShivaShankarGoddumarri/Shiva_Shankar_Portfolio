import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about'); 
  const theme = useTheme();

  useEffect(() => {

    scrollSpy.update();

    // Added scroll event listener to update the active section
    Events.scrollEvent.register('begin', (to, element) => {
      setActiveSection(to);
    });

    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>
        <NavItems>
        <Link to="about" spy={true} smooth={true}  duration={50} onSetActive={() => setActiveSection('about')}>
         <NavLink  className={activeSection === 'about' ? 'active' : ''}>ABOUT</NavLink>
        </Link>
          <Link to="skills" spy={true} smooth={true} duration={50} onSetActive={() => setActiveSection('skills')}>
            <NavLink  className={activeSection === 'skills' ? 'active' : ''}>SKILLS</NavLink>
          </Link>
          <Link to="experience" spy={true} smooth={true} duration={50} onSetActive={() => setActiveSection('experience')}>
            <NavLink className={activeSection === 'experience' ? 'active' : ''}>EXPERIENCE</NavLink>
          </Link>
          <Link to="projects" spy={true} smooth={true}  duration={50} onSetActive={() => setActiveSection('projects')}>
            <NavLink className={activeSection === 'projects' ? 'active' : ''}>PROJECTS</NavLink>
          </Link>
          <Link to="education" spy={true} smooth={true}  duration={50} onSetActive={() => setActiveSection('education')}>
            <NavLink className={activeSection === 'education' ? 'active' : ''}>EDUCATION</NavLink>
          </Link>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen);
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen);
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen);
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen);
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen);
            }}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
