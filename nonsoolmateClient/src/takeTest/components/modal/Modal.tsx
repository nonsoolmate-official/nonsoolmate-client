import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

export interface ChildrenProps {
  children: React.ReactNode;
}
export default function Modal(props: ChildrenProps) {
  const { children } = props;
  return <ModalView>{children}</ModalView>;
}
export const ModalContainer = styled.section`
  position: fixed;
  inset: 0;
`;

const ModalView = styled.section`
  ${columnFlex};

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  padding: 0;
  border: none;
  border-radius: 12px;
  background-color: white;
  transform: translate(-50%, -50%);
`;
