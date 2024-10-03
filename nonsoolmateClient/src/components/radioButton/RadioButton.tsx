import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function RadioButton({ label, name, checked, ...props }: RadioButtonProps) {
  return (
    <RadioButtonWrapper>
      <StyledRadioButton type="radio" name={name} checked={checked} {...props} />
      <Label>{label}</Label>
    </RadioButtonWrapper>
  );
}

export const RadioButtonWrapper = styled.div`
  display: flex;

  align-items: center;

  gap: 0.8rem;
`;

const StyledRadioButton = styled.input`
  display: none;

  & + label {
    padding: 0.8rem 4.15rem;

    border: 1px solid ${({ theme }) => theme.colors.grey_300};
    border-radius: 4px;

    color: ${({ theme }) => theme.colors.grey_600};

    transition: 0.2s ease-in-out;

    cursor: pointer;
  }

  &:checked + label {
    border: 1px solid transparent;

    color: ${({ theme }) => theme.colors.main_blue};
    background-color: ${({ theme }) => theme.colors.light_blue};
  }
`;

const Label = styled.label`
  ${({ theme }) => theme.fonts.Body6};

  background-color: ${({ theme }) => theme.colors.white};
`;
