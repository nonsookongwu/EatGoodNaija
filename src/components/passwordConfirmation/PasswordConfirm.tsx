import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { passwordIcon } from "../../assets";
import { color } from "../../theme/color";
import { TPasswordSchema, passwordSchema } from "../../utils/validation";
import CustomButton from "../button";
import { Icon } from "../signUpForm/SignUp.styes";
import {
  CustomInput,
  DownTextContainer,
  ErrorText,
  FieldContainer,
  FormWrapper,
  IconImg,
  InfoText,
  InputContainer,
  Label,
  LinkText,
} from "./PasswordConfirm.styles";
import Spinner from "../Spinner";

interface Props {
  toggleModal: () => void;
  onSubmitForm: (data: TPasswordSchema) => void;
  isSubmitting: boolean;
}

const PasswordConfirm = ({ toggleModal, onSubmitForm, isSubmitting }: Props) => {
  const [PassWordvisibility, setPasswordVisibility] = useState(true);
  const [ConfirmPasswordvisibility, setConfirmPasswordVisibility] =
    useState(true);

  const handlePassword = () => {
    setPasswordVisibility(!PassWordvisibility);
  };
  const handleConfirmPassword = () => {
    setConfirmPasswordVisibility(!ConfirmPasswordvisibility);
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    control,
    formState: { errors, isValid },
  } = useForm<TPasswordSchema>({ resolver: zodResolver(passwordSchema) });

  const onSubmit = (data: TPasswordSchema) => {
    onSubmitForm(data);

    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {/* password */}
      <FieldContainer>
        <Label>Password</Label>
        <InputContainer>
          <IconImg src={passwordIcon} />
          <CustomInput
            {...register("password")}
            type={PassWordvisibility ? "password" : "text"}
            placeholder="*********"
          />
          <Icon onClick={handlePassword}>
            {PassWordvisibility ? (
              <BsEyeFill
                size={"20px"}
                color={`${color.primary.bleuDeFrance}`}
              />
            ) : (
              <BsEyeSlashFill
                size={"20px"}
                color={`${color.primary.bleuDeFrance}`}
              />
            )}
          </Icon>
        </InputContainer>
        {errors.password && (
          <ErrorText>{`${errors.password.message}`}</ErrorText>
        )}
      </FieldContainer>

      {/* confirm password */}
      <FieldContainer>
        <Label>Confirm password</Label>
        <InputContainer>
          <IconImg src={passwordIcon} />
          <CustomInput
            {...register("confirm", {
              // required: "confirm password is required",
              // validate: (value: string) =>
              //   value === getValues("password") || "Passwords must match",
            })}
            type={ConfirmPasswordvisibility ? "password" : "text"}
            placeholder="*********"
          />
          <Icon onClick={handleConfirmPassword}>
            {ConfirmPasswordvisibility ? (
              <BsEyeFill
                size={"20px"}
                color={`${color.primary.bleuDeFrance}`}
              />
            ) : (
              <BsEyeSlashFill
                size={"20px"}
                color={`${color.primary.bleuDeFrance}`}
              />
            )}
          </Icon>
        </InputContainer>
        {errors.confirm && <ErrorText>{`${errors.confirm.message}`}</ErrorText>}
      </FieldContainer>

      <CustomButton width="100%" disabled={!isValid} onClick={toggleModal}>
        Reset password {isSubmitting && <Spinner/>}
      </CustomButton>

      {/* <DownTextContainer>
        <InfoText>Go back to</InfoText>
        <LinkText>Sign in</LinkText>
      </DownTextContainer> */}
    </FormWrapper>
  );
};

export default PasswordConfirm;
