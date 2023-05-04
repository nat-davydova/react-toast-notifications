import "./App.css";

import { useContext } from "react";

import { Button, ButtonColors } from "./components/Button/Button.tsx";
import { ToastType } from "./components/Toast/Toast.tsx";
import { ToastsContainer } from "./components/ToastsContainer/ToastsContainer.tsx";
import { ToastContext } from "./contexts/ToastContext.tsx";

function App() {
  const { toasts, addToast } = useContext(ToastContext);

  return (
    <div className="app">
      <div className="btn-container">
        <Button
          clickHandler={() =>
            addToast({ toastType: ToastType.SUCCESS, message: "Success" })
          }
          type={ButtonColors.SUCCESS}
        >
          Success
        </Button>
        <Button
          clickHandler={() =>
            addToast({ toastType: ToastType.INFO, message: "Info" })
          }
          type={ButtonColors.INFO}
        >
          Info
        </Button>
        <Button
          clickHandler={() =>
            addToast({ toastType: ToastType.WARNING, message: "Warning" })
          }
          type={ButtonColors.WARNING}
        >
          Warning
        </Button>
        <Button
          clickHandler={() =>
            addToast({ toastType: ToastType.ERROR, message: "Error" })
          }
          type={ButtonColors.ERROR}
        >
          Error
        </Button>
      </div>
      <ToastsContainer toasts={toasts} />
    </div>
  );
}

export default App;
