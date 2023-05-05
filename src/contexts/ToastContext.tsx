import { createContext, useReducer } from "react";

import { addToast } from "../actions/toastsActions.ts";
import { IToastsState, toastsReducer } from "../reducers/toastsReducer.ts";

import { IAddToastProps, IContextProps, IContextValue } from "./types.ts";

const initialState: IToastsState = {
  toasts: [],
};

const initialContextvalue: IContextValue = {
  toasts: [],
  addToast: () => undefined,
};

export const ToastContext = createContext<IContextValue>(initialContextvalue);

export const ToastContextProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(toastsReducer, initialState);
  const { toasts } = state;
  const contextValue = {
    toasts,
    addToast: ({ toastType, message }: Omit<IAddToastProps, "dispatch">) =>
      addToast({ toastType, message, dispatch }),
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};
