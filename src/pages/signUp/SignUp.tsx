import React from 'react'
import {
  CompanyLogo,
  SignupContainer,
  SignupLeft,
  SignupRight,
  SignupInnerUp,
  SignupInnerDown,
  TopText,
  GoogleAuthButton,
  Divider,
  Line,
  DividerText,
} from "./SignUp.styles";
import { EGNLogo } from '../../assets'
import { FcGoogle } from "react-icons/fc";
import SignUp from '../../components/signUpForm/SignUp';

const SignUpPage = () => {
  return (
    <SignupContainer>
      <SignupLeft />
      <SignupRight>
        <SignupInnerUp>
          <CompanyLogo src={EGNLogo} />
          <TopText>Create a new Account</TopText>
        </SignupInnerUp>
        <SignupInnerDown>
          <GoogleAuthButton>
            {" "}
            <FcGoogle size={"20px"} /> Sign up with Google
          </GoogleAuthButton>
          <Divider>
            <Line />
            <DividerText>OR</DividerText>
            <Line />
          </Divider>
          <SignUp/>
        </SignupInnerDown>
      </SignupRight>
    </SignupContainer>
  );
}

export default SignUpPage