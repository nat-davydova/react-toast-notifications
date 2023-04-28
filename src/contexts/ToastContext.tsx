import { createContext, useReducer } from "react";

import { IToast } from "../components/Toast/Toast.tsx";
import { IToastsState, toastsReducer } from "../reducers/toastsReducer.ts";

export const ToastContext = createContext<IToast[]>([]);

interface IContextProps {
  children: JSX.Element | JSX.Element[];
}

const initialState: IToastsState = {
  toasts: [],
};

export const ToastContextProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(toastsReducer, initialState);
  const { toasts } = state;

  // function addToast({ type, message }) {
  //   dispatch({
  //     type,
  //     payload: {
  //       message,
  //     },
  //   });
  // }

  return (
    <ToastContext.Provider value={toasts}>{children}</ToastContext.Provider>
  );
};
