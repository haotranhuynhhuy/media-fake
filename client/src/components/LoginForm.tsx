import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4 justify-center items-center">
      <p className="text-2xl">Sign In</p>
      <div className="flex items-center gap-5">
        <p className=" font-medium text-lg">Username:</p>
        <input
          className="border rounded-lg p-2 focus:outline-none focus:ring"
          name="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="flex items-center gap-5">
        <p className=" font-medium text-lg">Password:</p>
        <input
          className="border rounded-lg p-2 focus:outline-none focus:ring"
          name="password"
          type={"password"}
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        className=" bg-yellow-500 rounded-lg outline-none p-3 self-start"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
