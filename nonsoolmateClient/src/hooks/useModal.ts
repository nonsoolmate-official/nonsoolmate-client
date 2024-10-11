import { ModalDispatchContext, ModalStateContext } from "contexts/ModalProvider";

import { useContext } from "react";

export function useModalState() {
  const context = useContext(ModalStateContext);

  if (!context) throw new Error("useModalState는 ModalProvider 안에서만 사용할 수 있습니다");

  return context;
}

export function useModalDispatch() {
  const context = useContext(ModalDispatchContext);

  if (!context) throw new Error("useModalDispatch는 ModalProvider 안에서만 사용할 수 있습니다");

  return context;
}
