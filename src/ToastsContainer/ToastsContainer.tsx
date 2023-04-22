import styles from "./ToastsContainer.module.css";

interface IToastsContainerProps {
  children: JSX.Element[];
}

export function ToastsContainer({ children }: IToastsContainerProps) {
  return <div className={styles.toastsContainer}>{children}</div>;
}
