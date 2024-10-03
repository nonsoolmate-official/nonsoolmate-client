import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errorMessage?: string;
}

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  isError = false,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <>
      <InputLayout type={type} placeholder={placeholder} value={value} onChange={onChange} {...props} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
}

const InputLayout = styled.input`
  position: relative;

  width: 100%;

  padding: 0 1.2rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_100};
  border-radius: 6px;
`;

const ErrorMessage = styled.p`
  position: absolute;

  top: 0.2rem;

  color: ${({ theme }) => theme.colors.error};

  ${({ theme }) => theme.fonts.Body8};
`;
