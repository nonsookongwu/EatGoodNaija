import CustomButton from "../button";
import {
  ModalBackground,
  ModalText,
  ModalWrapper,
  TopImage,
} from "./Modal.styles";

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
  onClickButton,
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
