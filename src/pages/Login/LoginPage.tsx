import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { EGNLogo } from '../../assets';
import { LoginContainer, LoginRight, LoginInnerUp, CompanyLogo, TopText, LoginInnerDown, GoogleAuthButton, Divider, Line, DividerText, LoginLeft } from './LoginPage.styles';
import LoginForm from '../../components/loginForm/LoginForm';

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