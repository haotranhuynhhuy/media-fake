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
