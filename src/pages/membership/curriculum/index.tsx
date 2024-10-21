import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import ContentBox from "../components/curriculum/ContentBox";
import { CURRICULUMS } from "../core/curriculum";

export default function index() {
  return (
    <Container>
      <Title>
        <Phrase>합격 데이터 기반 커리큘럼</Phrase>
        <Explanation>실제 합격 데이터에 기반한 논술 입시에 꼭 필요한 학습으로 구성했어요</Explanation>
      </Title>
      <Contents>
        {CURRICULUMS.map((ele) => {
          const { id, label, title_1, title_2, details, imgSrc } = ele;
          return (
            <ContentBox
              key={id}
              id={id}
              label={label}
              title_1={title_1}
              title_2={title_2}
              details={details}
              imgSrc={imgSrc}
            />
          );
        })}
      </Contents>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16rem 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.div`
  ${columnFlex}

  gap: 0.6rem;
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

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;
