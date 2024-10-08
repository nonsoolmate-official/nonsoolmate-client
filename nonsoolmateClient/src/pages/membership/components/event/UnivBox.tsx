import { UnivListTypes } from "@pages/membership/core/univlist";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

interface UnivBoxProps extends UnivListTypes {}

export default function UnivBox(props: UnivBoxProps) {
  const { id, univ, img, details } = props;

  return (
    <Container>
      <UnivImg as={img} />
      <UnivName $id={id}>{univ}</UnivName>
      {details && <UnivDetails>{details}</UnivDetails>}
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}

  padding: 2.4rem 1rem;
  border: 1px solid white;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 16px 0 rgb(0 0 0 / 5%);
`;

const UnivImg = styled.svg`
  width: 8.8rem;
  height: 8.8rem;
`;

const UnivName = styled.p<{ $id: number }>`
  margin-top: ${({ $id }) => ($id == 4 ? "0" : "1.6rem")};
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.grey_800};
`;

const UnivDetails = styled.p`
  ${({ theme }) => theme.fonts.Body7};

  color: ${({ theme }) => theme.colors.grey_800};
`;
