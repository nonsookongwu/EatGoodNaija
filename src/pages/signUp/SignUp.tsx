import { FcGoogle } from "react-icons/fc";
import { EGNLogo } from '../../assets';
import SignUp from '../../components/signUpForm/SignUp';
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

const SignUpPage = () => {
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
          <SignUp/>
        </SignupInnerDown>
      </SignupRight>
    </SignupContainer>
  );
}

export default SignUpPage