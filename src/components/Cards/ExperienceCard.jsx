import React from 'react'
import styled, { keyframes } from 'styled-components';

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
const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 10px;
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
const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px; 
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;

    @media only screen and (max-width: 768px){
        font-size: 12px;
        padding: 0 100px 0 0;
        display: flex;
    }
`
const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 10px;
        padding: 2px 0 0 2px;
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

// Define a keyframes animation for spinning out
const spinOutAnimation = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  transition: transform 0.2s; /* Add a smooth transition for scaling */

  @media only screen and (max-width: 768px) {
    height: 40px;
  }


  &:not(:hover) {
    animation: ${spinOutAnimation} 1s linear forwards; /* Apply the spin out animation */
  }

`;
const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px ;
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
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;

    &:hover{
        ${Description}{
            color: white
        }
        ${Skill}{
            color: white
        }
        ${Image}{
            transform: scale(1.2) rotate(360deg); /* Scale up and rotate 360 degrees on hover */
            animation: ${spinInAnimation} 1s linear forwards; /* Apply the spin in animation */
        }
    }
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
const Role = styled.div`
    font-size: 24px;
    font-weight: 600;
    color:  ${({ theme }) => theme.primary};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: white;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
   
`
const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`
const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                           <b>Skills:</b> 
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill> • {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                        
                    </>
                }
            </Description>
           
        </Card>
    )
}

export default ExperienceCard