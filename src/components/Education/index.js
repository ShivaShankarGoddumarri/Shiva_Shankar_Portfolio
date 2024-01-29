import React, { useEffect } from 'react'; 
import styled from 'styled-components';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 120px 0px;
    @media (max-width: 960px) {
        padding: 0 0 100px 0;
        margin-top: -50px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row; 
    width: 100%;
    max-width: 1200px;
    gap: 12px;
    margin-top:50px;
    @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        
    }
`;

const EducationWrapper = styled.div`
    flex: 2; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top:-40px;
    
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top:40px;
    margin-bottom: 20px;
    margin-right:-600px;
    padding: 70px 0 20px 0;
    color: white;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
        margin-right:-5px;
    }
`;

const Image = styled.img`
  width: 500px; 
  height: 500px;
  margin-right: 20px;
  margin-top:-40px;
  @media (max-width: 768px) {
       height: 300px;
       width: 300px;
       margin-bottom:40px;
    }
`;

const Education = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        offset: 200,
      });
  
      AOS.refresh();
  
      return () => {
        AOS.refresh();
      };
    }, []);
  
    return (
      <Container id="education">
        <Title data-aos="zoom-in-down">EDUCATION</Title>
        <Wrapper>
          <Image src="Education.png" alt="Your Image Alt Text" data-aos="fade-right" />
          <EducationWrapper data-aos="zoom-in-left">
            {education.map((education, index) => (
              <EducationCard
                education={education}
                key={index}
                
              />
            ))}
          </EducationWrapper>
        </Wrapper>
      </Container>
    );
  };
  
  export default Education;
