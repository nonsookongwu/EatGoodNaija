import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomButton from '../button'
import { CustomSelect, DownTextContainer, FieldContainer, FormWrapper, InfoText, InputContainer, Label, LinkText, Options } from './CategoryForm.styles'

interface Props {
  setModalToggle: () => void;
}

const CategoryForm = ({setModalToggle}:Props) => {
    const [role, setRole] = useState<string | null>()
    // const [isLoading, setIsLoading] = useState(false)

 const navigate = useNavigate()
// console.log(role)
 

    const handleSubmit = () => {
        console.log(role)
        setTimeout(() => {
           
          setModalToggle()
         
      }, 3000);
        if (role === "Customer") {
          navigate("/signup");
        } else {
          navigate("/");
        }
      
    
  };
  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        {/* email */}
        <FieldContainer>
          <Label>Select Category</Label>
          <InputContainer>
            {/* <IconImg src={emailIcon} /> */}
            <CustomSelect onChange={(e) => setRole(e.target.value)}>
              <Options>select a category</Options>
              <Options value={"Vendor"}>Vendor</Options>
              <Options value={"Customer"}>Customer</Options>
            </CustomSelect>
          </InputContainer>
          {/* {errors.email && <ErrorText>{`${errors.email.message}`}</ErrorText>} */}
        </FieldContainer>
        <CustomButton width="100%">Next</CustomButton>
      </FormWrapper>
      <DownTextContainer>
        <InfoText>Go back to</InfoText>
        <Link to={"/login"}>
          <LinkText>Sign in</LinkText>
        </Link>
      </DownTextContainer>
    </>
  );
}

export default CategoryForm