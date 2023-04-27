import React from "react";
import Header from "../Header";
import { HttpClientMethod } from "../../../libs/axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../utils/hooks";
import { checkAuth } from "../../../features/auth/AuthSlice";

interface MainLayoutProps {
  children?: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handelLogout = () => {
    HttpClientMethod.clearToken();
    sessionStorage.clear();
    dispatch(checkAuth());
    navigate("/login");
  };
  const optionsProfile = [
    {
      id: 0,
      name: "Thông tin cá nhân",
      slug: "/profile",
    },
    {
      id: 1,
      name: "Đăng xuất",
      slug: "/login",
      click: handelLogout,
    },
  ];
  return (
    <div>
      <Header optionsProfile={optionsProfile} />
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
