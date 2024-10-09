import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorMessage?: string | null;
}

export default function Input({
  placeholder,
  value = "",
  onChange,
  isError = false,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <InputWrapper>
      <InputLayout placeholder={placeholder} value={value} onChange={onChange} isError={isError} {...props} />
      {isError && <ErrorMessage isVisible={isError}>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: relative;
`;

const InputLayout = styled.input<{ isError: boolean }>`
  position: relative;
  height: 3.6rem;
  padding: 0 1.2rem;
  border: 1px solid ${({ theme, isError }) => (isError ? theme.colors.error : theme.colors.grey_100)};
  border-radius: 6px;
  outline: none;

  ${({ theme }) => theme.fonts.Body6};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.main_blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_300};
  }
`;

const ErrorMessage = styled.p<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: absolute;
  top: 4.2rem;
  left: 0;
  color: ${({ theme }) => theme.colors.error};
  ${({ theme }) => theme.fonts.Body8};

  white-space: nowrap;
`;
