import HomeTestSet from "@assets/image/homeTestSet.png";
import styled from "styled-components";
import { media } from "style/responsiveStyle";

export default function HomeImg() {
  return <Image src={HomeTestSet} alt="메인홈사진" />;
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  padding: 0;

  ${media.tablet} {
    width: 100%;
  }
`;
