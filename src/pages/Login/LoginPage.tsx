import { FcGoogle } from 'react-icons/fc';
import { EGNLogo } from '../../assets';
import LoginForm from '../../components/loginForm/LoginForm';
import { CompanyLogo, Divider, DividerText, GoogleAuthButton, Line, LoginContainer, LoginInnerDown, LoginInnerUp, LoginLeft, LoginRight, TopText } from './LoginPage.styles';

const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginLeft />
      <LoginRight>
        <LoginInnerUp>
          <CompanyLogo src={EGNLogo} />
          <TopText>Create a new Account</TopText>
        </LoginInnerUp>
        <LoginInnerDown>
          <GoogleAuthButton>
            {" "}
            <FcGoogle size={"20px"} /> Sign up with Google
          </GoogleAuthButton>
          <Divider>
            <Line />
            <DividerText>OR</DividerText>
            <Line />
          </Divider>
          <LoginForm />
        </LoginInnerDown>
      </LoginRight>
    </LoginContainer>
  );
}

export default LoginPage