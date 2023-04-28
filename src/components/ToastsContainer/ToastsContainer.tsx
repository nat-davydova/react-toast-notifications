import { useContext } from "react";

import { ToastContext } from "../../contexts/ToastContext.tsx";
import { Toast } from "../Toast/Toast.tsx";

import styles from "./ToastsContainer.module.css";

export function ToastsContainer() {
  const toasts = useContext(ToastContext);

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
