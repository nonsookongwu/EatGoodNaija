import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../../APIServices/userService";
import { EGNLogo, passwordModal } from "../../assets";
import ResetPasswordModal from "../../components/EmailModal/AuthModal";
import PasswordConfirm from "../../components/passwordConfirmation/PasswordConfirm";
import { TPasswordSchema } from "../../utils/validation";
import {
  CompanyLogo,
  SignupContainer,
  SignupInnerDown,
  SignupInnerUp,
  SignupLeft,
  SignupRight,
  TitleHolder,
  TopText
} from "./EmailConfirmation.styles";

const ResetPassword = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [formData, setFormData] = useState<TPasswordSchema | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { id } = useParams();

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
setIsSubmitting(true)
      console.log(formData);
      userService
        .resetPassword(id, formData)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message);
          setIsSubmitting(false);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          setIsSubmitting(false)
          toast.error(error.response.data.message);
        });
    }
    setToggleModal(!toggleModal);
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
              isSubmitting={isSubmitting}
            />
          </SignupInnerDown>
        </SignupRight>
        <Toaster />
      </SignupContainer>
    </>
  );
};

export default ResetPassword;
