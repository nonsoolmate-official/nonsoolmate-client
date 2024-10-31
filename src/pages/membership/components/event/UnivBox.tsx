import { UnivListTypes } from "@pages/membership/core/univlist";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

interface UnivBoxProps extends UnivListTypes {}

export default function UnivBox(props: UnivBoxProps) {
  const { id, univ, img, details } = props;

  return (
    <Container $id={id}>
      <UnivImg as={img} />
      <Contents>
        <UnivName>{univ}</UnivName>
        {details && <UnivDetails>{details}</UnivDetails>}
      </Contents>
    </Container>
  );
}

const Container = styled.div<{ $id: number }>`
  ${columnFlex}

  gap: ${({ $id }) => ($id == 4 || $id == 5 ? "0.8rem" : "1.6rem")};
  padding: ${({ $id }) => ($id == 4 || $id == 5 ? "2rem 1rem" : "2.4rem 1rem")};
  border: 1px solid white;
  border-radius: 12px;
  background: white;
  box-shadow: ${({ theme }) => theme.effects.modal_shadow};
`;

const UnivImg = styled.svg`
  width: 8.8rem;
  height: 8.8rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UnivName = styled.p`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.grey_800};
`;

const UnivDetails = styled.p`
  ${({ theme }) => theme.fonts.Body7};

  color: ${({ theme }) => theme.colors.grey_800};
`;
