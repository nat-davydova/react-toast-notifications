import React from "react";

import { IToast, ToastType } from "../components/Toast/Toast.tsx";
import { IAction } from "../reducers/toastsReducer.ts";

export interface IContextProps {
  children: JSX.Element | JSX.Element[];
}

export interface IAddToastProps {
  toastType: ToastType;
  message: string;
  dispatch: React.Dispatch<IAction>;
}

export type TAddToastWithFixedTypeProps = Omit<IAddToastProps, "toastType">;
export type TToastCreationCallbackProps = Omit<
  IAddToastProps,
  "toastType" | "dispatch"
>;
export type TToastCreationCallback = ({
  ...args
}: TToastCreationCallbackProps) => void;

export interface IContextValue {
  toasts: IToast[];
  success: TToastCreationCallback;
  info: TToastCreationCallback;
}
