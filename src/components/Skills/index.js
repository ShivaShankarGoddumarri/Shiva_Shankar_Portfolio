import React, { useEffect } from 'react';
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
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 100px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
  &:hover{
   color:  ${({ theme }) => theme.primary};
   transition: transform 0.9s ease-in-out;
  }
`;



const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
  &:hover{
    border: 0.1px solid #854CE6;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
  &:hover{
    color: white;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;


const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease; /* Add a smooth transition effect */

  &:hover {
    background: -webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%); /* Change background to gradient on hover */
    border-color: rgb(133, 76, 230); /* Change border color on hover */
    color: white; /* Change text color to white on hover */
    transform: scale(1.20)rotate(-15deg); /* Zoom in effect on hover */
    
  
  }



  

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
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

// Define a keyframes animation for spinning out
const spinOutAnimation = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.2s;
 &:hover {
    transform: scale(1.2) rotate(360deg); /* Scale up and rotate 360 degrees on hover */
    animation: ${spinInAnimation} 1s linear forwards; /* Apply the spin in animation */
  }

  &:not(:hover) {
    animation: ${spinOutAnimation} 1s linear forwards; /* Apply the spin out animation */
  }
`;



const Skills = () => {
 
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
       
        <SkillsContainer>
          {skills.map((skill,index) => (
            <Skill data-aos={index%2==0?"fade-right":"fade-left"}>
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
