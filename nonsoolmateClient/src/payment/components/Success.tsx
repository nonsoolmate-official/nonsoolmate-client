import { useNavigate, useSearchParams } from "react-router-dom";
import { getToken } from "socialLogin/utils/token";

export default function Success() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  console.log("success");
  const token = getToken();
  const requestData = {
    orderId: searchParams.get("orderId"),
    amount: searchParams.get("amount"),
    paymentKey: searchParams.get("paymentKey"),
  };
  async function confirmPayment() {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/confirm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      const json = await response.json();

      if (!response.ok) {
        navigate(`/fail?message=${json.message}&code=${json.code}`);
        return;
      }
    } catch (error) {
      console.error("결제 확인 중 에러 발생:", error);
    }
  }
  confirmPayment();

  return (
    <div className="result wrapper">
      <div className="box_section">
        <h2>결제 성공</h2>
        <p>{`주문번호: ${searchParams.get("orderId")}`}</p>
        <p>{`결제 금액: ${Number(searchParams.get("amount")).toLocaleString()}원`}</p>
        <p>{`paymentKey: ${searchParams.get("paymentKey")}`}</p>
      </div>
    </div>
  );
}
