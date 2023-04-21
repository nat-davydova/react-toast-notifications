import styles from "./Button.module.css";

export enum ButtonColors {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

interface IButtonProps {
  children: string;
  type: ButtonColors;
}

export function Button({ type, children }: IButtonProps) {
  return (
    <button className={`${styles.button} ${styles[type]}`}>{children}</button>
  );
}
