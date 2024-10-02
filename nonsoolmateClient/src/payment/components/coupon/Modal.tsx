import { EmptyCircleIc, FilledCircleIc, XIc } from "@assets/index";
import useGetCoupon from "payment/hooks/useGetCoupon";
import { usePostCoupon } from "payment/hooks/usePostCoupon";
import { useEffect, useState } from "react";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

interface ModalProps {
  closeModal: () => void;
  handleCouponTxtStatus: (coupon: string, dcinfo: string) => void;
}

export default function Modal(props: ModalProps) {
  const { closeModal, handleCouponTxtStatus } = props;
  const [couponExist, setCouponExist] = useState(false);
  const [finsishSelectCoupon, setFinishSelectCoupon] = useState(false);
  const [activeCouponId, setActiveCouponId] = useState<number | null>(null);
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

  useEffect(() => {
    if (COUPON_LIST && COUPON_LIST.coupons) {
      setCouponExist(COUPON_LIST.coupons.length > 0);
    } else {
      setCouponExist(false);
    }
  }, [COUPON_LIST]);

  useEffect(() => {
    setFinishSelectCoupon(activeCouponId !== null);
  }, [activeCouponId]);

  if (!COUPON_LIST) {
    return <></>;
  }

  function checkCouponType(couponType: string, discountRate?: number, discountAmount?: number) {
    if (couponType === "RATE") {
      return `${discountRate}% 할인`;
    } else {
      return `${discountAmount}원 할인`;
    }
  }

  function convertDate(validEndDate: string) {
    const date = new Date(validEndDate);

    return date.toISOString().split("T")[0];
  }

  function handleCouponClick(
    couponMemberId: number,
    couponName: string,
    couponType: string,
    discountRate?: number,
    discountAmount?: number,
  ) {
    if (activeCouponId === couponMemberId) {
      setActiveCouponId(null);
      setSelectedCoupon(null);
    } else {
      setActiveCouponId(couponMemberId);
      setSelectedCoupon({ couponName, couponType, discountRate, discountAmount });
    }
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
      closeModal();
    }
  }

  return (
    <BackgroundView>
      <ModalView>
        <CloseButton type="button" onClick={closeModal}>
          <XIcon />
        </CloseButton>
        <Text>쿠폰 사용</Text>
        <Container>
          <InputContainer>
            <CodeField
              type="text"
              placeholder="쿠폰 코드를 입력해 주세요"
              value={couponNumber}
              onChange={handleCouponNumChange}
              $mismatch={mismatch}
              $hasKorean={hasKorean}></CodeField>
            <RegisterButton type="button" onClick={registerCoupon}>
              쿠폰 등록
            </RegisterButton>
          </InputContainer>
          {mismatch && <MismatchText>* 유효하지 않은 쿠폰입니다.</MismatchText>}
          {hasKorean && <MismatchText>* 영문, 숫자로 입력해 주세요.</MismatchText>}
          <CouponContainer>
            {couponExist ? (
              <CouponListBox>
                {COUPON_LIST.coupons.map((item) => {
                  const { couponMemberId, couponName, couponType, discountRate, discountAmount, validEndDate } = item;
                  const isCouponClicked = activeCouponId === couponMemberId;

                  return (
                    <Coupon
                      type="button"
                      key={couponMemberId}
                      $isCouponClicked={isCouponClicked}
                      onClick={() =>
                        handleCouponClick(couponMemberId, couponName, couponType, discountRate, discountAmount)
                      }>
                      {isCouponClicked ? <FilledCircleIcon /> : <EmptyCircleIcon />}
                      <CouponText>
                        <DiscountTxt>{checkCouponType(couponType, discountRate, discountAmount)}</DiscountTxt>
                        <CouponDetail>
                          <CouponName>{couponName} |</CouponName>
                          <CouponExpiration>유효기간 ~ {convertDate(validEndDate)}</CouponExpiration>
                        </CouponDetail>
                      </CouponText>
                    </Coupon>
                  );
                })}
              </CouponListBox>
            ) : (
              <NoCouponTxt>사용 가능한 쿠폰이 없습니다.</NoCouponTxt>
            )}
          </CouponContainer>
        </Container>
        <ApplyButton
          type="button"
          disabled={!finsishSelectCoupon}
          $finsishSelectCoupon={finsishSelectCoupon}
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

const InputContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  padding: 0 0 0.8rem;
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
  color: #ff5858;
`;

const CouponContainer = styled.div`
  display: flex;
`;

const CouponListBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  height: 17.6rem;
  padding: 0 0 1rem;
`;

const RegisterButton = styled.button`
  display: flex;
  padding: 0.8rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_200};
  border-radius: 8px;
  background-color: white;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Body6};
`;

const NoCouponTxt = styled.p`
  margin-top: 2.4rem;
  color: ${({ theme }) => theme.colors.grey_500};
  ${({ theme }) => theme.fonts.Body6};
`;

const Coupon = styled.button<{ $isCouponClicked: boolean }>`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  width: 100%;
  height: 8.8rem;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_100};
`;

const EmptyCircleIcon = styled(EmptyCircleIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const FilledCircleIcon = styled(FilledCircleIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const CouponText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

const DiscountTxt = styled.p`
  text-align: left;
  ${({ theme }) => theme.fonts.Body5};
  ${({ theme }) => theme.colors.black};
`;

const CouponDetail = styled.div`
  display: flex;
  gap: 0.4rem;
  width: 100%;
`;

const CouponName = styled.p`
  text-align: left;
  ${({ theme }) => theme.colors.grey_800};
  ${({ theme }) => theme.fonts.Body7};
`;

const CouponExpiration = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${({ theme }) => theme.colors.grey_500};
`;

const ApplyButton = styled.button<{ $finsishSelectCoupon: boolean }>`
  padding: 0.8rem 0;
  border-radius: 8px;
  ${({ theme }) => theme.fonts.Body5};

  background-color: ${({ $finsishSelectCoupon }) => ($finsishSelectCoupon ? "#6478FF" : "#ECEDF0")};
  color: ${({ $finsishSelectCoupon }) => ($finsishSelectCoupon ? "#FFF" : "#AFB3C0")};
`;
