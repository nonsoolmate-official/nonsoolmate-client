import styled from "styled-components";
import testPaperImg1 from "../../../assets/image/testPaperImg1.jpeg";
import testPaperImg2 from "../../../assets/image/testPaperImg2.jpeg";
import testPaperImg3 from "../../../assets/image/testPaperImg3.jpeg";
import testPaperImg4 from "../../../assets/image/testPaperImg4.jpeg";
import { columnFlex } from "style/commonStyle";

export default function ImageSlider() {
  const imageList = [testPaperImg1, testPaperImg2, testPaperImg3, testPaperImg4];

  const imageMap = () => {
    return imageList.map((eachImage) => {
      return <Image key={eachImage} src={eachImage} alt="문제 이미지" />;
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
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    height: 5px;
    border: 8px solid transparent;
    border-radius: 80px;
    background: gray;
    background-clip: padding-box;
  }
`;

const InnerWrapper = styled.div`
  ${columnFlex}

  gap: 1rem;
  padding: 2rem 0.8rem 0;
`;

const Image = styled.img`
  width: 54.9rem;
`;
