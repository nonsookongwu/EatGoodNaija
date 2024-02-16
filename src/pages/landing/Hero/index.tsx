import React from 'react'
import {
  HeroContainer,
  HeroLeftContainer,
  HeroRightContainer,
  HeroText,
  HeroText2,
  HeroTextHolder,
  HeroTextHolder2,
  SubtitleText,
  HeroTitleHolder,
} from "./Hero.styles";
import CustomButton from '../../../components/button';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroLeftContainer>
        <HeroTitleHolder>
          <HeroText>Claim Best Offer</HeroText>
          <HeroTextHolder>
            <HeroText>on African</HeroText>
            <HeroTextHolder2>
              <HeroText2>Food</HeroText2>
              <HeroText>&</HeroText>
            </HeroTextHolder2>
          </HeroTextHolder>
          <HeroText2>Ingredients.</HeroText2>
        </HeroTitleHolder>
        <SubtitleText>
          Our job is to filling your tummy with delicious food and with fast and
          free delivery
        </SubtitleText>
        <CustomButton>Get started</CustomButton>
      </HeroLeftContainer>
      <HeroRightContainer></HeroRightContainer>
    </HeroContainer>
  );
}

export default Hero