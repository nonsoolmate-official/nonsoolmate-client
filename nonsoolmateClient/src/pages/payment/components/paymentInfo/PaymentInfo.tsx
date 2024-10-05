import { CheckBtnIc, CheckEmptyIc } from "@assets/index";
import { useState } from "react";
import theme from "style/theme";
import styled from "styled-components";

export default function PaymentInfo() {
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);
  const [isAgreeMinorConsent, setIsAgreeMinorConsent] = useState(false);

  function clickTermsAgreement() {
    setIsAgreeTerms(!isAgreeTerms);
  }
  function clickMinorConsentAgreement() {
    setIsAgreeMinorConsent(!isAgreeMinorConsent);
  }
  return (
    <PaymentInfoContainer>
      <Title>결제 정보</Title>
      <InfoBox>
        <InfoTitle>주문 정보</InfoTitle>
        <InfoDetail>
          <Plan>베이직 플랜</Plan>
          <Price>260,000원</Price>
        </InfoDetail>
      </InfoBox>
      <InfoBox>
        <InfoTitle>할인 정보</InfoTitle>
        <InfoDetail>
          <Coupon>얼리버드 특가</Coupon>
          <DiscountPriceBox>
            <PrevPrice>260,000원</PrevPrice>
            <Discount>20% OFF</Discount>
          </DiscountPriceBox>
        </InfoDetail>
      </InfoBox>
      <DevideLine />
      <Overview>
        <DiscountOverview>
          <TotalDiscount>총 할인가</TotalDiscount>
          <Price>-42,000원</Price>
        </DiscountOverview>
        <PaymentOverview>
          <TotalPayment>총 결제 금액</TotalPayment>
          <TotalPriceBox>
            <TotalPrice>168,000원</TotalPrice>
            <Unit>/월</Unit>
          </TotalPriceBox>
        </PaymentOverview>
      </Overview>
      <AgreementBox>
        <Agreement>
          <CheckIconBox onClick={clickTermsAgreement}>{isAgreeTerms ? <CheckBtnIc /> : <CheckEmptyIc />}</CheckIconBox>
          <AgreementText> [필수] 결제 서비스 이용 약관 및 개인정보 처리 동의</AgreementText>
        </Agreement>
        <Agreement>
          <CheckIconBox onClick={clickMinorConsentAgreement}>
            {isAgreeMinorConsent ? <CheckBtnIc /> : <CheckEmptyIc />}
          </CheckIconBox>
          <AgreementText>[필수] 미성년자 법정대리인 결제 동의</AgreementText>
        </Agreement>
      </AgreementBox>
      <PaymentButton $isAgreeTerms={isAgreeTerms} $isAgreeMinorConsent={isAgreeMinorConsent}>
        결제하기
      </PaymentButton>
    </PaymentInfoContainer>
  );
}

const PaymentInfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 29.6rem;
  height: 42.8rem;
  margin-top: 6.8rem;
  padding: 2.4rem;
  border: 1px solid ${theme.colors.grey_200};
  border-radius: 12px;
  ${({ theme }) => theme.effects.container_shadow};

  user-select: none;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Body1}
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const InfoTitle = styled.p`
  ${({ theme }) => theme.fonts.Body5}

  color: ${theme.colors.grey_800};
`;

const InfoDetail = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.grey_700};
`;

const Plan = styled.p`
  ${({ theme }) => theme.fonts.Body6}
`;

const Price = styled.p`
  ${({ theme }) => theme.fonts.Body6}
`;

const Coupon = styled.p`
  ${({ theme }) => theme.fonts.Body6}

  white-space: nowrap;
`;

const DiscountPriceBox = styled.div`
  ${({ theme }) => theme.fonts.Body8}

  display: flex;
  gap: 0.8rem;
  align-items: center;
  white-space: nowrap;
`;

const PrevPrice = styled.p`
  color: ${theme.colors.grey_500};
  text-decoration: line-through;
`;

const Discount = styled.p`
  color: ${theme.colors.error};
`;

const DevideLine = styled.hr`
  height: 1px;
  margin: 0;
  border: 0;
  background-color: ${({ theme }) => theme.colors.grey_200};
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const DiscountOverview = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.grey_700};
`;

const PaymentOverview = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalDiscount = styled.p`
  ${({ theme }) => theme.fonts.Body6}
`;

const TotalPayment = styled.p`
  ${({ theme }) => theme.fonts.Body1}

  white-space: nowrap;
`;

const TotalPriceBox = styled.div`
  display: flex;
  gap: 0;
  justify-content: flex-end;
  width: 16.1rem;
`;

const TotalPrice = styled.p`
  ${({ theme }) => theme.fonts.Body1}

  color: ${theme.colors.main_blue};
`;

const Unit = styled.p`
  ${({ theme }) => theme.fonts.Body2}
`;

const AgreementBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Agreement = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const CheckIconBox = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;

const AgreementText = styled.p`
  ${({ theme }) => theme.fonts.Caption1}

  color: ${theme.colors.grey_500};
`;

const PaymentButton = styled.button<{ $isAgreeTerms: boolean; $isAgreeMinorConsent: boolean }>`
  ${({ theme }) => theme.fonts.Body5}

  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  ${({ theme, $isAgreeTerms, $isAgreeMinorConsent }) =>
    $isAgreeTerms && $isAgreeMinorConsent
      ? `background-color : ${theme.colors.main_blue}`
      : `background-color : ${theme.colors.grey_100}`};

  ${({ theme, $isAgreeTerms, $isAgreeMinorConsent }) =>
    $isAgreeTerms && $isAgreeMinorConsent ? `color : ${theme.colors.white}` : `color : ${theme.colors.grey_400}`}
`;
