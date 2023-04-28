import { IToast } from "../components/Toast/Toast.tsx";

export enum ToastsActions {
  ADD = "add",
  DELETE = "delete",
}

export interface IAction {
  type: ToastsActions;
}

export interface IToastsState {
  toasts: IToast[];
}

export function toastsReducer(state: IToastsState, action: IAction) {
  const { type } = action;

  switch (type) {
    case ToastsActions.ADD: {
      return state;
    }

    case ToastsActions.DELETE: {
      return state;
    }

    default: {
      throw new Error(`Unknown action type: ${type}`);
    }
  }
}
