import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    username: String
  }

  type Query {
    user: User
  }
`;
export default typeDefs;
