import { PresentIc } from "@assets/index";

import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import UnivBox from "../components/event/UnivBox";
import { UNIV_LIST } from "../core/univlist";

export default function index() {
  return (
    <Container>
      <Title>
        <PresentIcon />
        <TitleText>환급 이벤트</TitleText>
      </Title>
      <Phrase>오직 2024년만! 합격생 100% 환급</Phrase>
      <Explanation>목록 대학 논술 전형 합격 인증시 구독료를 100% 환급해드려요 (VAT 제외)</Explanation>
      <UnivsContainer>
        {UNIV_LIST.map((ele) => {
          const { id, univ, img, details } = ele;
          return <UnivBox key={id} id={id} univ={univ} img={img} details={details} />;
        })}
      </UnivsContainer>
      <Button>자세히 보기 &gt; </Button>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10.4rem 0;
  background: linear-gradient(180deg, #f5f6ff 0%, #d2d7ff 100%);
`;

const Title = styled.div`
  ${commonFlex}

  gap: 0.6rem;
`;

const PresentIcon = styled(PresentIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const TitleText = styled.p`
  ${({ theme }) => theme.fonts.Body5};

  color: ${({ theme }) => theme.colors.main_blue};
`;

const Phrase = styled.p`
  margin-top: 3.2rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Headline2};
`;

const Explanation = styled.p`
  margin-top: 1.6rem;
  color: ${({ theme }) => theme.colors.grey_600};
  ${({ theme }) => theme.fonts.Body2};
`;

const UnivsContainer = styled.div`
  display: grid;
  gap: 1.4rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.4rem 11rem;
  grid-template-columns: repeat(10, 1fr);

  @media (width <= 1098px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Button = styled.button`
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_700};
  color: white;
  ${({ theme }) => theme.fonts.Body3};
`;
