import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './ButtonStyles';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary: boolean;
  children: ReactNode;
}

export const Button = ({ primary, children }: IButtonProps) => (
  <StyledButton primary={primary}>{children}</StyledButton>
);
