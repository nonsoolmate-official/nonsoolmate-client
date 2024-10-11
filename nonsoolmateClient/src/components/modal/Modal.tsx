import { useModalDispatch } from "@hooks/useModal";
import styled from "styled-components";

export default function Modal() {
  const showModal = useModalDispatch();

  const handleClose = () => {
    showModal(false);
  };

  return (
    <Background onClick={handleClose}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <Content>모달</Content>
      </Dialog>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
`;

const Dialog = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
