import React from "react";
import {
  Logo,
  NavContainer,
  NavElements,
  NavMenu,
  Navigation,
} from "./Navbar.styles";
import { EGNLogo } from "../../assets";
import CustomButton from "../button";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navElements = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/" },
    { label: "Menu", href: "/" },
    { label: "Contact", href: "/" },
  ];

  return (
    <NavContainer>
      <Logo src={EGNLogo} />
      <Navigation>
        <NavMenu>
          {/* {navElements.map((navElement) => (
            <NavLink to={`${navElement.href}`} key={navElement.label}>
              <NavElements>{navElement.label}</NavElements>
            </NavLink>
          ))} */}
          <NavLink to={"/"}>
            <NavElements>Home</NavElements>
          </NavLink>
          <NavLink to={""}>
            <NavElements>Services</NavElements>
          </NavLink>
          <NavLink to={""}>
            <NavElements>Menu</NavElements>
          </NavLink>
          <NavLink to={""}>
            <NavElements>Contact</NavElements>
          </NavLink>
        </NavMenu>
        <CustomButton children="Sign Up" />
      </Navigation>
    </NavContainer>
  );
};

export default NavBar;
