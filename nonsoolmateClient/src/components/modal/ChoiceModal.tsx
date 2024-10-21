import { MembershipBasicIc, MembershipPremiumIc } from "@assets/index";
import Button from "@components/button/Button";
import { useModalDispatch } from "@hooks/useModal";
import useGetMembership from "@pages/mypage/hooks/useGetMembership";
import usePatchMembershipStatus from "@pages/mypage/hooks/usePatchMembershipStatus";
import styled from "styled-components";

export default function ChoiceModal() {
  const dispatch = useModalDispatch();
  const { mutate } = usePatchMembershipStatus();
  const { data: membership } = useGetMembership();

  const handleCancelMembership = () => {
    dispatch({ type: "SHOW_MODAL", variant: "description", descriptionType: "unsubscribe" });
    mutate("TERMINATED");
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
    mutate("IN_PROGRESS");
  };

  return (
    <Wrapper>
      <Title>아래 멤버십 혜택이 모두 사라져요</Title>
      {membership?.membershipName === "베이직 플랜" ? <MembershipBasicIc /> : <MembershipPremiumIc />}
      <Notice>*지금 멤버십을 해지해도 {membership?.endDate}까지 사용할 수 있어요.</Notice>
      <ButtonLayout>
        <Button width={19.9} variant="secondary" fontSize="Headline5" onClick={handleCancelMembership}>
          해지하기
        </Button>
        <Button width={19.9} fontSize="Headline5" onClick={handleClose}>
          혜택 유지하기
        </Button>
      </ButtonLayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Headline4};

  margin-bottom: 3.6rem;
`;

const Notice = styled.div`
  margin: 2.8rem 0 3.2rem;
  color: ${({ theme }) => theme.colors.grey_800};
  ${({ theme }) => theme.fonts.Body6};
`;

const ButtonLayout = styled.div`
  display: flex;
  gap: 1rem;
`;
