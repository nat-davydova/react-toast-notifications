import { createContext, useReducer } from "react";

import { success, info, warning, error } from "../actions/toastsActions.ts";
import { IToastsState, toastsReducer } from "../reducers/toastsReducer.ts";

import {
  IContextProps,
  IContextValue,
  TToastCreationCallbackProps,
} from "./types.ts";

const initialState: IToastsState = {
  toasts: [],
};

const initialContextvalue: IContextValue = {
  toasts: [],
  success: () => undefined,
  info: () => undefined,
  warning: () => undefined,
  error: () => undefined,
};

export const ToastContext = createContext<IContextValue>(initialContextvalue);

export const ToastContextProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(toastsReducer, initialState);
  const { toasts } = state;
  const contextValue = {
    toasts,
    success: ({ message }: TToastCreationCallbackProps) =>
      success({ message, dispatch }),
    info: ({ message }: TToastCreationCallbackProps) =>
      info({ message, dispatch }),
    warning: ({ message }: TToastCreationCallbackProps) =>
      warning({ message, dispatch }),
    error: ({ message }: TToastCreationCallbackProps) =>
      error({ message, dispatch }),
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};
