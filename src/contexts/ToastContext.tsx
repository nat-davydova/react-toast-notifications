import { createContext, useReducer } from "react";

import { IToastsState, toastsReducer } from "../reducers/toastsReducer.ts";

export const ToastContext = createContext(null);

interface IContextProps {
  children: JSX.Element | JSX.Element[];
}

const initialState: IToastsState = {
  toasts: [],
};

export const ToastContextProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(toastsReducer, initialState);

  return <ToastContext.Provider value={null}>{children}</ToastContext.Provider>;
};
