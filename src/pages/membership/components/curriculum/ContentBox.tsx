import { useMediaQuery } from "react-responsive";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

interface Props {
  id: number;
  label: string;
  title_1: string;
  title_2: string;
  details: string;
  imgSrc: string;
}

export default function ContentBox(props: Props) {
  const { id, label, title_1, title_2, details, imgSrc } = props;
  const isIpadSize = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Container $id={id}>
      <Explanation>
        <Label>{label}</Label>
        {!isIpadSize && (
          <Title>
            {title_1}
            <br />
            {title_2}
          </Title>
        )}
        {isIpadSize && (
          <Title>
            {title_1} {title_2}
          </Title>
        )}
        <Details>{details}</Details>
      </Explanation>
      <Img src={imgSrc} />
    </Container>
  );
}

const Container = styled.div<{ $id: number }>`
  display: flex;
  gap: 2.4rem;
  padding: 8rem 0;
  border-bottom: ${({ $id }) => ($id == 5 ? "none" : "1px solid var(--grayscale-gray100, #ECEDF0)")};

  ${media.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

const Explanation = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.main_blue};
`;

const Title = styled.p`
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Headline4};

  ${media.mobile} {
    ${({ theme }) => theme.fonts.Body1};
  }
`;

const Details = styled.p`
  width: 26.4rem;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.grey_600};
  ${({ theme }) => theme.fonts.Body4};

  ${media.tablet} {
    width: 64.8rem;
  }

  ${media.mobile} {
    width: 26.4rem;
    ${({ theme }) => theme.fonts.Body8};
  }
`;

const Img = styled.img`
  width: 64.8rem;
  height: 30rem;

  ${media.tablet} {
    width: 32rem;
    height: 14.8rem;
    object-fit: contain;
  }
`;
