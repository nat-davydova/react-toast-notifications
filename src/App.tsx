import "./App.css";

import { Button, ButtonColors } from "./components/Button/Button.tsx";
import { IToast, ToastType } from "./components/Toast/Toast.tsx";
import { ToastsContainer } from "./components/ToastsContainer/ToastsContainer.tsx";

const toasts: IToast[] = [
  {
    type: ToastType.SUCCESS,
    message: "I am a success toast",
    id: "1",
  },
  {
    type: ToastType.INFO,
    message: "I am an info toast",
    id: "2",
  },
  {
    type: ToastType.WARNING,
    message: "I am a warning toast",
    id: "3",
  },
  {
    type: ToastType.ERROR,
    message: "I am an error toast",
    id: "4",
  },
];

function App() {
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
