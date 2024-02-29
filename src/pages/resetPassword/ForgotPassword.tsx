import React, { useState } from "react";
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
import EmailForm from "../../components/EmailConfirmation/EmailForm";
import { InfoText } from "./EmailConfirmation.styles";
import ResetPasswordModal from "../../components/EmailModal/AuthModal";
import { emailModal } from "../../assets";
import { useNavigate } from "react-router-dom";
import { TEmailSchema, emailSchema } from "../../utils/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import userService from "../../APIServices/userService";
import toast, {Toaster} from "react-hot-toast"

const ForgotPassword = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [formData, setFormData] = useState<TEmailSchema | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleModal = () => {
    setToggleModal(!toggleModal);
  };

  // const { reset } = useForm<TEmailSchema>({
  //   resolver: zodResolver(emailSchema),
  // });

  const navigate = useNavigate();

  const onSubmit = (data: TEmailSchema) => {
    setFormData(data);
    console.log(data);
  };

  const handleSubmitFromModal = () => {
    if (formData) {
      // Use formData for further processing if needed
      setIsSubmitting(true)
      console.log(formData);
      userService
        .forgotPassword(formData)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message);
          // navigate("/password_confirm");
        })
        .catch((error) => {
          console.log(error);
          setIsSubmitting(false);
          toast.error(error.response.data.message);

          // toast.error(error.message);
        });
    }
    setToggleModal(!toggleModal);
  };

  return (
    <>
      {toggleModal && (
        <ResetPasswordModal
          imageUrl={emailModal}
          buttonText="Continue"
          modalText="Email sent Successfully"
          onCloseModal={handleModal}
          onClickButton={handleSubmitFromModal}
          isSubmitting={isSubmitting}
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
            <EmailForm toggleModal={handleModal} onSubmitForm={onSubmit} />
          </SignupInnerDown>
        </SignupRight>
        <Toaster />
      </SignupContainer>
    </>
  );
};

export default ForgotPassword;
