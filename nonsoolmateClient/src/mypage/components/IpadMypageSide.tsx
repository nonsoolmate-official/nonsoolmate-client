import styled from "styled-components";

interface IpadMypageSideProps {
  handleInfo: () => void;
  handleSecond: () => void;
  handleThird: () => void;
  isClicked: number;
}

export default function IpadMypageSide(props: IpadMypageSideProps) {
  const { handleInfo, handleSecond, handleThird, isClicked } = props;
  return (
    <Container>
      <Header>마이페이지</Header>
      <Sidebar>
        <Btn type="button" $isClicked={isClicked === 1} onClick={handleInfo}>
          회원정보
        </Btn>
        <Btn type="button" $isClicked={isClicked === 2} onClick={handleSecond}>
          다른메뉴
        </Btn>
        <Btn type="button" $isClicked={isClicked === 3} onClick={handleThird}>
          또다른메뉴
        </Btn>
      </Sidebar>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 0 3.2rem;
`;

const Header = styled.h2`
  margin-top: 3.2rem;
  margin-bottom: 2.4rem;

  ${({ theme }) => theme.fonts.Headline5};

  color: ${({ theme }) => theme.colors.black};
`;

const Sidebar = styled.aside`
  display: flex;
  gap: 4rem;
  width: 100%;
`;

const Btn = styled.button<{ $isClicked: boolean }>`
  padding: 0 0 0.5rem;
  border: none;
  border-bottom: ${({ $isClicked }) => ($isClicked ? "1px solid black" : "none")};
  color: ${({ theme, $isClicked }) => ($isClicked ? theme.colors.black : theme.colors.grey_400)};
  cursor: pointer;
  ${({ theme }) => theme.fonts.Body5};
`;
