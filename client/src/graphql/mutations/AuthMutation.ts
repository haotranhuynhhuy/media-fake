import { gql } from "@apollo/client";

export const AUTH_LOGIN = gql`
  mutation AuthLogin($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      fullname
      email
      avatar
      role
      gender
      address
      mobile
      story
      website
      accessToken
    }
  }
`;

export const AUTH_REGISTER = gql`
  mutation AuthRegister(
    $username: String!
    $password: String!
    $email: String!
    $confirmPassword: String!
  ) {
    register(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      fullname
      email
      avatar
      role
      gender
      address
      mobile
      story
      website
      accessToken
    }
  }
`;
