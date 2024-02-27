import React, { ReactNode } from "react";
import { ButtonStyle } from "./Button.styled";
import { color } from "../../theme/color";
import { TEmailSchema } from "../../utils/validation";

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
