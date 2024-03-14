import { FcGoogle } from "react-icons/fc";
import { EGNLogo } from "../../assets";
import UsersignUp from "../../components/signUpForm/UserSignUp";
import {
  CompanyLogo,
  Divider,
  DividerText,
  GoogleAuthButton,
  Line,
  SignupContainer,
  SignupInnerDown,
  SignupInnerUp,
  SignupLeft,
  SignupRight,
  TopText,
} from "./SignUp.styles";
import VendorSignUp from "../../components/signUpForm/VendorSignUpform";

const VendorSignUpPage = () => {
  return (
    <SignupContainer>
      <SignupLeft />
      <SignupRight>
        <SignupInnerUp>
          <CompanyLogo src={EGNLogo} />
          <TopText>Create a new Account</TopText>
        </SignupInnerUp>
        <SignupInnerDown>
          <GoogleAuthButton>
            {" "}
            <FcGoogle size={"20px"} /> Sign up with Google
          </GoogleAuthButton>
          <Divider>
            <Line />
            <DividerText>OR</DividerText>
            <Line />
          </Divider>
          <VendorSignUp />
        </SignupInnerDown>
      </SignupRight>
    </SignupContainer>
  );
};

export default VendorSignUpPage;
