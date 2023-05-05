import { IAddToastProps } from "../contexts/types.ts";
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
