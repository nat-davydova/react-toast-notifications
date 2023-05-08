import { createContext, useReducer } from "react";

import {
  success,
  info,
  warning,
  error,
  deleteToast,
} from "../actions/toastsActions.ts";
import { IToastsState, toastsReducer } from "../reducers/toastsReducer.ts";

import {
  IContextProps,
  IToastContextValue,
  TAddToastShortCallbackProps,
  TDeleteToastShortCallbackProps,
} from "./types.ts";

const initialState: IToastsState = {
  toasts: [],
};

const initialContextvalue: IToastContextValue = {
  toasts: [],
  success: () => undefined,
  info: () => undefined,
  warning: () => undefined,
  error: () => undefined,
  deleteToast: () => undefined,
};

export const ToastContext =
  createContext<IToastContextValue>(initialContextvalue);

export const ToastContextProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(toastsReducer, initialState);
  const { toasts } = state;
  const contextValue = {
    toasts,
    success: ({ message }: TAddToastShortCallbackProps) =>
      success({ message, dispatch }),
    info: ({ message }: TAddToastShortCallbackProps) =>
      info({ message, dispatch }),
    warning: ({ message }: TAddToastShortCallbackProps) =>
      warning({ message, dispatch }),
    error: ({ message }: TAddToastShortCallbackProps) =>
      error({ message, dispatch }),
    deleteToast: ({ id }: TDeleteToastShortCallbackProps) =>
      deleteToast({ id, dispatch }),
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};
