import Modal from "@components/modal/Modal";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type ModalAction = { type: "SHOW_MODAL" } | { type: "HIDE_MODAL" };

export const ModalStateContext = createContext<boolean | undefined>(undefined);
export const ModalDispatchContext = createContext<Dispatch<SetStateAction<boolean>> | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalStateContext.Provider value={isModalOpen}>
      <ModalDispatchContext.Provider value={setIsModalOpen}>
        {children}
        {isModalOpen && <Modal />}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}
