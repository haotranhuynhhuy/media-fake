import { useState } from "react";
import LoginPage from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
