import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import RegisterButton from "./RegisterButton";
import theme from "style/theme";
import { REGISTER_TEXT } from "@pages/payment/core/registerText";
import CouponModal from "../coupon/CouponModal";
import { CardIc, SmallCouponIc } from "@assets/index";
import useGetCardInfo from "@pages/payment/hooks/useGetCardInfo";

interface RegisterLayoutProps {
  changeCouponModalStatus: (open: boolean) => void;
  registerCard: () => void;
  handleCouponTxtStatus: (coupon: string, dcInfo: string) => void;
  isCouponOpen: boolean;
  couponTxt: string;
  dcInfo: string;
  activeCouponId: number | null;
  handleActiveCouponId: (isCouponActive: boolean, couponMemberId: number) => void;
  notRegisterError: boolean;
  alreadyPaidError: boolean;
}

export default function RegisterLayout(props: RegisterLayoutProps) {
  const {
    isCouponOpen,
    changeCouponModalStatus,
    couponTxt,
    dcInfo,
    handleCouponTxtStatus,
    registerCard,
    activeCouponId,
    handleActiveCouponId,
    notRegisterError,
    alreadyPaidError,
  } = props;

  const response = useGetCardInfo();

  function openCouponModal() {
    changeCouponModalStatus(true);
  }

  return (
    <>
      {REGISTER_TEXT.map((item) => (
        <RegisterLayoutContainer key={item.title}>
          <TitleContainer>
            <Title>
              {item.title}
              {notRegisterError && item.title === "결제 수단" && <ErrorText>* 결제 수단을 등록해 주세요.</ErrorText>}
              {alreadyPaidError && item.title === "결제 수단" && (
                <ErrorText>* 이미 멤버십 결제가 진행중입니다.</ErrorText>
              )}
            </Title>
            <RegisterButton
              button={item.buttonText}
              onClick={item.buttonText === "쿠폰 사용" ? openCouponModal : registerCard}
            />
          </TitleContainer>
          <Content $payError={(notRegisterError || alreadyPaidError) && item.title === "결제 수단"}>
            {item.buttonText === "쿠폰 사용" ? (
              <Coupon>
                <CouponTxt $couponTxt={couponTxt}>
                  {couponTxt !== "등록된 쿠폰이 없습니다." && <SmallCouponIcon />}
                  {couponTxt}
                </CouponTxt>
                <DcInfo>{dcInfo}</DcInfo>
              </Coupon>
            ) : response.cardInfo ? (
              <CardInfo>
                <CardIc />
                {response.cardInfo?.cardCompany} {response.cardInfo?.cardNumber}
              </CardInfo>
            ) : (
              item.content
            )}
          </Content>
        </RegisterLayoutContainer>
      ))}
      {isCouponOpen && (
        <CouponModal
          changeCouponModalStatus={changeCouponModalStatus}
          handleCouponTxtStatus={handleCouponTxtStatus}
          activeCouponId={activeCouponId}
          handleActiveCouponId={handleActiveCouponId}
        />
      )}
    </>
  );
}

const RegisterLayoutContainer = styled.div`
  ${columnFlex}

  gap: 1.2rem;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Body1}
`;

const Content = styled.div<{ $payError: boolean }>`
  ${({ theme }) => theme.fonts.Body6}

  width: 100%;
  padding: 1.2rem;
  border: 1px solid ${({ theme, $payError }) => ($payError ? theme.colors.error : "none")};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};
  color: ${theme.colors.grey_500};
`;

const Coupon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CouponTxt = styled.div<{ $couponTxt: string }>`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  color: ${({ theme, $couponTxt }) =>
    $couponTxt === "등록된 쿠폰이 없습니다." ? theme.colors.grey_500 : theme.colors.grey_1000};
`;

const DcInfo = styled.p`
  color: ${({ theme }) => theme.colors.grey_1000};
`;

const SmallCouponIcon = styled(SmallCouponIc)`
  width: 2rem;
  height: 2rem;
`;

const CardInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const ErrorText = styled.span`
  margin-left: 0.8rem;
  ${({ theme }) => theme.fonts.Caption1};

  color: ${({ theme }) => theme.colors.error};
`;
