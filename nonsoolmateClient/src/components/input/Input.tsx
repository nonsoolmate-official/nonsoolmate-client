import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorMessage?: string;
}

export default function Input({ placeholder, value, onChange, isError = false, errorMessage, ...props }: InputProps) {
  return (
    <InputWrapper>
      <InputLayout placeholder={placeholder} value={value} onChange={onChange} isError={isError} {...props} />
      <ErrorMessage isVisible={isError}>{errorMessage}</ErrorMessage>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;

  gap: 0.2rem;
`;

const InputLayout = styled.input<{ isError: boolean }>`
  position: relative;

  padding: 0 1.2rem;

  height: 3.6rem;

  border: 1px solid ${({ theme, isError }) => (isError ? theme.colors.error : theme.colors.grey_100)};
  border-radius: 6px;

  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.main_blue};
  }
`;

const ErrorMessage = styled.p<{ isVisible: boolean }>`
  position: absolute;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  top: 4.2rem;
  left: 0;

  color: ${({ theme }) => theme.colors.error};
  ${({ theme }) => theme.fonts.Body8};

  white-space: nowrap;
`;
