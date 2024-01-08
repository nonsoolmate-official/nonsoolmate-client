import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

export interface ChildrenProps {
  children: React.ReactNode;
}
export default function Modal(props: ChildrenProps) {
  const { children } = props;
  return <ModalView>{children}</ModalView>;
}

const ModalView = styled.div`
  ${columnFlex};

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  border: none;
  border-radius: 12px;
  background-color: white;
  transform: translate(-50%, -50%);
`;
