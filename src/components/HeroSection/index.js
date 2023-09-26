import React, { useState } from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import styled, { keyframes } from 'styled-components';

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOutToTop = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  backdrop-filter: blur(5px); /* Apply a blur effect to the background */
  z-index: 9998; /* Make sure it's below the modal but above the content */
  opacity: 0;
  visibility: hidden;
  transition: opacity 2s, visibility 2s;

  &.open {
    animation: ${slideInFromBottom} 1s ease-in-out;
    opacity: 1;
    visibility: visible;
  }

  &.close {
    animation: ${slideOutToTop} 3s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
`;

const ResumeModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  padding: 0 0 0 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 2s, visibility 2s;

  &.open {
    animation: ${slideInFromBottom} 1s ease-in-out;
    opacity: 1;
    visibility: visible;
  }

  &.close {
    animation: ${slideOutToTop} 3s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const ResumeModalContent = styled.div`
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  max-width: 90%;
  max-height: 95%;
  overflow: auto;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ResumeModalImage = styled.img`
  max-width: 95%;
  max-height: 95%;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px; /* Move the button to the top */
  right: -70px; /* Adjust the right position */
  text-decoration: none;
  padding: 10px 20px; /* Adjust padding for a smaller button */
  color: ${({ theme }) => theme.white};
  border-radius: 10px; /* Reduce border-radius for a smaller button */
  cursor: pointer;
  font-size: 14px; /* Reduce the font size */
  font-weight: 600;
  transition: all 0.3s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2), -10px -10px 30px rgba(0, 0, 0, 0.2);
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4), -10px -10px 30px rgba(0, 0, 0, 0.4);
    background: linear-gradient(225deg, hsla(271, 100%, 60%, 1) 0%, hsla(294, 100%, 60%, 1) 100%);
    filter: brightness(1.2);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Add text shadow */
  }
  @media (max-width: 768px) {
    right: 10px;
    font-size: 16px;
    margin-top: 650px;
    margin-right: 140px;
  }
`;

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div id="about" style={{ height: '100vh' }}>
      <h1>ABOUT</h1>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <SocialMediaIcons>
              <SocialMediaIcon href="mailto:ss3177806@gmail.com" target="display">
                <EmailIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href="tel:+91 8341943656" target="display">
                <PhoneIcon />
              </SocialMediaIcon>
              <SocialMediaIcon
                href="http://www.linkedin.com/in/shiva-shankar-goddumarri-458341196"
                target="display"
              >
                <LinkedInIcon />
              </SocialMediaIcon>
              <SocialMediaIcon
                href="https://www.instagram.com/shiva_shankar__goddumarri/"
                target="display"
              >
                <InstagramIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href="https://wa.me/8341943656" target="display">
                <WhatsAppIcon />
              </SocialMediaIcon>
            </SocialMediaIcons>
            <ResumeButton onClick={openResumeModal}>Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>

      {/* Resume Modal */}
      <BlurOverlay className={isResumeModalOpen ? 'open' : 'close'} />
      <ResumeModalContainer className={isResumeModalOpen ? 'open' : 'close'}>
        <ResumeModalContent>
          <ResumeModalImage src="Resume.jpg" alt="Resume" />
        </ResumeModalContent>
        <CloseButton onClick={closeResumeModal}>Close</CloseButton>
      </ResumeModalContainer>
    </div>
  );
};

export default HeroSection;
