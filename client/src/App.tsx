import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className="read-the-docs text-4xl underline">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
