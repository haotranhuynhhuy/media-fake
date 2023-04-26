import React, { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../../utils/hooks";
import { useMutation } from "@apollo/client";
import { AUTH_LOGIN } from "../../../graphql/mutations/AuthMutation";
import { HttpClientMethod } from "../../../libs/axios";
import { useDispatch } from "react-redux";
import { checkAuth } from "../../../features/auth/AuthSlice";
import Button from "../../BaseComponents/Button";
import TextError from "../../BaseComponents/TextError";
import InputTypo from "../../BaseComponents/InputTypo";

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
      {error && <TextError error={error.message} />}

      <Button
        isLoading={loading}
        className=" bg-yellow-500 rounded-lg outline-none p-3 md:self-start self-center"
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
