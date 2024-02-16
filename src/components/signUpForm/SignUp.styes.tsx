import styled from "styled-components";
import { fonts } from "../../theme/fonts";
import { color } from "../../theme/color";
import PhoneInput from "react-phone-input-2";

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  /* background: blue; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
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

  /* @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.display1};
    line-height: ${fonts.lineHeight.display1};
  } */

  /* @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  } */

  /* @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  } */

  /* @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading1};
  } */

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
`;
export const Icon = styled.div`
  width: 24px;
  height: 24px;
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
`;

export const CustomInput = styled.input`
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
`;
export const CustomPhoneInput = styled(PhoneInput)`
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
`;

export const InfoText = styled.span`
  font-size: ${fonts.fontSize.footer1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer2};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.spanishGray};
`;

export const ErrorText = styled.span`
  font-size: ${fonts.fontSize.footer1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer2};
  letter-spacing: ${fonts.letterSpacing.body};
  /* color: ${color.black.spanishGray}; */
  color: red;
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
`;
