import University from "@assets/image/university.png";
import styled from "styled-components";

export default function UnivImgs() {
  return <Image src={University} alt="대학 사진들" />;
}

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 5.6rem;
  object-fit: cover;
`;
