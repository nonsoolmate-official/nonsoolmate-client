import styled from "styled-components";

interface InputProps {
  couponNumber: string;
  registerCoupon: () => void;
  mismatch: boolean;
  hasKorean: boolean;
  handleCouponNumChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CouponInput(props: InputProps) {
  const { couponNumber, registerCoupon, mismatch, hasKorean, handleCouponNumChange } = props;

  return (
    <InputContainer>
      <CodeField
        type="text"
        placeholder="쿠폰 코드를 입력해 주세요"
        value={couponNumber}
        onChange={handleCouponNumChange}
        $mismatch={mismatch}
        $hasKorean={hasKorean}></CodeField>
      <RegisterButton type="button" onClick={registerCoupon}>
        쿠폰 등록
      </RegisterButton>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  padding: 0 0 0.8rem;
`;

export const CodeField = styled.input<{ $mismatch: boolean; $hasKorean: boolean }>`
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: ${({ $mismatch, $hasKorean }) => ($mismatch || $hasKorean ? "1px solid #FF5858" : "1px solid #E2E4E8")};
  border-radius: 8px;
  background-color: white;
  color: black;
  transition: border-color 0.3s ease;
  ${({ theme }) => theme.fonts.Body6};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.main_blue};
    outline: none;
  }

  &::placeholder {
    ${({ theme }) => theme.fonts.Body6};

    color: ${({ theme }) => theme.colors.grey_500};
  }
`;

const RegisterButton = styled.button`
  display: flex;
  padding: 0.8rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_200};
  border-radius: 8px;
  background-color: white;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Body6};
`;
