import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "./components/coupon/Modal";
import styled from "styled-components";

const clientKey = "test_gck_pP2YxJ4K87RzqvN0J4qJrRGZwXLO";
const customerKey = uuidv4();

interface Amount {
  currency: string;
  value: number;
}

interface WidgetPaymentMethodWidget {
  //
}

interface PaymentWidgets {
  setAmount(amount: Amount): Promise<void>;
  renderPaymentMethods(options: { selector: string; variantKey: string }): Promise<WidgetPaymentMethodWidget>;
  renderAgreement(options: { selector: string; variantKey: string }): Promise<void>;
  requestPayment(options: {
    orderId: string;
    orderName: string;
    successUrl: string;
    failUrl: string;
    customerEmail: string;
    customerName: string;
    customerMobilePhone: string;
  }): Promise<void>;
}

export default function Payment() {
  /*--쿠폰-- */
  const [openModal, setOpenModal] = useState(false);
  const [couponTxt, setCouponTxt] = useState("등록된 쿠폰이 없습니다.");
  const [dcInfo, setDcInfo] = useState("");

  function closeCouponModal() {
    setOpenModal(false);
  }

  function openCouponModal() {
    setOpenModal(true);
  }

  function handleCouponTxtStatus(coupon: string, dcInfo: string) {
    setCouponTxt(coupon);
    setDcInfo(dcInfo);
  }
  /** */

  const [amount, setAmount] = useState<Amount>({
    currency: "KRW",
    value: 50_000,
  });
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState<PaymentWidgets | null>(null);

  const generateRandomString = () => window.btoa(Math.random().toString()).slice(0, 20);
  useEffect(() => {
    async function fetchPaymentWidgets() {
      // ------  결제위젯 초기화 ------
      const tossPayments = await loadTossPayments(clientKey);
      // 회원 결제
      const paymentWidgets = tossPayments.widgets({
        customerKey,
      });

      const customWidgets: PaymentWidgets = {
        setAmount: async (amount: Amount) => {
          await paymentWidgets.setAmount(amount);
        },
        renderPaymentMethods: async (options: { selector: string; variantKey: string }) => {
          return await paymentWidgets.renderPaymentMethods(options);
        },
        renderAgreement: async (options: { selector: string; variantKey: string }) => {
          await paymentWidgets.renderAgreement(options);
        },
        requestPayment: async (options: {
          orderId: string;
          orderName: string;
          successUrl: string;
          failUrl: string;
          customerEmail: string;
          customerName: string;
          customerMobilePhone: string;
        }) => {
          await paymentWidgets.requestPayment(options);
        },
      };

      setWidgets(customWidgets);
    }

    fetchPaymentWidgets();
  }, [clientKey, customerKey]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return;
      }
      // ------ 주문의 결제 금액 설정 ------
      await widgets.setAmount(amount);

      await Promise.all([
        // ------  결제 UI 렌더링 ------
        widgets
          .renderPaymentMethods({
            selector: "#payment-method",
            variantKey: "DEFAULT",
          })
          .catch(console.error),
        // ------  이용약관 UI 렌더링 ------
        widgets
          .renderAgreement({
            selector: "#agreement",
            variantKey: "AGREEMENT",
          })
          .catch(console.error),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets]);

  useEffect(() => {
    if (widgets == null) {
      return;
    }

    widgets.setAmount(amount).catch(console.error);
  }, [widgets, amount]);

  return (
    <div className="wrapper">
      <div className="box_section">
        {/* 결제 UI */}
        <div id="payment-method" />
        {/* 이용약관 UI */}
        <div id="agreement" />
        {/* 쿠폰 체크박스 */}
        <div>
          <div>
            <label htmlFor="coupon-box">
              <input
                id="coupon-box"
                type="checkbox"
                aria-checked="true"
                disabled={!ready}
                onChange={(event) => {
                  // ------  주문서의 결제 금액이 변경되었을 경우 결제 금액 업데이트 ------
                  setAmount(
                    event.target.checked
                      ? { ...amount, value: amount.value - 5_000 }
                      : { ...amount, value: amount.value + 5_000 },
                  );
                }}
              />
              <span>5,000원 쿠폰 적용</span>
            </label>
          </div>
        </div>

        {/* 결제하기 버튼 */}
        <button
          className="button"
          disabled={!ready}
          onClick={async () => {
            try {
              // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
              // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
              // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
              await widgets?.requestPayment({
                orderId: generateRandomString(),
                orderName: "논술메이트 정기구독",
                successUrl: window.location.origin + "/success",
                failUrl: window.location.origin + "/fail",
                customerEmail: "customer123@gmail.com",
                customerName: "김논메",
                customerMobilePhone: "01012341234",
              });
            } catch (error) {
              // 에러 처리하기
              console.error(error);
            }
          }}>
          결제하기
        </button>
      </div>
      {/*----쿠폰---------*/}
      <button type="button" onClick={openCouponModal}>
        쿠폰 사용
      </button>
      <CouponInfo>
        <h2>{couponTxt}</h2>
        <h2>{dcInfo}</h2>
      </CouponInfo>
      {openModal && <Modal closeModal={closeCouponModal} handleCouponTxtStatus={handleCouponTxtStatus} />}
    </div>
  );
}

const CouponInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
