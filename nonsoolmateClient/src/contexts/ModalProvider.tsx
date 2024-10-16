import Modal from "@components/modal/Modal";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type ModalState = {
  isOpen: boolean;
  variant?: "confirm" | "choice" | "description" | null;
  descriptionType?: "unsubscribe" | "welcome";
};

const initialState: ModalState = {
  isOpen: false,
  variant: null,
  descriptionType: undefined,
};

type ModalAction =
  | { type: "SHOW_MODAL"; variant: "confirm" | "choice" | "description"; descriptionType?: "unsubscribe" | "welcome" }
  | { type: "CLOSE_MODAL" };

type ModalDispatch = Dispatch<ModalAction>;

export const ModalStateContext = createContext<ModalState | undefined>(undefined);
export const ModalDispatchContext = createContext<ModalDispatch | undefined>(undefined);

function reducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case "SHOW_MODAL":
      return { isOpen: true, variant: action.variant, descriptionType: action.descriptionType };
    case "CLOSE_MODAL":
      return { isOpen: false, variant: null, descriptionType: undefined };
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
        {state.isOpen && state.variant && <Modal variant={state.variant} />}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}
