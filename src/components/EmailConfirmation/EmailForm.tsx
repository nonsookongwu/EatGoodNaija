import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import { emailIcon } from "../../assets";
import {
  TEmailSchema,
  emailSchema
} from "../../utils/validation";
import Spinner from "../Spinner";
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
  LinkText,
} from "../signUpForm/SignUp.styes";

interface Props {
  toggleModal: () => void;
  onSubmitForm: (data: TEmailSchema) => void;
  isSubmitting: boolean;
}

const EmailForm = ({ toggleModal, onSubmitForm, isSubmitting }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    
    formState: { errors, isValid },
  } = useForm<TEmailSchema>({ resolver: zodResolver(emailSchema) });

 

  const onSubmit = (data: TEmailSchema) => {
    onSubmitForm(data);

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
        <CustomButton width="100%" disabled={!isValid} onClick={toggleModal}>
          Send reset instructions {isSubmitting && <Spinner/>}
        </CustomButton>
      </FormWrapper>

      <DownTextContainer>
        <InfoText>Go back to</InfoText>
        <Link to={"/login"}>
          <LinkText>Sign in</LinkText>
        </Link>
      </DownTextContainer>
    </>
  );
};

export default EmailForm;
