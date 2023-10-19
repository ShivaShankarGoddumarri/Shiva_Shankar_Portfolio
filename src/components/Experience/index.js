import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { experiences } from '../../data/constants';
import ExperienceCard from '../Cards/ExperienceCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    height: 110vh;
    padding: 40px 0px 0px 0px;
    
    @media (max-width: 960px) {
        height: auto;
        padding: 20px 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    margin-top: -60px;
    
    @media (max-width: 960px) {
        flex-direction: column;
        padding: 40px 0;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 100px;
    padding: 20px 0px -60px 0px;
    color: ${({ theme }) => theme.text_primary};
    margin-right:-450px;
    @media (max-width: 768px) {
        margin-top: 50px;
        font-size: 32px;
       margin-right:10px;
    }
`;

const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:-180px;
    
    @media (max-width: 960px) {
        flex: 0;
    }
`;

const Image = styled.img`
    max-width: 85%;
    max-height: 85%;
    @media (max-width: 960px) {
      max-width: 80%;
    max-height: 80%;
    margin-bottom:10px;
    margin-top:240px;
    }
`;

const RightContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-right: 120px;
    margin-top:-80px;
    
    @media (max-width: 960px) {
        margin: 0;
    }
`;



const MyComponent = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Container id="experience">
        <Title data-aos="zoom-in-down">EXPERIENCE</Title>
            <Wrapper data-aos="zoom-out-up">
            
                <LeftContainer>
                    <Image src="work.png" alt="Image" data-aos="fade-right" />
                </LeftContainer>
                <RightContainer>
                    
                    {experiences.map((experience, index) => (
                        <ExperienceCard experience={experience} key={index} />
                    ))}
                </RightContainer>
            </Wrapper>
        </Container>
    );
};

export default MyComponent;
