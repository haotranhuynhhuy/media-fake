import React from "react";
import classNames from "classnames";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-4 justify-center items-center px-5">
      <p className="text-2xl">Register</p>
      <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <p className="font-medium text-lg w-1/2">Username:</p>
        <input
          className="border rounded-lg p-2 focus:outline-none focus:ring md:w-1/2 w-full"
          name="username"
          required
          placeholder="Enter your username"
        />
      </div>
      <div className="flex md:flex-row flex-col  items-center justify-between w-full">
        <p className=" font-medium text-lg w-1/2">Password:</p>
        <input
          className="border rounded-lg p-2 focus:outline-none focus:ring md:w-1/2 w-full"
          name="password"
          required
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex md:flex-row flex-col  items-center  justify-between  w-full">
        <p className=" font-medium text-lg">Password Confirm:</p>
        <input
          className="border rounded-lg p-2 focus:outline-none focus:ring md:w-1/2 w-full"
          name="confirmPassword"
          required
          type="password"
          placeholder="Enter confirm password"
        />
      </div>

      <button
        className=" bg-blue-600 rounded-lg outline-none p-3 text-white md:self-start self-center"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
