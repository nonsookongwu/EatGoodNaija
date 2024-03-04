import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../theme/color";
import { fonts } from "../../theme/fonts";

export const NavContainer = styled.nav`
  /* background-color: red; */
  /* border: 2px solid red; */
  width: 100%;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: auto;
`;

export const Navigation = styled.div`
  /* border: 2px solid blue; */
  width: 560px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
    justify-content: center;
    gap: 20px;
  }
`;

interface NavMenuProps {
  $mobileopen: boolean;
}

export const NavMenu = styled.ul<NavMenuProps>`
  /* border: 2px solid red; */
  width: 371px;
  height: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-decoration: none;
  padding: 0;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    position: absolute;
    top: 80px;
    left: ${(props) => (props.$mobileopen ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${color.black.darkCharcoal};
    box-sizing: border-box;
    padding: 10px;

    &:hover {
      background-color: ${color.primary.bleuDeFrance};
    }
  }
`;

export const MobileButton = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

interface NavElementProps {
  $activeclass: boolean;
}

export const NavElements = styled.li<NavElementProps>`
  font-family: ${fonts.fontFamily.poppins};
  font-size: ${fonts.fontSize.body2};
  font-weight: ${(props) =>
    props.$activeclass
      ? `${fonts.fontWeight.regular}`
      : `${fonts.fontWeight.medium}`};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  cursor: pointer;
  color: ${(props) =>
    props.$activeclass
      ? `${color.primary.bleuDeFrance}`
      : `${color.black.darkCharcoal}`};
  text-decoration: none !important;

  &:hover {
    font-weight: ${fonts.fontWeight.regular};
    color: ${color.primary.bleuDeFrance};
  }

  /* &:active {
    font-weight: ${fonts.fontWeight.regular};
    color: ${color.primary.bleuDeFrance};
  } */

  @media screen and (max-width: 960px) {
    width: 100%;
    color: ${color.white.white};
    &:hover {
      border: none;
    }
  }
`;

export const DesktopButton = styled.div`
  display: block;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: ${color.black.darkCharcoal};

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: ${color.white.white};
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    /* background: red; */
    display: block;
    position: absolute;
    top: 3px;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
