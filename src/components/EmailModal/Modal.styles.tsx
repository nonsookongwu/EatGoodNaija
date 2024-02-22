import styled from 'styled-components'
import { color } from '../../theme/color'
import { fonts } from '../../theme/fonts';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  /* background-color: ${color.black.spanishGray}; */
  /* opacity: 0.5; */
  background-color: rgba(158, 158, 158, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 35%;
  height: 298px;
  background-color: ${color.white.white};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 32px;
  box-sizing: border-box;
`;

export const TopImage = styled.img`
  width: 30.53%;
  height: 36.4%;
`;

export const ModalText = styled.div`
  font-family: ${fonts.fontFamily.rubik};
  font-size: ${fonts.fontSize.heading3};
  font-weight: ${fonts.fontWeight.bold};
  line-height: ${fonts.lineHeight.heading3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.primary.bleuDeFrance};
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