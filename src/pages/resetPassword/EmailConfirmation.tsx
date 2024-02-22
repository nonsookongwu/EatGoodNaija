import React, { useState } from 'react'
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
import EmailModal from '../../components/EmailModal/EmailModal';
import {emailModal} from '../../assets'

const EmailConfirmation = () => {
  const [toggleModal, setToggleModal] = useState(false);

   const handleModal = () => {
     setToggleModal(!toggleModal);
   };
  return (
    <>
      {toggleModal && (
        <EmailModal
          imageUrl={emailModal}
          buttonText="Continue"
          modalText='Email sent Successfully'
          onCloseModal={handleModal}
        />
      )}
      <SignupContainer>
        <SignupLeft />
        <SignupRight>
          <SignupInnerUp>
            <CompanyLogo src={EGNLogo} />
            <TitleHolder>
              <TopText>Reset your password</TopText>
              <InfoText>
                Enter your email below and we’ll send you instructions on how to
                reset your password.
              </InfoText>
            </TitleHolder>
          </SignupInnerUp>
          <SignupInnerDown>
            <EmailForm toggleModal={handleModal} />
          </SignupInnerDown>
        </SignupRight>
      </SignupContainer>
    </>
  );
}

export default EmailConfirmation