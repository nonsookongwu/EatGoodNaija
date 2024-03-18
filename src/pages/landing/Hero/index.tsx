import { Link } from 'react-router-dom';
import CustomButton from '../../../components/button';
import {
  HeroContainer,
  HeroLeftContainer,
  HeroRightContainer,
  HeroText,
  HeroText2,
  HeroTextHolder,
  HeroTextHolder2,
  HeroTitleHolder,
  SubtitleText,
} from "./Hero.styles";

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
        <Link to={"/user_role"}>
          <CustomButton>Get started</CustomButton>
        </Link>
      </HeroLeftContainer>
      <HeroRightContainer></HeroRightContainer>
    </HeroContainer>
  );
}

export default Hero