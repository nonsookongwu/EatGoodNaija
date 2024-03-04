import React, { useState } from 'react'
import { CompanyLogo, Divider, DividerText, GoogleAuthButton, Line, LoginContainer, LoginInnerDown, LoginInnerUp, LoginLeft, LoginRight, TopText } from './categoryPage.styles';
import { FcGoogle } from 'react-icons/fc';
import { EGNLogo } from '../../assets';
import LoginForm from '../../components/loginForm/LoginForm';
import CategoryForm from '../../components/categorySelect/CategoryForm';
import LoadingModal from '../../components/EmailModal/LoadingModal';

const CategoryPage = () => {
    const [toggleModal, setToggleModal] = useState(false);


    const handleModal = () => {
      setToggleModal(!toggleModal);
    };
    console.log(toggleModal)
    return (
      <>
        {toggleModal && <LoadingModal />}
        <LoginContainer>
          <LoginLeft />
          <LoginRight>
            <LoginInnerUp>
              <CompanyLogo src={EGNLogo} />
              <TopText>Choose a Category</TopText>
            </LoginInnerUp>
            <LoginInnerDown>
              {/* <GoogleAuthButton>
      {" "}
      <FcGoogle size={"20px"} /> Sign up with Google
    </GoogleAuthButton> */}
              {/* <Divider>
      <Line />
      <DividerText>OR</DividerText>
      <Line />
    </Divider> */}
              <CategoryForm setModalToggle={handleModal} />
            </LoginInnerDown>
          </LoginRight>
        </LoginContainer>
      </>
    );
}

export default CategoryPage