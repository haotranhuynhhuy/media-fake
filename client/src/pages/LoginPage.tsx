import React, { useState } from "react";
import classNames from "classnames";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const LoginPage = () => {
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
              Already has An Account?
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
              Already has An Account?
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
          {active ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
