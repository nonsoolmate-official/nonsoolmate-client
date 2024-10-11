import Modal from "@components/modal/Modal";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type ModalState = { isModal: boolean };

const initialState: ModalState = {
  isModal: false,
};

type ModalAction = { type: "SHOW_MODAL" } | { type: "HIDE_MODAL" };

type ModalDispatch = Dispatch<ModalAction>;

export const ModalStateContext = createContext<ModalState | undefined>(undefined);
export const ModalDispatchContext = createContext<ModalDispatch | undefined>(undefined);

function reducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case "SHOW_MODAL":
      return { isModal: true };
    case "HIDE_MODAL":
      return { isModal: false };
    default:
      return state;
  }
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        {state.isModal && <Modal />}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}
