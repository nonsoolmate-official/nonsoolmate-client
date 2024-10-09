import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import RegisterButton from "./RegisterButton";
import theme from "style/theme";
import { REGISTER_TEXT } from "@pages/payment/core/registerText";
import CouponModal from "../coupon/CouponModal";
import { CardIc, SmallCouponIc } from "@assets/index";
import useGetCardInfo from "@pages/payment/hooks/useGetCardInfo";

interface RegisterLayoutProps {
  openCouponModal: () => void;
  closeCouponModal: () => void;
  registerCard: () => void;
  handleCouponTxtStatus: (coupon: string, dcInfo: string) => void;
  isCouponOpen: boolean;
  couponTxt: string;
  dcInfo: string;
}

export default function RegisterLayout(props: RegisterLayoutProps) {
  const { openCouponModal, closeCouponModal, registerCard, handleCouponTxtStatus, isCouponOpen, couponTxt, dcInfo } =
    props;
  const response = useGetCardInfo();

  return (
    <>
      {REGISTER_TEXT.map((item) => (
        <RegisterLayoutContainer key={item.title}>
          <TitleContainer>
            <Title>{item.title}</Title>
            <RegisterButton
              button={item.buttonText}
              onClick={item.buttonText === "쿠폰 사용" ? openCouponModal : registerCard}
            />
          </TitleContainer>
          <Content>
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
      {isCouponOpen && <CouponModal closeModal={closeCouponModal} handleCouponTxtStatus={handleCouponTxtStatus} />}
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

const Content = styled.div`
  ${({ theme }) => theme.fonts.Body6}

  width: 100%;
  padding: 1.2rem;
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
