import comparePriceImg from "@assets/image/comparePrice.png";

import { RightArrowWhiteIc } from "@assets/index";
import { useNavigate } from "react-router-dom";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import GuideLayout from "../common/GuideLayout";

export default function Price() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <GuideLayout
        icType="price"
        badge="가격 안내"
        mainTitle="최소의 투자, 최대의 결과"
        subTitle="학원/강사 네임드, 임대료 등의 가격 거품을 걷어내고
        꼭 필요한 만큼의 합리적인 가격대로 코칭받으세요"
        style={{ paddingBottom: 0 }}
      />
      <Img src={comparePriceImg} alt="compare-price" />
      <Button onClick={() => navigate("/membership")}>
        가격 자세히 보기
        <RightArrowWhiteIc />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${columnFlex}

  gap: 4.8rem;
  justify-content: center;
  align-items: center;
  padding-bottom: 8.4rem;
  background: ${({ theme }) => theme.effects.gradient};
`;

const Img = styled.img`
  width: 45.6rem;
  height: 37.2rem;
  object-fit: cover;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_800};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.Body3};
`;
