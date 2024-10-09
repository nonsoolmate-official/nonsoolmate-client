import { getToken } from "@pages/socialLogin/utils/token";
import { useNavigate } from "react-router-dom";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

interface PurchaseButtonProps {
  id: number;
}
export default function PurchaseButton(props: PurchaseButtonProps) {
  const { id } = props;
  const navigate = useNavigate();
  const from = location.pathname;
  sessionStorage.setItem("from", from);

  function clickPurchaseButton() {
    getToken() ? navigate("/payment", { state: { id } }) : navigate("/signup", { state: { from } });
  }

  return <Button onClick={clickPurchaseButton}>구매하기</Button>;
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
