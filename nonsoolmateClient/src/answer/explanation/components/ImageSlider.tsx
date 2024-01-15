import styled from "styled-components";
import { columnFlex } from "style/commonStyle";
import { TestImageType } from "answer/components/PdfViewerWrapper";

interface ImageSliderProps {
  testImages: TestImageType[];
}

export default function ImageSlider(props: ImageSliderProps) {
  const { testImages } = props;

  const imageMap = () => {
    return testImages.map((eachImage) => {
      return <Image key={eachImage.examImgUrl} src={eachImage.examImgUrl} alt="문제 이미지" />;
    });
  };

  return (
    <ImageSliderContainer>
      <InnerWrapper>{imageMap()}</InnerWrapper>
    </ImageSliderContainer>
  );
}

const ImageSliderContainer = styled.section`
  ${({ theme }) => theme.effects.pdf_shadow};

  width: calc((100vw - 16.8rem) / 2);
  height: calc(100vh - 16.4rem);
  border-radius: 8px;
  overflow-y: scroll;

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
`;

const InnerWrapper = styled.div`
  ${columnFlex}

  gap: 1rem;
`;

const Image = styled.img`
  width: 54.9rem;
`;
