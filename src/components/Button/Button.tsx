import { TCallback } from "../../types.ts";

import styles from "./Button.module.css";

export enum ButtonColors {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

interface IButtonProps {
  children: string | JSX.Element[];
  type: ButtonColors;
  clickHandler: TCallback;
}

export function Button({ type, children, clickHandler }: IButtonProps) {
  return (
    <button
      onClick={clickHandler}
      className={`${styles.button} ${styles[type]}`}
    >
      {children}
    </button>
  );
}
