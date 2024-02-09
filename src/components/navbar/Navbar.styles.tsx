import styled from "styled-components";
import { fonts } from "../../theme/fonts";
import { color } from "../../theme/color";

export const NavContainer = styled.div`
  /* background-color: red; */
  border: 2px solid red;
  width: 100%;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Logo = styled.img`
  width: auto;
`;

export const Navigation = styled.div`
  border: 2px solid blue;
  width: 560px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const NavMenu = styled.div`
  border: 2px solid red;
  width: 371px;
  height: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavElements = styled.div`
  font-family: ${fonts.fontFamily.poppins};
  font-weight: ${fonts.fontWeight.medium};
  font-size: ${fonts.fontSize.body2};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.darkCharcoal};
  cursor: pointer;

  &:active {
    font-weight: ${fonts.fontWeight.regular};
    color: ${color.primary.bleuDeFrance};
  }
`;