
import React from 'react'
import styled from 'styled-components'

import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    height: 90vh;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
  &:hover{
    color:  ${({ theme }) => theme.primary};
    transition: all 0.8s ease-in-out;
  }
  
`;







const index = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
               
                
                        {experiences.map((experience,index) => (
                           
                                    <ExperienceCard experience={experience}/>
                            
                        ))}
                   
            </Wrapper>
        </Container>
    )
}

export default index