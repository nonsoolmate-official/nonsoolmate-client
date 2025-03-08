import { useEffect } from "react";
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import styled from "styled-components";

interface PaymentWidgetProps {
  setPaymentWidget: (widget: PaymentWidgetInstance | null) => void;
  customerKey: string;
  price: number;
  paymentWidget: PaymentWidgetInstance | null;
}

export default function PaymentWidget(props: PaymentWidgetProps) {
  const { setPaymentWidget, customerKey, price, paymentWidget } = props;
  const clientKey = `${import.meta.env.VITE_SINGLE_CLIENTKEY}`;

  useEffect(() => {
    (async () => {
      const widget = await loadPaymentWidget(clientKey, customerKey);
      setPaymentWidget(widget);
      widget.renderPaymentMethods("#payment-widget", price);
    })();
  }, [clientKey, customerKey]);

  useEffect(() => {
    if (paymentWidget) {
      paymentWidget.renderPaymentMethods("#payment-widget", price);
    }
  }, [price, paymentWidget]);

  return (
    <PaymentWidgetContainer>
      <PaymentWidgetBox id="payment-widget" />
    </PaymentWidgetContainer>
  );
}

const PaymentWidgetContainer = styled.div`
  width: 100%;
`;

const PaymentWidgetBox = styled.div`
  width: 100%;
`;
