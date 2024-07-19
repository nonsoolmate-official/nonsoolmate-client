import HomeTestSet from "@assets/image/homeTestSet.png";
import styled from "styled-components";
import { media } from "style/responsiveStyle";

export default function HomeImg() {
  return <Image src={HomeTestSet} alt="메인홈사진" />;
}

const Image = styled.img`
  width: 100%;

  /* width: 87.9rem;
  height: 33.4rem; */
  padding: 0 24rem;

  ${media.tablet} {
    width: 100%;

    /* width: 70.2rem;
    height: 31rem; */
    padding: 0 3.3rem;
  }
`;
