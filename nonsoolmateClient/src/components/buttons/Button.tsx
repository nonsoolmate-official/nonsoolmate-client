import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type Size = "sm" | "md" | "lg" | "xl";
type Variant = "primary" | "secondary" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export default function Button({ children, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <ButtonWrapper type="button" variant={variant} size={size} {...props}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{ variant: Variant; size: Size }>`
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
          border-radius: 4px;

          color: ${({ theme }) => theme.colors.main_blue};
          background-color: ${({ theme }) => theme.colors.light_blue};
        `;
      case "text":
        return css`
          color: ${({ theme }) => theme.colors.main_blue};
          background-color: ${({ theme }) => theme.colors.white};
        `;
      default:
        return css`
          color: ${({ theme }) => theme.colors.grey_300};

          text-decoration: underline;

          &:hover {
            color: ${({ theme }) => theme.colors.main_blue};
          }
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
          width: 14.4rem;
        `;
      case "md":
        return css`
          width: 19.9rem;
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
