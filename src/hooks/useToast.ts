import { useContext } from "react";

import { ToastContext } from "../contexts/ToastContext.tsx";

export const useToast = () => useContext(ToastContext);
