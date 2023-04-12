import React, { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../utils/hooks";
import { useMutation } from "@apollo/client";
import { AUTH_LOGIN } from "../graphql/mutations/AuthMutation";
import ButtonLoading from "./ButtonLoading";
import { HttpClientMethod } from "../libs/axios";
import { useDispatch } from "react-redux";
import { checkAuth } from "../features/auth/AuthSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { loading, error }] = useMutation(AUTH_LOGIN, {
    onCompleted: (data) => {
      HttpClientMethod.setAccessToken(data.login.accessToken);
    },
  });
  const { value, onChange } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login({
        variables: {
          username: value.username,
          password: value.password,
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
      <p className="text-2xl">Sign In</p>
      <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <p className="font-medium text-lg">Username:</p>
        <input
          className="border rounded-lg p-2 focus:outline-none focus:ring md:w-2/3 w-full"
          name="username"
          placeholder="Enter your username"
          required
          onChange={onChange}
          value={value.username}
        />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between  w-full">
        <p className="font-medium text-lg">Password:</p>
        <input
          className="border rounded-lg p-2 focus:outline-none focus:ring  md:w-2/3 w-full"
          name="password"
          type="password"
          autoComplete="on"
          placeholder="Enter your password"
          required
          onChange={onChange}
          value={value.password}
        />
      </div>
      {error && (
        <div
          className="p-4 w-full text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          {error.message}
        </div>
      )}

      <ButtonLoading
        loading={loading}
        className=" bg-yellow-500 rounded-lg outline-none p-3 md:self-start self-center"
        type="submit"
      >
        Sign In
      </ButtonLoading>
    </form>
  );
};

export default LoginForm;
