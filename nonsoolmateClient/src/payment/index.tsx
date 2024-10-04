import styled from "styled-components";
import PaymentInfo from "./components/paymentInfo/PaymentInfo";
import OrderInfo from "./components/orderInfo/OrderInfo";
import { useLocation } from "react-router-dom";
import RegisterLayout from "./components/register/RegisterLayout";

export default function Payment() {
  const location = useLocation();
  const { id } = location.state;

  return (
    <PaymentContainer>
      <PaymentLeftContainer>
        <Title>정기결제</Title>
        <OrderInfo id={id} />
        <RegisterLayout title="쿠폰 사용" button="쿠폰 사용" content="등록된 쿠폰이 없습니다." />
        <RegisterLayout title="결제 수단" button="카드 등록" content="등록된 카드가 없습니다." />
      </PaymentLeftContainer>
      <PaymentInfo />
    </PaymentContainer>
  );
}

const PaymentContainer = styled.section`
  display: flex;
  gap: 2.4rem;
  margin: 4.8rem 21.5rem 0;
`;

const PaymentLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;
const Title = styled.h1`
  ${({ theme }) => theme.fonts.Headline4}
`;
