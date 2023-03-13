import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SaleOffComponent from "./components/Base/SaleOffComponent";
import { saleOffData } from "./assets/data/SaleOffData";
import HowComponent from "./components/Base/HowComponent";
import { howItWork } from "./assets/data/HowItWorkData";

function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 md:gap-10 gap-10">
        {saleOffData.map((item) => {
          return <SaleOffComponent data={item} />;
        })}
      </div>
      <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 md:gap-10 gap-10">
        {howItWork.map((item) => {
          return <HowComponent data={item} />;
        })}
      </div>
    </BrowserRouter>
  );
}

export default App;
