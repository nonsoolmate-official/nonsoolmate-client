import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Variant = "primary" | "secondary" | "tertiary" | "text";

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

  align-items: center;

  border-radius: 8px;

  ${({ theme }) => theme.fonts.Body6};

  white-space: nowrap;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.main_blue};

          &:hover {
            background-color: ${({ theme }) => theme.colors.middle_blue};
          }

          &:active {
            background-color: ${({ theme }) => theme.colors.dark_blue};
          }
        `;
      case "secondary":
        return css`
          border-radius: 4px;

          color: ${({ theme }) => theme.colors.main_blue};
          background-color: ${({ theme }) => theme.colors.light_blue};

          &:hover {
            color: ${({ theme }) => theme.colors.middle_blue};
          }

          &:active {
            color: ${({ theme }) => theme.colors.dark_blue};
          }
        `;
      case "tertiary":
        return css`
          border: 1px solid ${({ theme }) => theme.colors.grey_300};

          &:hover {
            background-color: ${({ theme }) => theme.colors.grey_50};

            transition: all 0.2s ease-in-out;
          }
        `;
      case "text":
        return css`
          padding: 0;

          color: ${({ theme }) => theme.colors.grey_300};

          text-decoration: underline;

          ${({ theme }) => theme.fonts.Body4};

          &:hover {
            color: ${({ theme }) => theme.colors.main_blue};

            transition: all 0.2s ease-in-out;
          }
        `;
      default:
        return css`
          color: ${({ theme }) => theme.colors.main_blue};
          background-color: ${({ theme }) => theme.colors.white};
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "xs":
        return css`
          width: 8rem;
        `;
      case "sm":
        return css`
          width: 12rem;
        `;
      case "md":
        return css`
          width: 14.4rem;
        `;
      case "lg":
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
    color: ${({ theme }) => theme.colors.grey_400};
    background-color: ${({ theme }) => theme.colors.grey_100};
  }
`;
