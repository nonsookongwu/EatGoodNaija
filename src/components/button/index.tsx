import React, { ReactNode } from 'react'
import { ButtonStyle } from './Button.styled'
import { color } from '../../theme/color'

interface Props{
  disabled?: boolean;
  children: ReactNode;
  width?: string;
}

const CustomButton = ({disabled, children, width}:Props) => {
  return (
    <ButtonStyle width={width} disabled={disabled} bgColor={`${color.primary.bleuDeFrance}`}>
      {children}
    </ButtonStyle>
  );
}

export default CustomButton