import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { emailIcon, passwordIcon, userIcon } from "../../assets";
import { color } from "../../theme/color";
import { TSignUpSchema, signUpSchema } from "../../utils/validation";
import CustomButton from "../button";
import {
  CustomInput,
  ErrorText,
  FormWrapper,
  FullNameContainer,
  Icon,
  IconImg,
  InputContainer,
  Label,
  FieldContainer,
  InfoText,
  TextContainer,
  LinkText,
  DownTextContainer,
} from "./SignUp.styes";
import "./signup.css";

const signUp = () => {
  const [disabled, setDisabled] = useState(true);
  const [PassWordvisibility, setPasswordVisibility] = useState(true);
  const [ConfirmPasswordvisibility, setConfirmPasswordVisibility] =
    useState(true);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  // const validatePhoneNumber = (phoneNumber: string) => {
  //   const phoneNumberPattern = /^\d{10}$/; // Validates a 10-digit phone number

  //   return phoneNumberPattern.test(phoneNumber);
  // };

  

  const handlePassword = () => {
    setPasswordVisibility(!PassWordvisibility);
  };
  const handleConfirmPassword = () => {
    setConfirmPasswordVisibility(!ConfirmPasswordvisibility);
  };

  const onSubmit = (data: TSignUpSchema) => {
    console.log(data);

    reset();
  };

  if (!errors) {
    setDisabled(false);
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {/* fullname */}
      <FieldContainer>
        <Label>Full name</Label>
        <InputContainer>
          <IconImg src={userIcon} />
          <CustomInput
            {...register("fullName")}
            type="text"
            placeholder="Success Momodu"
          />
        </InputContainer>
        <TextContainer>
          <InfoText>first name comes first</InfoText>
          {errors.fullName && (
            <ErrorText>{`${errors.fullName.message}`}</ErrorText>
          )}
        </TextContainer>
      </FieldContainer>

      {/* email */}
      <FieldContainer>
        <Label>Email</Label>
        <InputContainer>
          <IconImg src={emailIcon} />
          <CustomInput
            {...register("email")}
            type="email"
            placeholder="SuccessMomodu@gmail.com"
          />
        </InputContainer>
        {errors.email && <ErrorText>{`${errors.email.message}`}</ErrorText>}
      </FieldContainer>

      {/* phone */}
      <FieldContainer>
        <Label>Phone number</Label>
        <InputContainer>
          <Controller
            control={control}
            name="phoneNumber"
            rules={{ required: true }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={"ng"}
                placeholder="SuccessMomodu@gmail.com"
              />
            )}
          />
        </InputContainer>
        {errors.phoneNumber && (
          <ErrorText>{`${errors.phoneNumber.message}`}</ErrorText>
        )}
      </FieldContainer>

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
            {...register("confirmPassword", {
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
        {errors.confirmPassword && (
          <ErrorText>{`${errors.confirmPassword.message}`}</ErrorText>
        )}
      </FieldContainer>

      <CustomButton width="100%" disabled={disabled}>
        Sign up
      </CustomButton>
      <DownTextContainer>
        <InfoText>Already have an account ?</InfoText>
        <LinkText>Sign in here</LinkText>
      </DownTextContainer>
    </FormWrapper>
  );
};

export default signUp;
