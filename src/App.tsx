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
        <Toast type={ToastType.SUCCESS} message="I am a success toast" />
        <Toast type={ToastType.INFO} message="I am an info toast" />
        <Toast type={ToastType.WARNING} message="I am a warning toast" />
        <Toast type={ToastType.ERROR} message="I am an error toast" />
      </ToastsContainer>
    </div>
  );
}

export default App;
