import React from "react";

const LoginPage = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen bg-yellow-600 transition ease-out duration-300">
      <div className=" relative w-[800px] h-[500px] m-5">
        <div className=" absolute top-[40px] flex justify-center items-center w-full h-[420px] bg-yellow-500">
          <div>
            <p className="text-xl">Already has An Account?</p>
            <button>Sign In</button>
          </div>
          <div>
            <p className="text-xl">Already has An Account?</p>
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
