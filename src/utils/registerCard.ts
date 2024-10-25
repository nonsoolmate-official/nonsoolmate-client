import { loadTossPayments } from "@tosspayments/payment-sdk";

export function registerCard({
  clientKey,
  customerKey,
  selectedPlan = null,
  from,
}: {
  clientKey: string;
  customerKey: string;
  selectedPlan?: number | null;
  from: string;
}) {
  loadTossPayments(clientKey).then((tossPayments) => {
    const successUrl = selectedPlan
      ? `${window.location.origin}/success?id=${selectedPlan}&&from=${from}`
      : `${window.location.origin}/success?from=${from}`;

    tossPayments
      .requestBillingAuth("카드", {
        customerKey,
        successUrl,
        failUrl: window.location.origin + "/fail",
      })
      .catch((error) => {
        if (error.code === "USER_CANCEL") {
          // 사용자가 결제창을 닫았을 때
        } else if (error.code === "INVALID_CARD_COMPANY") {
          // 유효하지 않은 카드 코드에 대한 처리
        }
      });
  });
}
