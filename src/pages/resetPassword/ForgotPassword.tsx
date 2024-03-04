import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import userService from "../../APIServices/userService";
import { EGNLogo, emailModal } from "../../assets";
import EmailForm from "../../components/EmailConfirmation/EmailForm";
import ResetPasswordModal from "../../components/EmailModal/AuthModal";
import { TEmailSchema } from "../../utils/validation";
import {
  CompanyLogo,
  InfoText,
  SignupContainer,
  SignupInnerDown,
  SignupInnerUp,
  SignupLeft,
  SignupRight,
  TitleHolder,
  TopText
} from "./EmailConfirmation.styles";

const ForgotPassword = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [formData, setFormData] = useState<TEmailSchema | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleModal = () => {
    setToggleModal(!toggleModal);
  };


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
          setIsSubmitting(false);
          
        })
        .catch((error) => {
          console.log(error);
          setIsSubmitting(false);
          toast.error(error.response.data.message);

         
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
            <EmailForm toggleModal={handleModal} onSubmitForm={onSubmit} isSubmitting={isSubmitting} />
          </SignupInnerDown>
        </SignupRight>
        <Toaster />
      </SignupContainer>
    </>
  );
};

export default ForgotPassword;
