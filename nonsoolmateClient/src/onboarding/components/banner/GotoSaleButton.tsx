import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { RightWhiteArrowIc } from "@assets/index";
import { useNavigate } from "react-router-dom";

export default function GotoSaleButton() {
  const navigate = useNavigate();

  return (
    <Button type="button" onClick={() =>{navigate('membership')}}>
      첫 달 20% 할인받기 <RightWhiteArrowIcon />
    </Button>
  );
}

const Button = styled.button`
  ${commonFlex}
  ${({ theme }) => theme.fonts.Headline5};

  gap: 1rem;
  width: 25.9rem;
  height: 4.8rem;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const RightWhiteArrowIcon = styled(RightWhiteArrowIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
