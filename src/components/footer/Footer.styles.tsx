import styled from "styled-components";
import { fonts } from "../../theme/fonts";
import { color } from "../../theme/color";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const FooterContainer = styled.div`
  background-color: ${color.primary.bleuDeFrance};
  width: 100%;
  height: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 140px;
  padding-right: 140px;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 430px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (max-width: 375px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const FooterLeft = styled.div`
  /* font-family: Inter; */
  font-size: ${fonts.fontSize.heading3};
  font-weight: ${fonts.fontWeight.medium};
  line-height: ${fonts.lineHeight.heading3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.white.white};
  /* width: 60%;
  height: 60px; */
  display: flex;
  align-items: center;
  text-align: center;
  /* border: 2px solid red; */

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
    width: 50%;
    text-align: left;
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 375px) {
    /* width: 100%; */
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 320px) {
    /* width: 100%; */
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer1};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;

  @media screen and (max-width: 430px) {
    width: 40%;
  }

  @media screen and (max-width: 375px) {
    width: 40%;
  }
`;



export const Facebook = styled(FaFacebookF)`
  font-size: ${fonts.fontSize.heading3};
  color: ${color.white.white};

  &:hover {
    color: ${color.black.darkCharcoal};
  }

  &:active {
    color: ${color.black.darkCharcoal};
    transform: scale(1.2);
  }

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body2};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.body2};
  }
`;

export const Twitter = styled(FaXTwitter)`
  font-size: ${fonts.fontSize.heading2};
  color: ${color.white.white};

  &:hover {
    color: ${color.black.darkCharcoal};
  }

  &:active {
    color: ${color.black.darkCharcoal};
    transform: scale(1.2);
  }

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body1};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.body1};
  }
`;

export const Instagram = styled(FaInstagram)`
  font-size: ${fonts.fontSize.heading2};
  color: ${color.white.white};

  &:hover {
    color: ${color.black.darkCharcoal};
  }

  &:active {
    color: ${color.black.darkCharcoal};
    transform: scale(1.2);
  }

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body1};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.body1};
  }
`;

export const LinkedIn = styled(FaLinkedin)`
  font-size: ${fonts.fontSize.heading2};
  color: ${color.white.white};

  &:hover {
    color: ${color.black.darkCharcoal};
  }

  &:active {
    color: ${color.black.darkCharcoal};
    transform: scale(1.2);
  }

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body1};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.body1};
  }
`;
