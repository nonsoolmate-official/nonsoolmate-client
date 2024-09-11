import { commonFlex } from "style/commonStyle";
import theme from "style/theme";
import styled from "styled-components";

interface ContentProps {
  num: string;
  title: string;
  description: string;
  image: string;
}
export default function Content(props: ContentProps) {
  const { num, title, description, image } = props;
  return (
    <ContentContainer>
      <TextBox>
        <ContentTitleBox>
          <DesCriptionNum>{num}</DesCriptionNum>
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
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  width: 37.6rem;
`;

const ContentTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DesCriptionNum = styled.h1`
  ${({ theme }) => theme.fonts.Headline5};

  color: ${theme.colors.main_blue};
`;

const ContentTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline3}
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.Body2};

  color: ${theme.colors.grey_700};
`;

const Image = styled.img`
  width: 45.6rem;
`;
