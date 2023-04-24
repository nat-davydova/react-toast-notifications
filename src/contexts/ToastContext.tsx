import { createContext } from "react";

export const ToastContext = createContext(null);

interface IContextProps {
  children: JSX.Element | JSX.Element[];
}

export const ToastContextProvider = ({ children }: IContextProps) => {
  return <ToastContext.Provider value={null}>{children}</ToastContext.Provider>;
};
