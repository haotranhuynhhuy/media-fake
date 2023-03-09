import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SaleOffComponent from "./components/Base/SaleOffComponent";
import { saleOffData } from "./assets/data/SaleOffData";

function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {saleOffData.map((item) => {
          return <SaleOffComponent data={item} />;
        })}
      </div>
    </BrowserRouter>
  );
}

export default App;
