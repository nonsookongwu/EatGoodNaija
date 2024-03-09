import styled from "styled-components";
import { color } from "../../../theme/color";
import { fonts } from "../../../theme/fonts";

export const ServiceSectionContainer = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  height: 630px;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px 130px;
  box-sizing: border-box;

  @media screen and (max-width: 2560px) {
    height: 936px;
  }

  @media screen and (max-width: 1440px) {
    /* height: 736px; */
    height: 530px;
  }

  @media screen and (max-width: 1024px) {
    height: 536px;
    padding: 20px 35px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
  }

  @media screen and (max-width: 430px) {
    padding: 20px 25px;
  }

  @media screen and (max-width: 375px) {
    padding: 20px 10px;
  }
  @media screen and (max-width: 320px) {
    padding: 20px 5px;
  }
`;

export const ServiceBoxContainer = styled.div`
  /* border: 2px solid pink; */
  /* width: 594px; */
  width: 100%;
  height: 84.92%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  /* gap: 32px; */

  @media screen and (max-width: 1440px) {
    height: 80.92%;
    /* height: 346px; */
  }

  @media screen and (max-width: 1024px) {
    height: 84.92%;
    justify-content: center;
    gap: 15px;
  }

  @media screen and (max-width: 768px) {
    /* width: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 15px; */
    /* display: none; */
    flex-direction: column;
  }

  @media screen and (max-width: 430px) {
  }

  @media screen and (max-width: 375px) {
  }
`;

export const SmallBoxes = styled.div`
  /* border: 2px solid paleturquoise; */
  /* width: 367px; */
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1440px) {
    width: 32%;
    height: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 33%;
    height: 100%;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 276px;
    background-position: center;
  }

  @media screen and (max-width: 430px) {
  }

  @media screen and (max-width: 375px) {
  }
`;

export const SmallBoxImg = styled.img`
  width: 78.48%;
  height: 74.19%;
  /* border: 2px solid blue; */

  @media screen and (max-width: 1024px) {
    width: 78.48%;
    height: 54.19%;
  }

  @media screen and (max-width: 768px) {
    width: 37.48%;
    height: 74.19%;
  }

  @media screen and (max-width: 430px) {
    width: 55.48%;
    height: 74.19%;
  }

  @media screen and (max-width: 375px) {
    width: 55.48%;
    height: 74.19%;
  }
  @media screen and (max-width: 320px) {
    width: 65.48%;
    height: 74.19%;
  }
`;

export const SmallTextHolder = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const TitleText = styled.span`
  /* display: inline; */
  font-family: ${fonts.fontFamily.rubik};
  font-size: ${fonts.fontSize.display2};
  font-weight: ${fonts.fontWeight.bold};
  line-height: ${fonts.lineHeight.heading1};
  letter-spacing: ${fonts.letterSpacing.heading};
  color: ${color.black.richBlack};
  /* border-bottom: 2px solid green; */
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.heading3};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.heading2};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.heading1};
  }

  @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.heading2};
  }
  @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.heading2};
  }
`;

export const SmallBoxTitletext = styled.span`
  font-size: ${fonts.fontSize.heading1};
  font-weight: ${fonts.fontWeight.bold};
  line-height: ${fonts.lineHeight.heading2};
  letter-spacing: ${fonts.letterSpacing.heading};
  color: ${color.black.richBlack};
  /* border-bottom: 2px solid blueviolet; */
  /* padding-bottom: 5px; */

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.heading3};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.heading3};
  }

  @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.heading3};
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.heading3};
  }

  @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.heading3};
  }
  @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.heading3};
  }
`;

export const SmallBoxSubtitleText = styled.div`
  font-size: ${fonts.fontSize.heading3};
  font-weight: ${fonts.fontWeight.medium};
  line-height: ${fonts.lineHeight.heading3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.darkCharcoal};
  /* width: 80%;
  height: 60px; */
  /* border: 2px solid blue; */

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1024px) {
    /* width: 100%; */
    font-size: ${fonts.fontSize.body2};
    line-height: ${fonts.lineHeight.body3};
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    /* width: 55%; */
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
    text-align: center;
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
