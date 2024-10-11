import { MembershipBasicIc } from "@assets/index";
import Button from "@components/buttons/Button";
import { useModalDispatch } from "@hooks/useModal";
import styled from "styled-components";

export default function ChoiceModal() {
  // const { membership } = useMembership();
  const dispatch = useModalDispatch();

  const handleCancelMembership = () => {
    dispatch({ type: "SHOW_MODAL", variant: "description", descriptionType: "unsubscribe" });
  };

  return (
    <Wrapper>
      <Title>아래 멤버십 혜택이 모두 사라져요</Title>
      <MembershipBasicIc />
      {
        // membership === "basic" ? <MembershipBasicIc /> : <MembershipPremiumIc />
      }
      <Notice>*지금 멤버십을 해지해도 {/* 멤버십 기간 */}까지 사용할 수 있어요.</Notice>
      <ButtonLayout>
        <Button width={19.9} fontSize="Headline5" onClick={handleCancelMembership}>
          해지하기
        </Button>
        <Button width={19.9} fontSize="Headline5" onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
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
