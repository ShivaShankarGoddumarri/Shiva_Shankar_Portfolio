import styled, { keyframes } from "styled-components";
export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 10px 16px 50px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;
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

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 15px;
  padding: 0 0 30px 18px ;
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0 20px 0;
  }
  
`;

// Define the keyframes for the ripple animation
const ripple = keyframes`
  to {
    transform: scale(2);
    opacity: 0;
  }
`;

export const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  color: ${({ theme }) => theme.white};
  font-size: 20px;
  text-decoration: none;
  overflow: hidden; /* Hide overflowing ripple */
  position: relative; /* Create a stacking context */
  transition: background-color 0.3s ease-in-out;
  
  &::before {
    content: "";
    position: absolute;
    background: radial-gradient(circle, transparent 1%, ${({ theme }) => theme.primary} 1%);
    background-size: 150% 150%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: scale(0);
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  &:hover::before {
    animation: ${ripple} 0.5s linear;
  }
  &:hover {
    transform: scale(1.2) rotate(360deg); /* Scale up and rotate 360 degrees on hover */
    animation: ${spinInAnimation} 1s linear forwards; /* Apply the spin in animation */
  }
  &:not(:hover) {
    animation: ${spinOutAnimation} 1s linear forwards; /* Apply the spin out animation */
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 150px 0 0 0;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    width: 150px;
    margin-top: -70px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
   
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
 
;  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color: ${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.3s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.2),  -20px -20px 60px rgba(0, 0, 0, 0.2);
               
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.4),
                    -20px -20px 60px rgba(0, 0, 0, 0.4);
        background: linear-gradient(225deg, hsla(271, 100%, 60%, 1) 0%, hsla(294, 100%, 60%, 1) 100%);
        filter: brightness(1.2);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); 
    }
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`;



