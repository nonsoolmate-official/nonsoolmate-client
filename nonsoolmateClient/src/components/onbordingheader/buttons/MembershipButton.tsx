import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function MembershipButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate("/membership");
      }}>
      멤버십
    </Button>
  );
}

const Button = styled.button`
  ${commonFlex}

  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.main_blue};
`;
