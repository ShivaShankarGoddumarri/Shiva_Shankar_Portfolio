import React from 'react'
import styled,{ keyframes } from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`
const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`
const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;   
`


const Name = styled.div`
    font-size: 25px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    transition: all 0.4s ease-in-out;
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Degree = styled.div`
    font-size: 25px;
    font-weight: 500;
    color: white;
   
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }  
`
// Define a keyframes animation for spinning
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
// Styled components for styling the gear icon and defining the spin animation
const GearIcon1 = styled.img`
  width: 30px; // Adjust the width and height as needed
  height: 30px;
  margin-right: 5px; // Add some spacing between the gear icon and the Branch text
  transition: transform 0.2s;
  &:not(:hover) {
    animation: ${spinInAnimation} 3s linear alternate; 
  }
  @media only screen and (max-width: 768px) {
    height: 15px;
    width: 15px;
  }
`;

const GearIcon2 = styled.img`
  width: 20px; // Adjust the width and height as needed
  height: 20px;
  margin-right: 5px; // Add some spacing between the gear icon and the Branch text
  transition: transform 0.2s;
  margin-left: -8px;
  
  &:not(:hover) {
    animation: ${spinOutAnimation} 3s linear alternate; 
  }
  @media only screen and (max-width: 768px) {
    height: 10px;
    width: 10px;
  }
`;

const Branch = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 80};
   
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Date = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }   
`
const Card = styled.div`
    width: 750px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
        border: 0.1px solid #854CE6;
    }

    &:hover ${Document}{
        display: flex;
      
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
        
    }

    &:hover {
        transform: scale(1.05) translateY(-5px);
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);  
        border: 0.1px solid #854CE6;
    }

    &:hover {
    ${Date} {
        color: white;
    }
    ${GearIcon1}{
            transform: scale(1.2) rotate(360deg);
            animation: ${spinInAnimation} 1s linear alternate;   
        }
        ${GearIcon2}{
            transform: scale(1.2) rotate(360deg);
            animation: ${spinOutAnimation} 1s linear alternate; 
        }
    } 
`
const EducationCard = ({ education, index }) => {
  return (
      <Card>
          <Top>
              <Body>
                  <Name>{education.school}</Name>
                  <Degree>{education.degree}</Degree>
                  <div>
                      <Branch><GearIcon1 src="gear.png" alt="Gear Icon"  style={{ animationIterationCount: 'infinite' }} /><GearIcon2 src="gear.png" alt="Gear Icon"   style={{ animationIterationCount: 'infinite' }} />{education.branch}</Branch>
                  </div>
                  <Date>{education.date}</Date>
              </Body>
          </Top>
      </Card>
  );
};
export default EducationCard;