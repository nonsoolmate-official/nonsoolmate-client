import HomeTestSet from "@assets/image/homeTestSet.png";
import styled from "styled-components";
import { media } from "style/responsiveStyle";

export default function HomeImg() {
  return <Image src={HomeTestSet} alt="메인홈사진" />;
}

const Image = styled.img`
  /* width: 87.9rem;
  height: 33.4rem; */
  padding: 0 24rem;
  width: 100%;

  ${media.tablet} {
    /* width: 70.2rem;
    height: 31rem; */
    padding: 0 3.3rem;
    width: 100%;
  }
`;
