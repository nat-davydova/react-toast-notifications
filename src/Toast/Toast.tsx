import { IconX } from "@tabler/icons-react";

import styles from "./Toast.module.css";

export enum ToastType {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

interface IToastProps {
  type: ToastType;
}

export function Toast({ type }: IToastProps) {
  return (
    <div className={styles.toast}>
      <span>{type}</span>
      <p className={styles.message}>Some message</p>
      <button className={styles.dismissBtn} type="button">
        <IconX size={18} />
      </button>
    </div>
  );
}
