import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
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
    accessToken: String
  }

  type Post {
    id: ID!
    user: User
    content: String
    images: [Image]
    likes: [Like]
    comments: [Comment]
    likeCount: Int
    commentCount: Int
  }

  type Comment {
    id: ID!
    user: User
    content: String
  }

  type Like {
    id: ID!
    user: User
  }

  type Image {
    id: ID!
    user: User
    content: String
  }

  type Query {
    user(id: ID!): User
    posts: [Post]
    post(id: ID!): Post
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User!
    login(username: String!, password: String!): User!
    createPost(content: String!, images: String, userId: ID!): Post!
    logout: Boolean

    # ===> "id" here is "postId" <==== #
    deletePost(id: ID!): String
    likePost(id: ID!): Post!

    createComment(postId: ID!, content: String!, postUserId: ID!): Post!
    deleteComment(id: ID!): String
    likeComment(id: ID!): String
    updateComment(id: ID!, content: String!): Comment!
  }

  type Subscription {
    newPost: Post!
  }
`;
export default typeDefs;
