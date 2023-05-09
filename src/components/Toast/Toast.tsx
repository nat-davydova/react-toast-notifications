import { useEffect, useRef } from "react";

import { IconX } from "@tabler/icons-react";

import { useToast } from "../../hooks/useToast.ts";

import styles from "./Toast.module.css";
import { toastSettings } from "./toastSettings.tsx";
import { IToast } from "./types.ts";

export function Toast({ type, message, id }: IToast) {
  const { deleteToast } = useToast();
  const timerID = useRef<number | null>(null);
  const { icon } = toastSettings[type];

  // useEffect(() => {
  //   timerID.current = setTimeout(() => {
  //     handleDeleteToast();
  //   }, 4000);
  //
  //   return () => {
  //     if (timerID.current) {
  //       clearTimeout(timerID.current);
  //     }
  //   };
  // }, []);

  function handleDeleteToast() {
    deleteToast({ id });
  }

  return (
    <div className={styles.toast}>
      <span className={`${styles.icon} ${styles[type]}`}>{icon}</span>
      <p className={styles.message}>{message}</p>
      <button
        onClick={handleDeleteToast}
        className={styles.dismissBtn}
        type="button"
      >
        <IconX size={18} />
      </button>
      <div className={`${styles.progressBar} ${styles[type]}`}></div>
    </div>
  );
}
