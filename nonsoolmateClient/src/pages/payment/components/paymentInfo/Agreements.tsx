import { CheckBtnIc, CheckEmptyIc } from "@assets/index";
import { AGREEMENT_TEXT } from "@pages/payment/core/agreementText";
import { useEffect, useState } from "react";
import theme from "style/theme";
import styled from "styled-components";

interface AgreementsProps {
  handleAgreements: (agreeState: boolean) => void;
}
export default function Agreements({ handleAgreements }: AgreementsProps) {
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);
  const [isAgreeMinorConsent, setIsAgreeMinorConsent] = useState(false);

  function clickTermsAgreement() {
    setIsAgreeTerms(!isAgreeTerms);
  }
  function clickMinorConsentAgreement() {
    setIsAgreeMinorConsent(!isAgreeMinorConsent);
  }

  useEffect(() => {
    if (isAgreeTerms && isAgreeMinorConsent) {
      handleAgreements(true);
    } else {
      handleAgreements(false);
    }
  }, [isAgreeTerms, isAgreeMinorConsent]);

  return (
    <AgreementContainer>
      <Agreement>
        <CheckIconBox onClick={clickTermsAgreement}>{isAgreeTerms ? <CheckBtnIc /> : <CheckEmptyIc />}</CheckIconBox>
        <AgreementText> {AGREEMENT_TEXT.terms1}</AgreementText>
      </Agreement>
      <Agreement>
        <CheckIconBox onClick={clickMinorConsentAgreement}>
          {isAgreeMinorConsent ? <CheckBtnIc /> : <CheckEmptyIc />}
        </CheckIconBox>
        <AgreementText>{AGREEMENT_TEXT.terms2}</AgreementText>
      </Agreement>
    </AgreementContainer>
  );
}

const AgreementContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Agreement = styled.li`
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
