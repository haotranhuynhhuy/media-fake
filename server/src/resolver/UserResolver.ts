import { UserInputError } from "apollo-server-express";
import User from "../model/User";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import { PostTypes, UserType } from "../types";
import Comment from "../model/Comment";

const userResolvers = {
  //Query 'user' in 'Post' parent
  Post: {
    user: async (parent: PostTypes) => await User.findById(parent.userId),
    likeCount: async (parent: PostTypes) => await parent.likes.length,
    commentCount: async (parent: PostTypes) => await parent.comments.length,
  },
  Like: {
    user: async (parent: String) => {
      const user = await User.findById(parent);
      return user;
    },
  },
  Comment: {
    user: async (parent) => {
      const comment = await Comment.findById(parent);
      const user = await User.findById(comment.user);
      return user;
    },
  },
  Query: {
    user: async (_, args: UserType) => await User.findById(args.id),
  },
  Mutation: {
    register: async (_, args: UserType) => {
      const { username, password, email } = args;
      //check username or email exist
      const user = await User.findOne({ username });
      const userEmail = await User.findOne({ email });
      if (user) return new UserInputError("Username is taken");
      if (userEmail) return new UserInputError("Email is taken");

      //All Goods
      const hashedPassword = await argon2.hash(password);
      const newUser = new User({
        username,
        password: hashedPassword,
        email,
      });
      await newUser.save();

      //return token
      const token = jwt.sign(
        {
          id: newUser.id,
        },
        process.env.ACCESS_TOKEN_SECRET
      );
      return {
        code: 200,
        user: newUser,
        message: "User registration successful",
        token,
      };
    },
    login: async (_, args: UserType) => {
      const { username, password } = args;
      const newUser = await User.findOne<UserType>({ username });
      //check username exist
      if (!newUser) return new UserInputError("Username or password incorrect");
      //check password
      const userPassword = await argon2.verify(newUser.password, password);
      if (!userPassword)
        return new UserInputError("Username or password incorrect");

      //return token
      const token = jwt.sign(
        {
          id: newUser.id,
        },
        process.env.ACCESS_TOKEN_SECRET
      );

      return {
        code: 200,
        user: newUser,
        message: "User login successfully",
        token,
      };
    },
  },
};

export default userResolvers;
