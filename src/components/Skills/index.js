import React from 'react';
import styled, { keyframes } from 'styled-components';
import { skills } from '../../data/constants';
import "./skills.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 150px 0 0 0; /* Decreased the padding */
  }
 
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 800px; /* Decreased the max-width */
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px; /* Decreased the font size */
  text-align: center;
  font-weight: 600;
  padding: 70px 0 20px 0;
  margin-top: 50px; /* Decreased the margin-top */
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 20px; /* Decreased the margin-top */
    font-size: 24px; /* Decreased the font size */
    padding: 300px 0 0 0;
    
    
  }
  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: transform 0.9s ease-in-out;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Display cards in two columns */
  gap: 20px; /* Adjusted gap between cards */
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 20px 8px 12px 8px;
    grid-template-columns: repeat(1, 1fr); /* Display cards one by one on mobile */
    display: flex;
    flex-direction: column;
    align-items: center; /* Center-align the skill cards on mobile */
  }
  @media (max-width: 500px) {
    font-size: 12px;
    padding: 16px 8px 6px 8px;
  }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 400px; /* Decreased the max-width */
  background: ${({ theme }) => theme.card};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 12px; /* Decreased the border radius */
  padding: 16px 24px; /* Adjusted padding */
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
    border: 1px solid #854CE6;
  }
  @media (max-width: 768px) {
    max-width: 300px; /* Decreased the max-width */
    padding: 10px 24px; /* Adjusted padding */
    border: 1px solid #854CE6;
  }
  @media (max-width: 500px) {
    max-width: 250px; /* Decreased the max-width */
    padding: 10px 20px; /* Adjusted padding */
    border: 1px solid #854CE6;
  }
`;

const SkillTitle = styled.h2`
  font-size: 24px; /* Decreased the font size */
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 16px; /* Decreased the margin-bottom */
  text-align: center;
  &:hover {
    color: white;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px; /* Decreased the gap */
  margin-bottom: 16px; /* Decreased the margin-bottom */
`;

const SkillItem = styled.div`
  font-size: 14px; /* Decreased the font size */
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 10px; /* Decreased the border radius */
  padding: 8px 12px; /* Adjusted padding */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px; /* Decreased the gap */
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
  &:hover {
    background: -webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%);
    border-color: rgb(133, 76, 230);
    color: white;
    transform: scale(1.1) rotate(-15deg);
  }
  @media (max-width: 768px) {
    font-size: 12px; /* Decreased the font size */
    padding: 6px 10px; /* Adjusted padding */
  }
  @media (max-width: 500px) {
    font-size: 12px; /* Decreased the font size */
    padding: 4px 10px; /* Adjusted padding */
  }
`;

const spinInAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinOutAnimation = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const SkillImage = styled.img`
  width: 20px; /* Decreased the width */
  height: 20px; /* Decreased the height */
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2) rotate(360deg);
    animation: ${spinInAnimation} 1s linear forwards;
  }
  &:not(:hover) {
    animation: ${spinOutAnimation} 1s linear forwards;
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem className='sItem'>
                    <SkillImage className="sImage" src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
