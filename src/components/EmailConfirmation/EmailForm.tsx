import React from 'react'
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
} from "../signUpForm/SignUp.styes";
import EmailModal from '../EmailModal/EmailModal';

const EmailForm = () => {
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

     


      <CustomButton
        width="100%"
        // disabled={disabled}
      >
        Sign up
          </CustomButton>
          <EmailModal/>
      <DownTextContainer>
        <InfoText>Go back to</InfoText>
        <LinkText>Sign in</LinkText>
      </DownTextContainer>
    </FormWrapper>
  );
}

export default EmailForm