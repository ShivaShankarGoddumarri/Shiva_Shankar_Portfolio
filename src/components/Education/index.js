import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0 0 100px 0;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row; /* Changed from column to row for image placement */
    width: 100%;
    max-width: 1350px;
   /* Adjusted padding for image placement */
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
        align-items: center; /* Center content vertically on smaller screens */
    }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* Add a custom clip-path to shape the image */
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%);
  @media (max-width: 768px) {
    /* Set specific styles for screens with a max-width of 768px (typical mobile screens) */
    max-width: 100%; /* Adjust the maximum width for smaller screens as needed */
    height: auto; /* Allows the image to maintain its aspect ratio */
  }
`;

const EducationWrapper = styled.div`
    flex: 2; /* Added flex property to take up available space */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const Image = styled.img`
   /* You can set a maximum height */
  width: 65; /* Ensure the image maintains its aspect ratio */
  height:65vh; /* Ensure the image maintains its aspect ratio */
  display: block;
  margin: 0 auto;
  @media (max-width: 768px) {
    /* Set specific styles for screens with a max-width of 768px (typical mobile screens) */
    max-width: 100%; /* Adjust the maximum width for smaller screens as needed */
    height: auto; /* Allows the image to maintain its aspect ratio */
  }
`;

const Title = styled.div`
    font-size: 55px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    padding: 50px 0 0 0;
    &:hover {
        color: ${({ theme }) => theme.primary};
        transition: transform 0.9s ease-in-out;
    }
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;



const index = () => {
    return (
        <Container id="education">
        <Title>Education</Title>
            <Wrapper >
            
                <ImageWrapper>
                
                    <Image src="https://github.com/ShivaShankarGoddumarri/User-Images/assets/96565316/13996ad6-eba8-452e-b1a7-6e96862ad412" alt="Education Image" />
                   
                </ImageWrapper>
                <EducationWrapper>
                   
                    {education.map((education, index) => (
                        <EducationCard  education={education} key={index} />
                    ))}
                </EducationWrapper>
            </Wrapper>
        </Container>
    );
};


export default index;
