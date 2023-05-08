import { useContext } from "react";

import { IconX } from "@tabler/icons-react";

import { ToastContext } from "../../contexts/ToastContext.tsx";

import styles from "./Toast.module.css";
import { toastSettings } from "./toastSettings.tsx";

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

export function Toast({ type, message, id }: IToast) {
  const { deleteToast } = useContext(ToastContext);

  const { icon } = toastSettings[type];

  return (
    <div className={styles.toast}>
      <span className={`${styles.icon} ${styles[type]}`}>{icon}</span>
      <p className={styles.message}>{message}</p>
      <button
        onClick={() => deleteToast({ id })}
        className={styles.dismissBtn}
        type="button"
      >
        <IconX size={18} />
      </button>
    </div>
  );
}
