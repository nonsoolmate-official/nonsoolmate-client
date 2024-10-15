import { XIc } from "@assets/index";
import useGetCoupon from "@pages/payment/hooks/useGetCoupon";
import { usePostCoupon } from "@pages/payment/hooks/usePostCoupon";
import { useState } from "react";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

import CouponInput from "./CouponInput";
import CouponList from "./CouponList";
import usePatchCoupon from "@pages/mypage/hooks/usePatchCoupon";

interface ModalProps {
  changeCouponModalStatus: (open: boolean) => void;
  handleCouponTxtStatus: (coupon: string, dcinfo: string) => void;
  activeCouponId: number | null;
  handleActiveCouponId: (isCouponActive: boolean, couponMemberId: number) => void;
  couponFrom: string;
}

export default function CouponModal(props: ModalProps) {
  const { changeCouponModalStatus, handleCouponTxtStatus, activeCouponId, handleActiveCouponId, couponFrom } = props;
  const [couponNumber, setCouponNumber] = useState("");
  const [mismatch, setMismatch] = useState(false);
  const [hasKorean, setHasKorean] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<{
    couponName: string;
    couponType: string;
    discountRate?: number;
    discountAmount?: number;
  } | null>(null);

  const { data: COUPON_LIST } = useGetCoupon();
  const { mutate: postCouponMutate } = usePostCoupon();
  const { mutate: patchCouponMutate } = usePatchCoupon();

  const couponExist = COUPON_LIST && COUPON_LIST.coupons && COUPON_LIST.coupons.length > 0;

  const finishSelectCoupon = activeCouponId !== null;

  if (!COUPON_LIST) {
    return <></>;
  }

  function handleCouponClick(
    couponMemberId: number,
    couponName: string,
    couponType: string,
    discountRate?: number,
    discountAmount?: number,
  ) {
    const isCouponActive = activeCouponId === couponMemberId;
    handleActiveCouponId(isCouponActive, couponMemberId);
    setSelectedCoupon(isCouponActive ? null : { couponName, couponType, discountRate, discountAmount });
  }

  const handleCouponNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const hasKoreanChar = koreanRegex.test(value);

    setHasKorean(hasKoreanChar);
    setCouponNumber(value);
    setMismatch(false);
  };

  function registerCoupon() {
    if (!hasKorean) {
      postCouponMutate(
        { couponNumber },
        {
          onSuccess: () => {
            setMismatch(false);
          },
          onError: () => {
            setMismatch(true);
          },
        },
      );
    }
  }

  function applyCoupon() {
    if (selectedCoupon) {
      const { couponName, couponType, discountRate, discountAmount } = selectedCoupon;

      if (couponType === "RATE") {
        handleCouponTxtStatus(couponName, `${discountRate}% OFF`);
      } else {
        handleCouponTxtStatus(couponName, `${discountAmount}원 OFF`);
      }
      changeCouponModalStatus(false);
      if (couponFrom == "/mypage" && activeCouponId) {
        patchCouponMutate(activeCouponId);
      }
    }
  }

  return (
    <BackgroundView>
      <ModalView>
        <CloseButton type="button" onClick={() => changeCouponModalStatus(false)}>
          <XIcon />
        </CloseButton>
        <Text>쿠폰 사용</Text>
        <Container>
          <CouponInput
            couponNumber={couponNumber}
            registerCoupon={registerCoupon}
            mismatch={mismatch}
            hasKorean={hasKorean}
            handleCouponNumChange={handleCouponNumChange}
          />
          {mismatch && <MismatchText>* 유효하지 않은 쿠폰입니다.</MismatchText>}
          {hasKorean && <MismatchText>* 영문, 숫자로 입력해 주세요.</MismatchText>}
          <CouponList
            couponExist={couponExist}
            activeCouponId={activeCouponId}
            COUPON_LIST={COUPON_LIST}
            handleCouponClick={handleCouponClick}
          />
        </Container>
        <ApplyButton
          type="button"
          disabled={!finishSelectCoupon}
          $finsishSelectCoupon={finishSelectCoupon}
          onClick={applyCoupon}>
          쿠폰 사용하기
        </ApplyButton>
      </ModalView>
    </BackgroundView>
  );
}

const BackgroundView = styled.section`
  position: absolute;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};

  backdrop-filter: blur(0.3rem);
`;

const ModalView = styled.section`
  ${({ theme }) => theme.effects.modal_shadow};

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 43.6rem;
  padding: 3.2rem 2.4rem;
  border-radius: 12px;
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 16px 0 rgb(0 0 0 / 5%);

  ${media.tablet} {
    top: 40%;
    transform: translate(-50%, -30%);
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: start;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const XIcon = styled(XIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Text = styled.p`
  margin-top: 1.6rem;
  padding: 0;
  text-align: center;
  ${({ theme }) => theme.fonts.Headline4};
`;

const Container = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-top: 4.4rem;
  margin-bottom: 4.4rem;
`;
export const CodeField = styled.input<{ $mismatch: boolean; $hasKorean: boolean }>`
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: ${({ $mismatch, $hasKorean }) => ($mismatch || $hasKorean ? "1px solid #FF5858" : "1px solid #E2E4E8")};
  border-radius: 8px;
  background-color: white;
  color: black;
  transition: border-color 0.3s ease;
  ${({ theme }) => theme.fonts.Body6};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.main_blue};
    outline: none;
  }

  &::placeholder {
    ${({ theme }) => theme.fonts.Body6};

    color: ${({ theme }) => theme.colors.grey_500};
  }
`;

const MismatchText = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.error};
`;

const ApplyButton = styled.button<{ $finsishSelectCoupon: boolean }>`
  padding: 0.8rem 0;
  border-radius: 8px;
  ${({ theme }) => theme.fonts.Body5};

  background-color: ${({ $finsishSelectCoupon }) => ($finsishSelectCoupon ? "#6478FF" : "#ECEDF0")};
  color: ${({ $finsishSelectCoupon }) => ($finsishSelectCoupon ? "#FFF" : "#AFB3C0")};
`;
