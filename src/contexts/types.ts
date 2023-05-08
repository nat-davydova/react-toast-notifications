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

export type TAddToastShortCallbackProps = Omit<
  IAddToastProps,
  "toastType" | "dispatch"
>;

export type TAddToastShortCallback = ({
  ...args
}: TAddToastShortCallbackProps) => void;

export interface IDeleteToastProps {
  id: string;
  dispatch: React.Dispatch<IAction>;
}

export type TDeleteToastShortCallbackProps = Omit<
  IDeleteToastProps,
  "dispatch"
>;

export type TDeleteToastShortCallback = ({
  ...args
}: TDeleteToastShortCallbackProps) => void;

export interface IToastContextValue {
  toasts: IToast[];
  success: TAddToastShortCallback;
  info: TAddToastShortCallback;
  warning: TAddToastShortCallback;
  error: TAddToastShortCallback;
  deleteToast: TDeleteToastShortCallback;
}
