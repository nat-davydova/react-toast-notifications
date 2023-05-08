import { ToastType } from "../components/Toast/Toast.tsx";
import {
  IAddToastProps,
  TAddToastWithFixedTypeProps,
} from "../contexts/types.ts";
import { ToastsActions } from "../reducers/toastsReducer.ts";

export function addToast({ toastType, message, dispatch }: IAddToastProps) {
  const id = Math.round(Math.random() * 100000).toString();

  dispatch({
    type: ToastsActions.ADD,
    payload: {
      toastType,
      message,
      id,
    },
  });
}

export function success({ message, dispatch }: TAddToastWithFixedTypeProps) {
  addToast({ toastType: ToastType.SUCCESS, message, dispatch });
}

export function info({ message, dispatch }: TAddToastWithFixedTypeProps) {
  addToast({ toastType: ToastType.INFO, message, dispatch });
}

export function warning({ message, dispatch }: TAddToastWithFixedTypeProps) {
  addToast({ toastType: ToastType.WARNING, message, dispatch });
}

export function error({ message, dispatch }: TAddToastWithFixedTypeProps) {
  addToast({ toastType: ToastType.ERROR, message, dispatch });
}
