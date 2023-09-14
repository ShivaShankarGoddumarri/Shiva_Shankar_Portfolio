
import React from 'react'
import styled from 'styled-components'
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
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 55px;
text-align: center;
font-weight: 600;
margin-top: 20px;
&:hover{
   color:  ${({ theme }) => theme.primary};
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
        <Container id="education" >
            <Wrapper >
                <Title>Education</Title>
               
                        {education.map((education,index) => (
 
                               <EducationCard education={education}/>
 
                        )
                        )
                        }
                        
            </Wrapper>
        </Container>
    )
}

export default index