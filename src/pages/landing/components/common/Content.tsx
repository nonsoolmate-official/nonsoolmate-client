import { columnFlex, commonFlex } from "style/commonStyle";
import { media } from "style/responsiveStyle";
import theme from "style/theme";
import styled from "styled-components";

interface ContentProps {
  num?: string;
  title?: string;
  description?: string;
  image?: string;
}
export default function Content(props: ContentProps) {
  const { num, title, description, image } = props;
  return (
    <ContentContainer>
      <TextBox>
        <ContentTitleBox>
          <DescriptionNum>{num}</DescriptionNum>
          <ContentTitle>{title}</ContentTitle>
        </ContentTitleBox>
        <Description>{description}</Description>
      </TextBox>
      <Image src={image} alt="설명 이미지" />
    </ContentContainer>
  );
}
const ContentContainer = styled.div`
  ${commonFlex};

  gap: 10.6rem;
  padding-bottom: 16.8rem;

  ${media.tablet} {
    ${columnFlex}

    gap:4rem;
    align-items: start;
  }

  ${media.mobile} {
    margin-bottom: 8rem;
    padding: 0 2rem;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  width: 37.6rem;
  ${media.tablet} {
    gap: 2rem;
  }
  ${media.mobile} {
    width: 100%;
  }
`;

const ContentTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DescriptionNum = styled.h2`
  ${({ theme }) => theme.fonts.Headline5};

  color: ${theme.colors.main_blue};
`;

const ContentTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline3}

  white-space: pre-line;

  ${media.mobile} {
    ${({ theme }) => theme.fonts.Body1};
  }
`;

const Description = styled.span`
  ${({ theme }) => theme.fonts.Body2};

  color: ${theme.colors.grey_600};
  word-break: keep-all;

  ${media.mobile} {
    ${({ theme }) => theme.fonts.Body8};
  }
`;

const Image = styled.img`
  width: 45.6rem;
  object-fit: cover;

  ${media.mobile} {
    width: 100%;
  }
`;
