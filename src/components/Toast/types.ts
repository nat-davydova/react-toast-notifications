export enum ToastType {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export interface IToast {
  type: ToastType;
  message: string;
  id: string;
}
