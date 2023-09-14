import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';




const HeroSection = () => {
    return (
        <div id="about" style={{height:"100vh"}}>
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SocialMediaIcons>
         
         <SocialMediaIcon href= "mailto:ss3177806@gmail.com" target="display"><EmailIcon/></SocialMediaIcon>
         <SocialMediaIcon href= "tel:+91 8341943656" target="display">< PhoneIcon/></SocialMediaIcon>
         <SocialMediaIcon href= "http://www.linkedin.com/in/shiva-shankar-goddumarri-458341196" target="display"><LinkedInIcon /></SocialMediaIcon>
         <SocialMediaIcon href= "https://www.instagram.com/shiva_shankar__goddumarri/" target="display"><InstagramIcon /></SocialMediaIcon>
         <SocialMediaIcon href= "https://wa.me/8341943656" target="display"><WhatsAppIcon /></SocialMediaIcon>
         
         
       </SocialMediaIcons>
      
              
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection