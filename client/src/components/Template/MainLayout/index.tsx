import React from "react";
import Header from "../Header";

interface MainLayoutProps {
  children?: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main-layout flex gap-3">
        <div className=" w-1/4 bg-slate-500">
          <p>Left</p>
        </div>
        <div className="w-1/2 shrink-0 bg-slate-500 overflow-auto">
          {children}
        </div>
        <div className="w-1/4 bg-slate-500">
          <p>Right</p>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
