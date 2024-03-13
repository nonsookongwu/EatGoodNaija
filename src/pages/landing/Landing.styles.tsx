import styled from "styled-components";
// import { fonts } from "../../../theme/fonts";
// import { color } from "../../../theme/color";


export const Container = styled.div`
  
  width: 100%;
  height: auto;
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