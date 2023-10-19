import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTools, faBriefcase, faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';



// Wrap each FontAwesome icon and text in a container
const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  .active-icon {
    font-size: 26px; 
    color: #854ce6;
    transition: all 0.3s ease;
  }
`;

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
          <Link to="about" spy={true} smooth={true} duration={50} onSetActive={() => setActiveSection('about')}>
            <NavLink className={activeSection === 'about' ? 'active' : ''}>
              <NavItemContainer>
                <FontAwesomeIcon icon={faUser} className={activeSection === 'about' ? 'active-icon' : ''} />
                <span className={activeSection === 'about' ? 'active-text' : ''}>About</span>
              </NavItemContainer>
            </NavLink>
          </Link>
          <Link to="skills" spy={true} smooth={true} duration={50} onSetActive={() => setActiveSection('skills')}>
            <NavLink className={activeSection === 'skills' ? 'active' : ''}>
              <NavItemContainer>
                <FontAwesomeIcon icon={faTools} className={activeSection === 'skills' ? 'active-icon' : ''} />
                <span className={activeSection === 'skills' ? 'active-text' : ''}>Skills</span>
              </NavItemContainer>
            </NavLink>
          </Link>
          <Link to="experience" spy={true} smooth={true} duration={50} onSetActive={() => setActiveSection('experience')}>
            <NavLink className={activeSection === 'experience' ? 'active' : ''}>
              <NavItemContainer>
                <FontAwesomeIcon icon={faBriefcase} className={activeSection === 'experience' ? 'active-icon' : ''} />
                <span className={activeSection === 'experience' ? 'active-text' : ''}>Experience</span>
              </NavItemContainer>
            </NavLink>
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={50} onSetActive={() => setActiveSection('projects')}>
            <NavLink className={activeSection === 'projects' ? 'active' : ''}>
              <NavItemContainer>
                <FontAwesomeIcon icon={faCode} className={activeSection === 'projects' ? 'active-icon' : ''} />
                <span className={activeSection === 'projects' ? 'active-text' : ''}>Projects</span>
              </NavItemContainer>
            </NavLink>
          </Link>
          <Link to="education" spy={true} smooth={true} duration={50} onSetActive={() => setActiveSection('education')}>
            <NavLink className={activeSection === 'education' ? 'active' : ''}>
              <NavItemContainer>
                <FontAwesomeIcon icon={faGraduationCap} className={activeSection === 'education' ? 'active-icon' : ''} />
                <span className={activeSection === 'education' ? 'active-text' : ''}>Education</span>
              </NavItemContainer>
            </NavLink>
          </Link>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(!isOpen)}>Experience</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
