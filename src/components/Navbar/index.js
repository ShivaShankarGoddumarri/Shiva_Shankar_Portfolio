// Navbar.js
import React from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = ({ isOpen, onCloseResume }) => {
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={onCloseResume} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        {!isOpen && (
          <ButtonContainer>
            <GitHubButton href={Bio.github} target="_blank">
              Github Profile
            </GitHubButton>
          </ButtonContainer>
        )}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={onCloseResume}>
              About
            </MobileLink>
            <MobileLink href='#skills' onClick={onCloseResume}>
              Skills
            </MobileLink>
            <MobileLink href='#experience' onClick={onCloseResume}>
              Experience
            </MobileLink>
            <MobileLink href='#projects' onClick={onCloseResume}>
              Projects
            </MobileLink>
            <MobileLink href='#education' onClick={onCloseResume}>
              Education
            </MobileLink>
            {!isOpen && (
              <GitHubButton
                style={{
                  padding: '10px 16px',
                  background: `${theme.primary}`,
                  color: 'white',
                  width: 'max-content',
                }}
                href={Bio.github}
                target="_blank"
              >
                Github Profile
              </GitHubButton>
            )}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
