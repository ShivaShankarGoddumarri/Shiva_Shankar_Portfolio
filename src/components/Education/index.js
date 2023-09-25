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
    padding: 0px 0px 120px 0px;
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



const EducationWrapper = styled.div`
    flex: 2; /* Added flex property to take up available space */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;


const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    padding: 70px 0 20px 0;
    color: white;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;



const index = () => {
    return (
        <Container id="education">
        <Title>EDUCATION</Title>
            <Wrapper >
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
