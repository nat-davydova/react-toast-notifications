import "./App.css";
import { Button, ButtonColors } from "./Button/Button.tsx";
import { Toast } from "./Toast/Toast.tsx";

function App() {
  return (
    <div className="app">
      <div className="btn-container">
        <Button type={ButtonColors.SUCCESS}>Success</Button>
        <Button type={ButtonColors.INFO}>Info</Button>
        <Button type={ButtonColors.WARNING}>Warning</Button>
        <Button type={ButtonColors.ERROR}>Error</Button>
      </div>
      <Toast />
    </div>
  );
}

export default App;
