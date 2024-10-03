import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: Size;
}

export default function Button({ children, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <ButtonWrapper type="button" variant={variant} size={size} {...props}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{ variant: "primary" | "secondary"; size: Size }>`
  padding: 0.8rem 2.8rem;

  border-radius: 8px;

  ${({ theme }) => theme.fonts.Body6};

  white-space: nowrap;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.main_blue};
        `;
      case "secondary":
        return css`
          border: 1px solid ${({ theme }) => theme.colors.grey_300};

          color: ${({ theme }) => theme.colors.grey_600};
          background-color: ${({ theme }) => theme.colors.white};

          &:hover {
            border: 1px solid ${({ theme }) => theme.colors.grey_600};

            color: ${({ theme }) => theme.colors.main_blue};
          }

          &:checked {
            border: 1px solid ${({ theme }) => theme.colors.main_blue};

            color: ${({ theme }) => theme.colors.main_blue};
          }
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.light_blue};

          border: 1px solid transparent;
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          width: 8rem;
        `;
      case "md":
        return css`
          width: 10.6rem;
        `;
      case "lg":
        return css`
          width: 14.4rem;
        `;
      case "xl":
        return css`
          width: 40.4rem;
        `;
      default:
        return css`
          width: 18.4rem;
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
  }
`;
