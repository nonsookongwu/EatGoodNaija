import React, { useState } from "react";
import { EGNLogo, passwordModal } from "../../assets";
import EmailForm from "../../components/EmailConfirmation/EmailForm";
import ResetPasswordModal from "../../components/EmailModal/AuthModal";
import {
  SignupContainer,
  SignupLeft,
  SignupRight,
  SignupInnerUp,
  CompanyLogo,
  TitleHolder,
  TopText,
  InfoText,
  SignupInnerDown,
} from "./EmailConfirmation.styles";
import PasswordConfirm from "../../components/passwordConfirmation/PasswordConfirm";
import { useNavigate } from "react-router-dom";
import { TPasswordSchema } from "../../utils/validation";

const PasswordConfirmation = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [formData, setFormData] = useState<TPasswordSchema | null>(null);

  const handleModal = () => {
    setToggleModal(!toggleModal);
  };

  const navigate = useNavigate();

  const handleFormSubmit = (data: TPasswordSchema) => {
    setFormData(data);
    console.log(data);
  };

  const handleSubmitFromModal = () => {
    if (formData) {
      // Use formData for further processing if needed
      console.log(formData);
    }
    navigate("/login");
  };

  return (
    <>
      {toggleModal && (
        <ResetPasswordModal
          imageUrl={passwordModal}
          buttonText="Continue"
          modalText="Password sent Successfully"
          onCloseModal={handleModal}
          onClickButton={handleSubmitFromModal}
        />
      )}
      <SignupContainer>
        <SignupLeft />
        <SignupRight>
          <SignupInnerUp>
            <CompanyLogo src={EGNLogo} />
            <TitleHolder>
              <TopText>Reset your password</TopText>
              {/* <InfoText>
                Enter your email below and we’ll send you instructions on how to
                reset your password.
              </InfoText> */}
            </TitleHolder>
          </SignupInnerUp>
          <SignupInnerDown>
            <PasswordConfirm
              toggleModal={handleModal}
              onSubmitForm={handleFormSubmit}
            />
          </SignupInnerDown>
        </SignupRight>
      </SignupContainer>
    </>
  );
};

export default PasswordConfirmation;
