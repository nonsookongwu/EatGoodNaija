import React, { ReactNode } from 'react'
import { ButtonStyle } from './Button.styled'
import { color } from '../../theme/color'

interface Props{
  disabled?: boolean;
  children: ReactNode;
}

const CustomButton = ({disabled, children}:Props) => {
  return (
    <ButtonStyle disabled={disabled} bgColor={`${color.primary.bleuDeFrance}`}>
      {children}
    </ButtonStyle>
  );
}

export default CustomButton