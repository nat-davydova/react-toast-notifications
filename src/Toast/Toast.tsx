import styles from "./Toast.module.css";

export function Toast() {
  return (
    <div className={styles.toast}>
      <span>Type Icon</span>
      <p>Some message</p>
      <button type="button">Dismiss button</button>
    </div>
  );
}
