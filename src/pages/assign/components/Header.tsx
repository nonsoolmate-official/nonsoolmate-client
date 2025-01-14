import Button from "@components/button/Button";
import styled from "styled-components";

interface HeaderProps {
  handleAssign: (clicked: string) => void;
  assign: string;
}

export default function Header(props: HeaderProps) {
  const { handleAssign, assign } = props;

  return (
    <Container>
      <Title>{assign === "Test" ? "시험-강사 배정" : "학생-강사 배정"}</Title>
      <Wrapper>
        <Button width={7} variant="assign" onClick={() => handleAssign("Test")} isActive={assign === "Test"}>
          시험
        </Button>
        <Button width={7} variant="assign" onClick={() => handleAssign("Student")} isActive={assign === "Student"}>
          학생
        </Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Headline5};

  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: center;
`;
