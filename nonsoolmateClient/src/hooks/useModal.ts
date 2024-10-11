import { ModalDispatchContext, ModalStateContext } from "contexts/ModalProvider";
import { useContext } from "react";

export function useModalState() {
  const context = useContext(ModalStateContext);
  if (!context) throw new Error("useModalState must be used within a ModalProvider");
  return context;
}

export function useModalDispatch() {
  const context = useContext(ModalDispatchContext);
  if (!context) throw new Error("useModalDispatch must be used within a ModalProvider");
  return context;
}
