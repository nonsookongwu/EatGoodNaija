import React from 'react'
import {
  ModalBackground,
  ModalWrapper,
  TopImage,
  ModalText,
} from "./Modal.styles";
import { emailModal } from '../../assets';
import CustomButton from '../button';

interface Props{
  onCloseModal: () => void;
  imageUrl: string;
  modalText: string;
  buttonText: string;
}

const EmailModal = ({onCloseModal, buttonText, modalText, imageUrl}:Props) => {
  return (
    <ModalBackground onClick={onCloseModal}>
      <ModalWrapper onClick={(e)=> e.stopPropagation()}>
        <TopImage src={imageUrl} />
        <ModalText>{modalText}</ModalText>
        <CustomButton width="100%">{buttonText}</CustomButton>
      </ModalWrapper>
    </ModalBackground>
  );
}

export default EmailModal