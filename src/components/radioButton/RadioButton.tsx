import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface RadioProps {
  label: string;
  name: string;
  value: string;
}

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function RadioButton({ label, value, id, ...props }: RadioButtonProps) {
  return (
    <RadioButtonWrapper>
      <StyledRadioButton id={id} type="radio" value={value} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </RadioButtonWrapper>
  );
}

export const RadioButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const StyledRadioButton = styled.input`
  display: none;

  & + label {
    padding: 0.8rem 4.15rem;
    border: 1px solid ${({ theme }) => theme.colors.grey_300};
    color: ${({ theme }) => theme.colors.grey_600};
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  &:checked + label {
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.colors.light_blue};
    color: ${({ theme }) => theme.colors.main_blue};
  }
`;

const Label = styled.label`
  ${({ theme }) => theme.fonts.Body6};

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
`;
