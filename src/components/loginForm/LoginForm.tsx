import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import PhoneInput from 'react-phone-input-2';
import { isValid } from 'zod';
import { userIcon, emailIcon, passwordIcon } from '../../assets';
import { color } from '../../theme/color';
import CustomButton from '../button';
import {
  FormWrapper,
  FieldContainer,
  Label,
  InputContainer,
  IconImg,
  CustomInput,
  TextContainer,
  InfoText,
  ErrorText,
  Icon,
  DownTextContainer,
  LinkText,
  ForgetPasswordTextContainer,
} from "./LoginForm.styles";
import { zodResolver } from '@hookform/resolvers/zod';
import { TSignUpSchema, signUpSchema } from '../../utils/validation';
import { Link } from 'react-router-dom';

const LoginForm = () => {


const [PassWordvisibility, setPasswordVisibility] = useState(true);

const {
  register,
  handleSubmit,
  reset,
  getValues,
  control,
  formState: { errors, isSubmitting, isValid },
} = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

const handlePassword = () => {
  setPasswordVisibility(!PassWordvisibility);
};

const onSubmit = (data: TSignUpSchema) => {
  console.log(data);

  reset();
};



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

      <CustomButton width="100%" disabled={!isValid}>
        Sign up
      </CustomButton>
      <DownTextContainer>
        <InfoText>Don't have an account?</InfoText>
        <Link to={"/signup"}>
          <LinkText>Sign up here</LinkText>
        </Link>
      </DownTextContainer>
      <ForgetPasswordTextContainer>
        <Link to={"/email_confirm"}>
          <LinkText>Forgot Password?</LinkText>
        </Link>
      </ForgetPasswordTextContainer>
    </FormWrapper>
  );
}

export default LoginForm