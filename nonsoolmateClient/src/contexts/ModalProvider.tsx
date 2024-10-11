import Modal from "@components/modal/Modal";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type ModalState = {
  isModal: boolean;
  variant?: "confirm" | "choice" | null;
};

const initialState: ModalState = {
  isModal: false,
  variant: null,
};

type ModalAction = { type: "SHOW_MODAL"; variant: "confirm" | "choice" } | { type: "CLOSE_MODAL" };

type ModalDispatch = Dispatch<ModalAction>;

export const ModalStateContext = createContext<ModalState | undefined>(undefined);
export const ModalDispatchContext = createContext<ModalDispatch | undefined>(undefined);

function reducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case "SHOW_MODAL":
      return { isModal: true, variant: action.variant };
    case "CLOSE_MODAL":
      return { isModal: false, variant: null };
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
        {state.isModal && state.variant && <Modal variant={state.variant} />}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}
