import React from "react";
import {
  ModalBackground,
  ModalWrapper,
  TopImage,
  ModalText,
} from "./Modal.styles";
import { emailModal } from "../../assets";
import CustomButton from "../button";
import { useNavigate } from "react-router-dom";
import { TEmailSchema, TPasswordSchema } from "../../utils/validation";

interface Props {
  onCloseModal: () => void;
  imageUrl: string;
  modalText: string;
  buttonText: string;
  onClickButton: () => void;
}

const ResetPasswordModal = ({
  onCloseModal,
  buttonText,
  modalText,
  imageUrl,
  onClickButton
}: Props) => {

  return (
    <ModalBackground onClick={onCloseModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <TopImage src={imageUrl} />
        <ModalText>{modalText}</ModalText>
        <CustomButton width="100%" onClick={onClickButton}>
          {buttonText}
        </CustomButton>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default ResetPasswordModal;
