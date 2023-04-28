import "./App.css";

import { useContext } from "react";

import { Button, ButtonColors } from "./components/Button/Button.tsx";
import { ToastsContainer } from "./components/ToastsContainer/ToastsContainer.tsx";
import { ToastContext } from "./contexts/ToastContext.tsx";

function App() {
  const toasts = useContext(ToastContext);

  return (
    <div className="app">
      <div className="btn-container">
        <Button type={ButtonColors.SUCCESS}>Success</Button>
        <Button type={ButtonColors.INFO}>Info</Button>
        <Button type={ButtonColors.WARNING}>Warning</Button>
        <Button type={ButtonColors.ERROR}>Error</Button>
      </div>
      <ToastsContainer toasts={toasts} />
    </div>
  );
}

export default App;
