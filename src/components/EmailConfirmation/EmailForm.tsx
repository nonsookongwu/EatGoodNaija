import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { emailIcon } from "../../assets";
import { TEmailSchema, TSignUpSchema, emailSchema, signUpSchema } from "../../utils/validation";
import EmailModal from '../EmailModal/EmailModal';
import CustomButton from "../button";
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
    LinkText
} from "../signUpForm/SignUp.styes";

interface Props{
  toggleModal: ()=>void;
}

const EmailForm = ({toggleModal}:Props) => {
    

    

    const {
      register,
      handleSubmit,
      reset,
      getValues,
      control,
      formState: { errors, isSubmitting, isValid },
    } = useForm<TEmailSchema>({ resolver: zodResolver(emailSchema) });

   

    const onSubmit = (data: TEmailSchema) => {
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

      <CustomButton width="100%" disabled={!isValid} onClick={toggleModal}>
        Sign up
      </CustomButton>

      <DownTextContainer>
        <InfoText>Go back to</InfoText>
        <LinkText>Sign in</LinkText>
      </DownTextContainer>
    </FormWrapper>
  );
}

export default EmailForm