import { ReactNode } from "react";
import { color } from "../../theme/color";
import { ButtonStyle } from "./Button.styled";

interface Props {
  disabled?: boolean;
  children: ReactNode;
  width?: "100%";
  onClick?: () => void;
}

const CustomButton = ({ disabled, children, width, onClick }: Props) => {
  return (
    <ButtonStyle
      width={width}
      disabled={disabled}
      $bgColor={`${color.primary.bleuDeFrance}`}
      onClick={onClick}
      type="submit"
    >
      {children}
    </ButtonStyle>
  );
};

export default CustomButton;
