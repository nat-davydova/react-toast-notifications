import { IconX } from "@tabler/icons-react";

import styles from "./Toast.module.css";

export function Toast() {
  return (
    <div className={styles.toast}>
      <span>Type Icon</span>
      <p className={styles.message}>Some message</p>
      <button className={styles.dismissBtn} type="button">
        <IconX size={18} />
      </button>
    </div>
  );
}
