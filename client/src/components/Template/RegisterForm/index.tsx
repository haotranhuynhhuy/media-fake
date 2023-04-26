import React, { FormEvent, useState } from "react";
import { useForm } from "../../../utils/hooks";
import { useMutation } from "@apollo/client";
import { AUTH_REGISTER } from "../../../graphql/mutations/AuthMutation";
import { useDispatch } from "react-redux";
import { checkAuth } from "../../../features/auth/AuthSlice";
import { HttpClientMethod } from "../../../libs/axios";
import { useNavigate } from "react-router-dom";
import Button from "../../BaseComponents/Button";
import TextError from "../../BaseComponents/TextError";
import InputTypo from "../../BaseComponents/InputTypo";

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
      <InputTypo
        content="Username"
        id="username"
        name="username"
        placeholder="Enter your username"
        handleChange={onChange}
        value={value.username}
        needed
      />
      <InputTypo
        id="email"
        content="Email"
        type="email"
        className="border rounded-lg p-2 focus:outline-none focus:ring md:w-1/2 w-full"
        name="email"
        placeholder="Enter your email"
        value={value.email}
        handleChange={onChange}
        needed
      />
      <InputTypo
        isPassword
        content="Password"
        id="password"
        name="password"
        type="password"
        autoComplete="on"
        placeholder="Enter your password"
        handleChange={onChange}
        value={value.password}
        needed
      />
      <InputTypo
        isPassword
        content="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        autoComplete="on"
        placeholder="Enter your password"
        handleChange={onChange}
        value={value.confirmPassword}
        needed
      />
      {error && <TextError error={error.message} />}
      <Button
        isLoading={loading}
        className=" bg-blue-600 rounded-lg outline-none p-3 text-white md:self-start self-center"
        type="submit"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
