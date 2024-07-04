import styled from "styled-components";
import { columnFlex } from "style/commonStyle";
import { testImageType } from "answer/types/testImageType";
import { media } from "style/responsiveStyle";

interface ImageSliderProps {
  testImages: testImageType[];
  selectTest?: boolean;
  selectExplanation?: boolean;
}

export default function ImageSlider(props: ImageSliderProps) {
  const { testImages, selectTest, selectExplanation } = props;

  const imageMap = () => {
    return testImages.map((eachImage) => {
      return <Image key={eachImage.examImgUrl} src={eachImage.examImgUrl} alt="문제 이미지" />;
    });
  };

  return (
    <ImageSliderContainer $selectTest={selectTest} $selectExplanation={selectExplanation}>
      <InnerWrapper>{imageMap()}</InnerWrapper>
    </ImageSliderContainer>
  );
}

const ImageSliderContainer = styled.section<{ $selectTest?: boolean; $selectExplanation?: boolean }>`
  ${({ theme }) => theme.effects.pdf_shadow};

  width: calc((100vw - 16.8rem) / 2);
  height: calc(100vh - 16.4rem);
  border-radius: 8px;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.white};

  &::-webkit-scrollbar {
    width: 23px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 1.9rem;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border: 8px solid transparent;
    border-radius: 50px;
    background: gray;
    background-clip: padding-box;
  }
  ${media.tablet} {
    width: 100%;
    ${({ $selectTest, $selectExplanation }) =>
      $selectTest && $selectExplanation && "height : calc((100vh - 17.5rem) / 2)"};
  }
`;

const InnerWrapper = styled.div`
  ${columnFlex}

  gap: 1rem;
`;

const Image = styled.img`
  width: 55rem;
`;
