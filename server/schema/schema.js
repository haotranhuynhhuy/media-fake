import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    fullname: String
    username: String
    email: String
    avatar: String
    role: String
    gender: String
    address: String
    mobile: String
    story: String
    website: String
    followers: [User]
    following: [User]
    saved: [User]
  }

  type Query {
    user(id: ID!): User
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User!
    login(username: String!, password: String!): User!
  }
`;
export default typeDefs;
