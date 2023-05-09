import { Toast } from "../Toast/Toast.tsx";
import { IToast } from "../Toast/types.ts";

import styles from "./ToastsContainer.module.css";

interface IToastsContainerProps {
  toasts: IToast[];
}

export function ToastsContainer({ toasts }: IToastsContainerProps) {
  return (
    <div className={styles.toastsContainer}>
      {toasts.map((toast) => (
        <Toast
          type={toast.type}
          message={toast.message}
          id={toast.id}
          key={toast.id}
        />
      ))}
    </div>
  );
}
