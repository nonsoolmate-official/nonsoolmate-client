import { CheckSmaillIc } from "@assets/index";
import { MEMBERSHIP_ADVANTAGE_LIST } from "membership/core/membership";
import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function Summary() {
  return (
    <Container>
      {MEMBERSHIP_ADVANTAGE_LIST.map((ele) => {
        return (
          <TextContainer key={ele}>
            <CheckSmaillIcon />
            <Text>{ele}</Text>
          </TextContainer>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}
  gap: 1.6rem;
  align-items: flex-start;
  margin-bottom: 7.9rem;
`;

const TextContainer = styled.span`
  ${commonFlex}
  gap: 0.4rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body4};
  color: ${({ theme }) => theme.colors.grey_1000};
`;
const CheckSmaillIcon = styled(CheckSmaillIc)`
  width: 1.6rem;
  height: 1.6rem;
`;
