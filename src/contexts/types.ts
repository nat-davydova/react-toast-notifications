import React from "react";

import { IToast, ToastType } from "../components/Toast/Toast.tsx";
import { IAction } from "../reducers/toastsReducer.ts";
import { TCallback } from "../types.ts";

export interface IContextProps {
  children: JSX.Element | JSX.Element[];
}

export interface IAddToastProps {
  toastType: ToastType;
  message: string;
  dispatch: React.Dispatch<IAction>;
}

export interface IContextValue {
  toasts: IToast[];
  addToast: TCallback;
}
