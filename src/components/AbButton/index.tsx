import React, { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

export interface PropsButton extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
  secondary?: boolean;
}

const StyledAbButton = styled.button<{ $secondary?: boolean }>`
  background: ${(props) => (props.$secondary ? 'transparent' : '#EB9B00')};
  border: 2px solid #eb9b00;
  padding: 1.5rem 2rem;
  color: ${(props) => (props.$secondary ? '#EB9B00' : '#fff')};
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  &:hover {
    ${(props) =>
      props.$secondary
        ? 'color: #B87900; border-color: #B87900;'
        : 'background: #B87900; border-color: #B87900;'}
  }
`;

export const AbButton = ({
  label = 'Button',
  secondary = false,
}: PropsButton) => {
  return (
    <StyledAbButton $secondary={secondary} role="button">
      {label}
    </StyledAbButton>
  );
};

export default AbButton;
