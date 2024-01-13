import styled from "styled-components";

interface ImageProps {
  advertiseImg: string;
}

export default function Image(props: ImageProps) {
  const { advertiseImg } = props;
  return <ReasonImg src={advertiseImg} alt="이유 이미지" />;
}

const ReasonImg = styled.img`
  width: 13.2rem;
  height: 11.2rem;
`;
