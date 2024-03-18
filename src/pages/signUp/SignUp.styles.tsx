import styled from "styled-components"
import { signUp_image } from "../../assets";
import { fonts } from "../../theme/fonts";
import { color } from "../../theme/color";

export const SignupContainer = styled.div`
  width: 100%;
  height: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1050px;
  }

   @media screen and (max-width: 430px) {
    height: 940px;
   }

   @media screen and (max-width: 375px) {
    height: 850px;
   }
`;

export const SignupLeft = styled.div`
  width: 65.28%;
  height: 100%;
  background-image: url(${signUp_image});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 40%;
  }

  @media screen and (max-width: 430px) {
    width: 20%;
    background-position: center;
  }

  @media screen and (max-width: 375px) {
    width: 10%;
  }
`;

export const SignupRight = styled.div`
  width: 34.72%;
  height: 100%;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 430px) {
    width: 80%;
  }

  @media screen and (max-width: 375px) {
    width: 90%;
  }
`;

export const CompanyLogo = styled.img`
  width: auto;
`;

export const SignupInnerUp = styled.div`
  width: 51.2%;
  height: 9.44%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background: yellowgreen; */
  /* border: 2px solid yellowgreen; */
`;

export const SignupInnerDown = styled.div`
  width: 87.2%;
  height: 77.89%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  /* background: blue; */
  /* border: 2px solid blue; */
`;

export const TopText = styled.div`
  font-family: ${fonts.fontFamily.rubik};
  font-size: ${fonts.fontSize.heading3};
  font-weight: ${fonts.fontWeight.bold};
  line-height: ${fonts.lineHeight.heading3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.darkJungleGreen};
  /* width: 80%; */
  /* height: 60px; */
  /* border: 2px solid blue; */

  @media screen and (max-width: 1440px) {
    
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



export const GoogleAuthButton = styled.button`
  width: 100%;
  height: 48px;
  border: 1px solid ${color.black.lightSilver};
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  text-align: center;
  display: inline-block;

  font-weight: ${fonts.fontWeight.regular};
  font-size: ${fonts.fontSize.body4};
  line-height: ${fonts.lineHeight.footer1};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.cadetGrey};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
`;



export const Divider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Line = styled.div`
  width: 46%;
  border: 1px solid ${color.black.cadetGrey};
`;


export const DividerText = styled.div`
  /* font-family: ${fonts.fontFamily.rubik}; */
  font-size: ${fonts.fontSize.body3};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer1};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.cadetGrey};
  `