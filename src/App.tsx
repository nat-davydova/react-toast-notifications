import "./App.css";

import { Button, ButtonColors } from "./components/Button/Button.tsx";
import { ToastsContainer } from "./components/ToastsContainer/ToastsContainer.tsx";
import { useToast } from "./hooks/useToast.ts";

function App() {
  const { toasts, success, info, warning, error } = useToast();

  return (
    <div className="app">
      <div className="btn-container">
        <Button
          clickHandler={() => success({ message: "Success" })}
          type={ButtonColors.SUCCESS}
        >
          Success
        </Button>
        <Button
          clickHandler={() => info({ message: "Info" })}
          type={ButtonColors.INFO}
        >
          Info
        </Button>
        <Button
          clickHandler={() => warning({ message: "Warning" })}
          type={ButtonColors.WARNING}
        >
          Warning
        </Button>
        <Button
          clickHandler={() => error({ message: "Error" })}
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
