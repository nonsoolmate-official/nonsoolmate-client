import { CheckBtnIc, CheckEmptyIc } from "@assets/index";
import { AGREEMENT_TEXT } from "@pages/payment/core/agreementText";
import { useState } from "react";
import theme from "style/theme";
import styled from "styled-components";

interface AgreementsProps {
  handleAgreements: (agreeState: boolean) => void;
}
export default function Agreements({ handleAgreements }: AgreementsProps) {
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);
  const [isAgreeMinorConsent, setIsAgreeMinorConsent] = useState(false);

  function clickTermsAgreement() {
    const updatedTermsAgreement = !isAgreeTerms;
    setIsAgreeTerms(updatedTermsAgreement);
    handleAgreements(updatedTermsAgreement && isAgreeMinorConsent);
  }
  function clickMinorConsentAgreement() {
    const updatedMinorConsent = !isAgreeMinorConsent;
    setIsAgreeMinorConsent(updatedMinorConsent);
    handleAgreements(isAgreeTerms && updatedMinorConsent);
  }

  return (
    <AgreementContainer>
      <Agreement>
        <CheckIconBox onClick={clickTermsAgreement}>{isAgreeTerms ? <CheckBtnIc /> : <CheckEmptyIc />}</CheckIconBox>
        <AgreementText>
          <a href="https://nonsoolmatee.notion.site/125c4d861687802793b3ea1faf085a74?pvs=4">{AGREEMENT_TEXT.terms1}</a>
        </AgreementText>
      </Agreement>
      <Agreement>
        <CheckIconBox onClick={clickMinorConsentAgreement}>
          {isAgreeMinorConsent ? <CheckBtnIc /> : <CheckEmptyIc />}
        </CheckIconBox>
        <AgreementText>
          <a href="https://www.notion.so/nonsoolmatee/125c4d86168780078295e23ffb0e6717?pvs=4#128c4d86168780ca9a9bf1e8de958aa0">
            {AGREEMENT_TEXT.terms2}
          </a>
        </AgreementText>
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

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.grey_1000};
    }
  }
`;
