import React, { useState } from "react";
import classNames from "classnames";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store/store";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const Authentication = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  const [active, setActive] = useState(false);
  const formBox = classNames("form-box", {
    ["active"]: !active,
  });
  const backgroundColor = classNames(
    "flex justify-center items-center min-h-screen transition ease-out duration-300",
    {
      ["bg-blue-600"]: !active,
      ["bg-yellow-600"]: active,
    }
  );
  return (
    <div className={backgroundColor}>
      <div className=" relative w-[800px] h-[500px] m-5">
        <div className="orangeBG absolute top-[40px] flex justify-center items-center w-full h-[420px]">
          <div className="box flex justify-center items-center flex-col">
            <p className="text-xl font-bold mb-3 text-white">
              Already Has An Account?
            </p>
            <button
              className=" px-5 py-3 bg-white border-none font-bold text-base cursor-pointer"
              onClick={() => setActive(true)}
            >
              Sign In
            </button>
          </div>
          <div className="box flex justify-center items-center flex-col">
            <p className="text-xl font-bold mb-3 text-white">
              Create An Account?
            </p>
            <button
              className=" px-5 py-2 bg-white border-none font-bold text-base cursor-pointer"
              onClick={() => setActive(false)}
            >
              Register
            </button>
          </div>
        </div>
        <div className={formBox}>
          <div className={"form signInForm"}>
            <LoginForm />
          </div>
          <div className={"form signUpForm"}>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
