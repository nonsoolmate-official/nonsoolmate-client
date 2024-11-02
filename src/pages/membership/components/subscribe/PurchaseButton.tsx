import { Plan } from "types/productsListType";
import { getToken } from "@pages/socialLogin/utils/token";
import { useNavigate } from "react-router-dom";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

interface PurchaseButtonProps {
  id: number;
  plan: Plan[];
}
export default function PurchaseButton(props: PurchaseButtonProps) {
  const { id, plan } = props;
  const navigate = useNavigate();

  const from = location.pathname;
  sessionStorage.setItem("from", from);
  if (id === 1 || id === 2) {
    sessionStorage.setItem("plan", JSON.stringify(plan));
  }

  function clickPurchaseButton() {
    if (id === 3) {
      window.location.href = "https://walla.my/v/WizqOMZ0xwVe9QsbQkpW";
    } else {
      sessionStorage.setItem("id", String(id));
      getToken() ? navigate("/payment", { state: { id } }) : navigate("/signup", { state: { from } });
    }
  }

  return <Button onClick={clickPurchaseButton}>시작하기</Button>;
}

const Button = styled.button`
  ${commonFlex}
  ${({ theme }) => theme.fonts.Body1};

  width: 25.6rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
`;
