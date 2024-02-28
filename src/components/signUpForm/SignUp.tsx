import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { emailIcon, passwordIcon, userIcon } from "../../assets";
import toast, { Toaster } from "react-hot-toast";
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
import { Link } from "react-router-dom";
import userService from "../../APIServices/userService";

const signUp = () => {
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
    formState: { errors, isSubmitting, isValid },
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });
  

  

  const onSubmit = (data: TSignUpSchema) => {
    console.log(data);

    userService
      .addUser(data)
      .then((res) => {
        // console.log(res.data.message)
        toast.success(res.data.message);
      })
      .catch((error) => {
        // console.log(error.response.data.error)
        toast.error(error.response.data.error);
      });

    reset();
  };


  return (
    <><FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {/* fullname */}
      <FieldContainer>
        <Label>Full name</Label>
        <InputContainer>
          <IconImg src={userIcon} />
          <CustomInput
            {...register("fullname")}
            type="text"
            placeholder="Success Momodu" />
        </InputContainer>
        <TextContainer>
          <InfoText>first name comes first</InfoText>
          {errors.fullname && (
            <ErrorText>{`${errors.fullname.message}`}</ErrorText>
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
            placeholder="SuccessMomodu@gmail.com" />
        </InputContainer>
        {errors.email && <ErrorText>{`${errors.email.message}`}</ErrorText>}
      </FieldContainer>

      {/* phone */}
      <FieldContainer>
        <Label>Phone number</Label>
        <InputContainer>
          <Controller
            control={control}
            name="phone"
            rules={{ required: true }}
            render={({ field }) => <PhoneInput {...field} country={"ng"} />} />
        </InputContainer>
        {errors.phone && <ErrorText>{`${errors.phone.message}`}</ErrorText>}
      </FieldContainer>

      {/* password */}
      <FieldContainer>
        <Label>Password</Label>
        <InputContainer>
          <IconImg src={passwordIcon} />
          <CustomInput
            {...register("password")}
            type={PassWordvisibility ? "password" : "text"}
            placeholder="*********" />
          <Icon onClick={handlePassword}>
            {PassWordvisibility ? (
              <BsEyeFill
                size={"20px"}
                color={`${color.primary.bleuDeFrance}`} />
            ) : (
              <BsEyeSlashFill
                size={"20px"}
                color={`${color.primary.bleuDeFrance}`} />
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
            placeholder="*********" />
          <Icon onClick={handleConfirmPassword}>
            {ConfirmPasswordvisibility ? (
              <BsEyeFill
                size={"20px"}
                color={`${color.primary.bleuDeFrance}`} />
            ) : (
              <BsEyeSlashFill
                size={"20px"}
                color={`${color.primary.bleuDeFrance}`} />
            )}
          </Icon>
        </InputContainer>
        {errors.confirm && <ErrorText>{`${errors.confirm.message}`}</ErrorText>}
      </FieldContainer>

      <CustomButton width="100%" disabled={!isValid}>
        Sign up
      </CustomButton>
      <DownTextContainer>
        <InfoText>Already have an account ?</InfoText>
        <Link to={"/login"}>
          <LinkText>Log in here</LinkText>
        </Link>
      </DownTextContainer>
    </FormWrapper>
      <Toaster />
    </>
  );
};

export default signUp;
