import styled from "styled-components";
import { heroImage_Large } from "../../../assets";
import { color } from "../../../theme/color";
import { fonts } from "../../../theme/fonts";

export const HeroContainer = styled.div`
  /* border: 2px solid blueviolet; */
  width: 100%;
  height: 636px;
  /* height: 100vh; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 2560px) {
    height: 936px;
  }

  @media screen and (max-width: 1440px) {
    height: 736px;
  }

  @media screen and (max-width: 1024px) {
    height: 636px;
  }

  @media screen and (max-width: 768px) {
    height: 836px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
  }

  @media screen and (max-width: 430px) {
  }

  @media screen and (max-width: 375px) {
  }
`;

export const HeroLeftContainer = styled.div`
  /* border: 2px solid pink; */
  /* width: 594px; */
  width: 45%;
  height: 442px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;

  @media screen and (max-width: 1440px) {
    height: 402px;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    gap: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
  }

  @media screen and (max-width: 430px) {
  }

  @media screen and (max-width: 375px) {
  }
`;

export const HeroRightContainer = styled.div`
  /* border: 2px solid paleturquoise; */
  /* width: 693px; */
  width: 40%;
  height: 876px;
  background-image: url(${heroImage_Large});
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 1440px) {
    width: 45%;
    height: 576px;
  }

  @media screen and (max-width: 1024px) {
    width: 45%;
    height: 476px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 476px;
    background-position: center;
  }

  @media screen and (max-width: 430px) {
  }

  @media screen and (max-width: 375px) {
  }
`;

export const HeroTitleHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* gap: 10px; */
`;

export const HeroTextHolder = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  /* height: 84px; */
`;
export const HeroTextHolder2 = styled.div`
  /* height: 90px; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;
`;

export const HeroText = styled.div`
  /* display: inline; */
  font-family: ${fonts.fontFamily.rubik};
  font-size: ${fonts.fontSize.rubik};
  font-weight: ${fonts.fontWeight.bold};
  line-height: ${fonts.lineHeight.display1};
  letter-spacing: ${fonts.letterSpacing.heading};
  color: ${color.black.richBlack};
  /* border-bottom: 2px solid green; */
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.display1};
    line-height: ${fonts.lineHeight.display1};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  }

  @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  }
  @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.heading2};
    line-height: ${fonts.lineHeight.heading2};
  }
`;

export const HeroText2 = styled.div`
  /* display: flex;
justify-content: flex-start; */
  font-family: ${fonts.fontFamily.lobster};
  font-size: ${fonts.fontSize.lobster};
  font-weight: ${fonts.fontWeight.bold};
  line-height: ${fonts.lineHeight.display1};
  letter-spacing: ${fonts.letterSpacing.heading};
  color: ${color.primary.bleuDeFrance};
  font-style: italic;
  /* border-bottom: 2px solid blueviolet; */
  padding-bottom: 5px;

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.display1};
    line-height: ${fonts.lineHeight.display1};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading2};
  }

  @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  }
  @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  }
`;



export const SubtitleText = styled.div`
  /* font-family: ${fonts.fontFamily.lobster}; */
  font-size: ${fonts.fontSize.body1};
  font-weight: ${fonts.fontWeight.medium};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.darkCharcoal};
  width: 80%;
  height: 60px;
  /* border: 2px solid blue; */

  

  @media screen and (max-width: 1440px) {
    width: 470px;
    height: 60px;
    font-size: ${fonts.fontSize.body2};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 768px) {
    width: 55%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }
`;

// @media screen and (max-width: 1440px) {

//   }

  // @media screen and (max-width: 1024px) {

  // }

  // @media screen and (max-width: 768px) {

  // }

  // @media screen and (max-width: 430px) {
  // }

  // @media screen and (max-width: 375px) {
  // }
