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
  TitleHolder,
} from "./EmailConfirmation.styles";
import { EGNLogo } from "../../assets";
import { FcGoogle } from "react-icons/fc";
import SignUp from "../../components/signUpForm/SignUp";
import EmailForm from '../../components/EmailConfirmation/EmailForm';
import { InfoText } from './EmailConfirmation.styles';

const EmailConfirmation = () => {
  return (
    <SignupContainer>
      <SignupLeft />
      <SignupRight>
        <SignupInnerUp>
          <CompanyLogo src={EGNLogo} />
          <TitleHolder>
              <TopText>Reset your password</TopText>
                      <InfoText>
              Enter your email below and we’ll send you instructions on how to reset
              your password.
                      </InfoText>
          </TitleHolder>
        </SignupInnerUp>
        <SignupInnerDown>
          <EmailForm />
        </SignupInnerDown>
      </SignupRight>
    </SignupContainer>
  );
}

export default EmailConfirmation