// import { useNavigate } from "react-router-dom";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function PurchaseButton() {
  // const navigate = useNavigate();
  const wallaUrl = "https://walla.my/v/5VQBBMKXWe05gbyn2xn5";
  // function clickPurchaseButton() {
  //   navigate("/payment");
  // }
  return <Button onClick={() => window.open(wallaUrl)}>구매하기</Button>;
}

const Button = styled.button`
  ${commonFlex}
  ${({ theme }) => theme.fonts.Body1};

  width: 25.6rem;
  height: 4.8rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
`;
