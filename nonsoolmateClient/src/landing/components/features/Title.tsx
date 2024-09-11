import { PracticeIc, TakeTestIc } from "@assets/index";
import { columnFlex } from "style/commonStyle";
import theme from "style/theme";
import styled from "styled-components";

interface TitleProps {
  icType: string;
  mainTitle: string;
  subTitle: string;
  caution?: string;
}
export default function Title(props: TitleProps) {
  const { icType, mainTitle, subTitle, caution } = props;
  return (
    <TitleContainer>
      {icType === "test" ? <TakeTestIc /> : <PracticeIc />}
      <TitleBox>
        <MainTitle>{mainTitle}</MainTitle>
        <SubTitleBox>
          <SubTitle>{subTitle}</SubTitle>
          {caution && <Caution>{caution}</Caution>}
        </SubTitleBox>
      </TitleBox>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  ${columnFlex}

  gap: 3rem;
  margin-bottom: 4rem;
  padding: 10.4rem 0;
`;

const TitleBox = styled.div`
  ${columnFlex}

  gap:1.2rem;
`;

const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline2};
`;

const SubTitleBox = styled.div`
  ${columnFlex};

  gap: 0.8rem;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2};

  color: ${theme.colors.grey_700};
`;

const Caution = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${theme.colors.grey_400};
`;
