import { FemaleStudentIc, MaleStudentIc, NeutralStudentIc } from "@assets/index";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

interface ReviewCardProps {
  gender: string;
  univ: string;
  category: string;
  content: string;
}

export default function ReviewCard({ gender, univ, category, content }: ReviewCardProps) {
  return (
    <CardWrapper>
      <InfoLayout>
        {gender === "M" ? <MaleStudentIc /> : gender === "F" ? <FemaleStudentIc /> : <NeutralStudentIc />}
        <InfoBox>
          <University>{univ} 첨삭</University>
          <Category>{category}</Category>
        </InfoBox>
      </InfoLayout>

      <Content>{content}</Content>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  width: 32.8rem;
  padding: 2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const InfoLayout = styled.div`
  display: flex;
  gap: 2.2rem;
`;

const InfoBox = styled.div`
  ${columnFlex}
`;

const University = styled.span`
  ${({ theme }) => theme.fonts.Body5};
`;

const Category = styled.span`
  color: ${({ theme }) => theme.colors.grey_500};

  ${({ theme }) => theme.fonts.Body6};
`;

const Content = styled.span`
  ${({ theme }) => theme.fonts.Body4};

  word-break: keep-all;
`;
