import { Advan1Ic, Advan2Ic, Advan3Ic, Advan4Ic, Advan5Ic } from "@assets/index";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

export default function AdvanBox() {
  return (
    <Container>
      <Box $last={false}>
        <Advan1Icon />
        <Text>4개의 첨삭권 제공</Text>
      </Box>
      <Box $last={false}>
        <Advan2Icon />
        <Text>재첨삭권 제공</Text>
      </Box>
      <Box $last={false}>
        <Advan3Icon />
        <TextWrapper>
          <Text>1:1 질의응답 및 케어 서비스</Text>
          <SubText>(패키지별 상이)</SubText>
        </TextWrapper>
      </Box>
      <Box $last={false}>
        <Advan4Icon />
        <TextWrapper>
          <Text>유형별 연습문제</Text>
          <SubText>(pdf로 제공)</SubText>
        </TextWrapper>
      </Box>
      <Box $last={true}>
        <Advan5Icon />
        <TextWrapper>
          <Text>지원 대학 컨설팅 무료 상담</Text>
          <SubText>(논술 전형)</SubText>
        </TextWrapper>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  padding: 1.8rem 1.6rem 0;
  border: 4px solid #6478ff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  grid-template-columns: repeat(1, 1fr);
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 1.8rem 1.6rem 3.2rem;
  }

  ${media.mobile} {
    height: 100%;
    grid-template-columns: repeat(1, 1fr);
    padding: 1.8rem 1.6rem 3.2rem;
  }
`;

const Box = styled.div<{ $last: boolean }>`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 1.2rem 0;
  border-bottom: ${({ $last }) => ($last ? "none" : "1px solid #f3f4f6")};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_1000};
`;

const SubText = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${({ theme }) => theme.colors.grey_400};
`;

const Advan1Icon = styled(Advan1Ic)`
  width: 3.2rem;
  height: 3.2rem;
`;

const Advan2Icon = styled(Advan2Ic)`
  width: 3.2rem;
  height: 3.2rem;
`;

const Advan3Icon = styled(Advan3Ic)`
  width: 3.2rem;
  height: 3.2rem;
`;

const Advan4Icon = styled(Advan4Ic)`
  width: 3.2rem;
  height: 3.2rem;
`;

const Advan5Icon = styled(Advan5Ic)`
  width: 3.2rem;
  height: 3.2rem;
`;
