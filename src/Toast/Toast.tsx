import { IconX } from "@tabler/icons-react";

import styles from "./Toast.module.css";
import { toastSettings } from "./toastSettings.tsx";

export enum ToastType {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

interface IToastProps {
  type: ToastType;
  message: string;
}

export function Toast({ type, message }: IToastProps) {
  const { icon } = toastSettings[type];

  return (
    <div className={styles.toast}>
      <span className={`${styles.icon} ${styles[type]}`}>{icon}</span>
      <p className={styles.message}>{message}</p>
      <button className={styles.dismissBtn} type="button">
        <IconX size={18} />
      </button>
    </div>
  );
}
