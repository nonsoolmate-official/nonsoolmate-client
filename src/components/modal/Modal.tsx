import ChoiceModal from "@components/modal/ChoiceModal";
import ConfirmModal from "@components/modal/ConfirmModal";
import DescriptionModal from "@components/modal/DescriptionModal";
import { useModalDispatch } from "@hooks/useModal";
import { ModalStateContext } from "contexts/ModalProvider";
import { useContext } from "react";
import styled from "styled-components";

interface ModalProps {
  variant?: "confirm" | "choice" | "description";
  descriptionType?: "unsubscribe" | "welcome";
}

export default function Modal({ variant = "confirm" }: ModalProps) {
  const dispatch = useModalDispatch();
  const state = useContext(ModalStateContext);

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <Background onClick={handleClose}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        {variant === "confirm" && <ConfirmModal />}
        {variant === "choice" && <ChoiceModal />}
        {variant === "description" && <DescriptionModal type={state?.descriptionType} />}
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
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
`;

const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  padding: 4.8rem 3.2rem 3.2rem;
  border-radius: 8px;
  background-color: white;
`;
