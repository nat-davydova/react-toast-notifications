import "./App.css";
import { Button, ButtonColors } from "./Button/Button.tsx";
import { Toast, ToastType } from "./Toast/Toast.tsx";
import { ToastsContainer } from "./ToastsContainer/ToastsContainer.tsx";

function App() {
  return (
    <div className="app">
      <div className="btn-container">
        <Button type={ButtonColors.SUCCESS}>Success</Button>
        <Button type={ButtonColors.INFO}>Info</Button>
        <Button type={ButtonColors.WARNING}>Warning</Button>
        <Button type={ButtonColors.ERROR}>Error</Button>
      </div>
      <ToastsContainer>
        <Toast type={ToastType.SUCCESS} />
        <Toast type={ToastType.INFO} />
        <Toast type={ToastType.WARNING} />
        <Toast type={ToastType.ERROR} />
      </ToastsContainer>
    </div>
  );
}

export default App;
