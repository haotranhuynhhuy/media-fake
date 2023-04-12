import React, { FormEvent, useState } from "react";
import { useForm } from "../utils/hooks";
import ButtonLoading from "./ButtonLoading";
import { useMutation } from "@apollo/client";
import { AUTH_REGISTER } from "../graphql/mutations/AuthMutation";
import { useDispatch } from "react-redux";
import { checkAuth } from "../features/auth/AuthSlice";
import { HttpClientMethod } from "../libs/axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { loading, error }] = useMutation(AUTH_REGISTER, {
    onCompleted: (data) => {
      HttpClientMethod.setAccessToken(data.register.accessToken);
    },
  });
  const { value, onChange } = useForm({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await register({
        variables: {
          username: value.username,
          password: value.password,
          email: value.email,
          confirmPassword: value.confirmPassword,
        },
      });
      dispatch(checkAuth());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex flex-col gap-4 justify-center items-center px-5"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl">Register</p>
      <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <p className="font-medium text-lg w-1/2">Username:</p>
        <input
          className="border rounded-lg p-2 focus:outline-none focus:ring md:w-1/2 w-full"
          name="username"
          required
          placeholder="Enter your username"
          value={value.username}
          onChange={onChange}
        />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <p className="font-medium text-lg w-1/2">Email:</p>
        <input
          type="email"
          className="border rounded-lg p-2 focus:outline-none focus:ring md:w-1/2 w-full"
          name="email"
          required
          placeholder="Enter your email"
          value={value.email}
          onChange={onChange}
        />
      </div>
      <div className="flex md:flex-row flex-col  items-center justify-between w-full">
        <p className=" font-medium text-lg w-1/2">Password:</p>
        <input
          className="border rounded-lg p-2 focus:outline-none focus:ring md:w-1/2 w-full"
          autoComplete="on"
          name="password"
          minLength={6}
          required
          type="password"
          placeholder="Enter your password"
          value={value.password}
          onChange={onChange}
        />
      </div>
      <div className="flex md:flex-row flex-col  items-center  justify-between  w-full">
        <p className=" font-medium text-lg">Password Confirm:</p>
        <input
          className="border rounded-lg p-2 focus:outline-none focus:ring md:w-1/2 w-full"
          name="confirmPassword"
          autoComplete="on"
          required
          type="password"
          placeholder="Enter confirm password"
          value={value.confirmPassword}
          onChange={onChange}
        />
      </div>
      {error && (
        <div
          className="p-4 w-full text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
          role="alert"
        >
          {error?.message}
        </div>
      )}
      <ButtonLoading
        loading={loading}
        className=" bg-blue-600 rounded-lg outline-none p-3 text-white md:self-start self-center"
        type="submit"
      >
        Register
      </ButtonLoading>
    </form>
  );
};

export default RegisterForm;
