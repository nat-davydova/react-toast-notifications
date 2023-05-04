import { IToast, ToastType } from "../components/Toast/Toast.tsx";
import { TCallback } from "../types.ts";

export interface IContextProps {
  children: JSX.Element | JSX.Element[];
}

export interface IAddToastProps {
  toastType: ToastType;
  message: string;
}

export interface IContextValue {
  toasts: IToast[];
  addToast: TCallback;
}
