import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { IconContext } from "react-icons/lib";
import {
  Logo,
  NavContainer,
  MobileIcon,
  NavElements,
  NavMenu,
  Navigation,
  DesktopButton,
  NavLinks,
  MobileButton,
} from "./Navbar.styles";
import { EGNLogo } from "../../assets";
import CustomButton from "../button";
import { DefaultTheme } from "styled-components";

import { Link, NavLink } from "react-router-dom";
import { color } from "../../theme/color";

const NavBar = () => {
  const navElements = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Menu", href: "/menu" },
    { label: "Contact", href: "/contact" },
  ];

  const [openMobile, setOpenMobile] = useState(false);
  const [active, setActive] = useState(0);

  const handleOpenMobile = () => {
    setOpenMobile(!openMobile);
  };

  const handleActive = (index: number) => {
    setActive(index);
    console.log(index);
  };

  return (
    <IconContext.Provider value={{ color: `${color.primary.bleuDeFrance}` }}>
      <NavContainer>
        <NavLink to={"/"} onClick={() => handleActive(0)}>
          <Logo src={EGNLogo} />
        </NavLink>
        <Navigation>
          <MobileIcon onClick={handleOpenMobile}>
            {openMobile ? <LiaTimesSolid /> : <RxHamburgerMenu />}
          </MobileIcon>
          <NavMenu mobileopen={openMobile} onClick={handleOpenMobile}>
            {/* <NavLinks to={"/"}>
              <NavElements
                onClick={() => handleActive(0)}
                activeclass={active === 0}
              >
                Home
              </NavElements>
            </NavLinks>
            <NavElements
              onClick={() => handleActive(1)}
              activeclass={active === 1}
            >
              <NavLinks to={"/services"}>Services</NavLinks>
            </NavElements>
            <NavElements
              onClick={() => handleActive(2)}
              activeclass={active === 2}
            >
              <NavLinks to={"/"}>Menu</NavLinks>
            </NavElements>
            <NavElements
              onClick={() => handleActive(3)}
              activeclass={active === 3}
            >
              <NavLinks to={"/"}>Contact</NavLinks>
            </NavElements> */}

            {navElements.map((navElement, index) => (
              <NavLink to={`${navElement.href}`} key={navElement.label}>
                <NavElements
                  activeclass={active === index}
                  onClick={() => handleActive(index)}
                >
                  {navElement.label}
                </NavElements>
              </NavLink>
            ))}
            <MobileButton>
              <Link to={"/signup"}>
                <CustomButton children="Sign Up" />
              </Link>
            </MobileButton>
          </NavMenu>
          <DesktopButton>
            <Link to={"/signup"}>
              <CustomButton children="Sign Up" />
            </Link>
          </DesktopButton>
        </Navigation>
      </NavContainer>
    </IconContext.Provider>
  );
};

export default NavBar;


