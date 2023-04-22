import styles from "./Toast.module.css";

export function Toast() {
  return (
    <div className={styles.toast}>
      <span>Type Icon</span>
      <p className={styles.toast__message}>Some message</p>
      <button type="button">Dismiss button</button>
    </div>
  );
}
