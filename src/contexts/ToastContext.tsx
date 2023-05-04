import { createContext, useId, useReducer } from "react";

import {
  IToastsState,
  ToastsActions,
  toastsReducer,
} from "../reducers/toastsReducer.ts";

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
  const id = useId();
  const { toasts } = state;
  const contextValue = { toasts, addToast };

  function addToast({ toastType, message }: IAddToastProps) {
    dispatch({
      type: ToastsActions.ADD,
      payload: {
        toastType,
        message,
        id,
      },
    });
  }

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};
