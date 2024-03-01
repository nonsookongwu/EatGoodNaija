import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../../APIServices/userService';
import { emailIcon, passwordIcon } from '../../assets';
import { color } from '../../theme/color';
import { TLoginSchema, loginSchema } from '../../utils/validation';
import Spinner from '../Spinner';
import CustomButton from '../button';
import {
  CustomInput,
  DownTextContainer,
  ErrorText,
  FieldContainer,
  ForgetPasswordTextContainer,
  FormWrapper,
  Icon,
  IconImg,
  InfoText,
  InputContainer,
  Label,
  LinkText
} from "./LoginForm.styles";

const LoginForm = () => {

  const [PassWordvisibility, setPasswordVisibility] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate()
const {
  register,
  handleSubmit,
  reset,
  getValues,
  control,
  formState: { errors, isValid },
} = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });

const handlePassword = () => {
  setPasswordVisibility(!PassWordvisibility);
};

const onSubmit = (data: TLoginSchema) => {
  console.log(data);

  setIsSubmitting(true)
  userService
    .loginUser(data)
    .then((res) => {
      console.log(res)
      localStorage.setItem("token", res.data.token);
      const user = JSON.stringify(res.data.user);
      localStorage.setItem("user", user);
      toast.success(res.data.message);
      setIsSubmitting(false);
      setTimeout(() => {
       navigate("/dashboard");
          }, 3000);
      
    })
    .catch((error) => {
      console.log(error)
      toast.error(error.response.data.message);
      setIsSubmitting(false);
      
    });

  reset();
};



  return (
    <>
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
          Login {isSubmitting && <Spinner />}
        </CustomButton>
        <DownTextContainer>
          <InfoText>Don't have an account?</InfoText>
          <Link to={"/signup"}>
            <LinkText>Sign up here</LinkText>
          </Link>
        </DownTextContainer>
        <ForgetPasswordTextContainer>
          <Link to={"/forgot-password"}>
            <LinkText>Forgot Password?</LinkText>
          </Link>
        </ForgetPasswordTextContainer>
      </FormWrapper>
      <Toaster />
    </>
  );
}

export default LoginForm