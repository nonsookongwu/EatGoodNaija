import styled from "styled-components";
import { color } from "../../theme/color";
import { fonts } from "../../theme/fonts";

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  /* background: blue; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  @media screen and (max-width: 2560px) {
    gap: 35px;
    margin-top: 20px;
  }
  @media screen and (max-width: 1440px) {
    gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    gap: 40px;
  }
`;

export const FullNameContainer = styled.div`
  width: 100%;
  height: 89px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
`;

export const FieldContainer = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;

  @media screen and (max-width: 2560px) {
    height: 105px;
    gap: 10px;
  }
  @media screen and (max-width: 1440px) {
    height: 69px;
    gap: 2px;
  }

  @media screen and (max-width: 1024px) {
    height: 50px;
  }

  // @media screen and (max-width: 768px) {

  // }

  // @media screen and (max-width: 430px) {
  // }

  // @media screen and (max-width: 375px) {
  // }
`;

export const Label = styled.label`
  font-size: ${fonts.fontSize.body3};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.primary.bleuDeFrance};
  /* font-style: italic; */
  /* border-bottom: 2px solid blueviolet; */
  /* padding-bottom: 5px; */

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
  }

  /* @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  } */

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer1};
  }

  /* @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  } */
  /* @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  } */
`;

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
  @media screen and (max-width: 2560px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 1440px) {
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 430px) {
    width: 18px;
    height: 18px;
  }
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  @media screen and (max-width: 2560px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 1440px) {
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 430px) {
    width: 18px;
    height: 18px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  border-radius: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
  background-color: ${color.black.cultured};

  @media screen and (max-width: 2560px) {
    height: 60px;
  }
  @media screen and (max-width: 1440px) {
    height: 40px;
  }
  @media screen and (max-width: 1024px) {
    height: 40px;
  }
  @media screen and (max-width: 430px) {
    height: 35px;
  }
`;

export const CustomSelect = styled.select`
  width: 100%;
  height: 24px;
  border: none;
  background-color: ${color.black.cultured};
  font-size: ${fonts.fontSize.body2};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.spanishGray};

  &:focus {
    border: 2px solid ${color.primary.bleuDeFrance};
  }

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
  }
`;

export const Options = styled.option`
  width: 100%;
  background-color: blue;
`;


export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;
export const DownTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
  @media screen and (max-width: 430px) {
    margin-top: 5px;
  }
`;

export const InfoText = styled.span`
  font-size: ${fonts.fontSize.footer1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer2};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.spanishGray};

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer2};
  }
  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer2};
    line-height: ${fonts.lineHeight.footer2};
  }
`;

export const ErrorText = styled.span`
  font-size: ${fonts.fontSize.footer1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer2};
  letter-spacing: ${fonts.letterSpacing.body};
  /* color: ${color.black.spanishGray}; */
  color: red;

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer2};
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer2};
    line-height: ${fonts.lineHeight.footer2};
  }

  /* @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  } */
  /* @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  } */
`;

export const LinkText = styled.button`
  font-size: ${fonts.fontSize.footer1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer2};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.primary.bleuDeFrance};
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer2};
  }
  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer2};
  }
`;
