import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
}

export default App;
