import React from "react";
import {
  FooterContainer,
  FooterLeft,
  IconContainer,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>© 2023 EatGoodNaija | Powered by EatGoodNaija</FooterLeft>
      <IconContainer>
        {/* <IconHolder><FaFacebookF/></IconHolder> */}
        <Facebook />
        <Twitter />
        <Instagram />
        <LinkedIn/>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
