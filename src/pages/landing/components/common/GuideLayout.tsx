import { PracticeIc, PriceIc, ReviewIc, TakeTestIc } from "@assets/index";
import { HTMLAttributes } from "react";
import { columnFlex } from "style/commonStyle";
import { media } from "style/responsiveStyle";
import theme from "style/theme";
import styled from "styled-components";

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  icType: string;
  badge: string;
  mainTitle: string;
  subTitle: string;
  caution?: string;
}
export default function GuideLayout({ icType, badge, mainTitle, subTitle, caution, ...props }: TitleProps) {
  return (
    <Wrapper {...props}>
      <BadgeLayout>
        {icType === "test" ? (
          <TakeTestIc />
        ) : icType === "practice" ? (
          <PracticeIc />
        ) : icType === "price" ? (
          <PriceIc />
        ) : (
          <ReviewIc />
        )}
        {badge}
      </BadgeLayout>

      <TitleBox $caution={caution}>
        <MainTitle>{mainTitle}</MainTitle>
        <SubTitleBox>
          <SubTitle>{subTitle}</SubTitle>
          {caution && <Caution>{caution}</Caution>}
        </SubTitleBox>
      </TitleBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  ${columnFlex}

  gap: 3rem;
  padding: 10.4rem 0;

  ${media.tablet} {
    padding: 10.4rem 2rem;
  }
`;

const BadgeLayout = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.6rem;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  color: ${({ theme }) => theme.colors.main_blue};

  ${({ theme }) => theme.fonts.Body5};
`;

const TitleBox = styled.div<{ $caution: string | undefined }>`
  ${columnFlex}

  ${({ $caution }) => ($caution ? "gap:1.6rem" : "gap:1.2rem")}
`;

const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline2};

  ${media.tablet} {
    text-align: center;
    white-space: pre-line;
  }

  ${media.mobile} {
    ${({ theme }) => theme.fonts.Body1};
  }
`;

const SubTitleBox = styled.div`
  ${columnFlex};

  gap: 0.8rem;
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.Body2};

  color: ${theme.colors.grey_700};
  text-align: center;

  ${media.tablet} {
    white-space: pre-line;
  }
  ${media.mobile} {
    ${({ theme }) => theme.fonts.Body8};
  }
`;

const Caution = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${theme.colors.grey_400};

  ${media.tablet} {
    margin-top: 3rem;
    text-align: center;
    white-space: pre-line;
  }
`;
