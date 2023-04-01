import { UserInputError } from "apollo-server-express";
import User from "../model/User.js";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import { UserType } from "../types/index.js";

const userResolvers = {
  Query: {
    user: async (parent, args) => await User.findById(args.id),
  },
  Mutation: {
    register: async (_, args) => {
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
      const accessToken = jwt.sign(
        {
          userId: newUser._id,
        },
        process.env.ACCESS_TOKEN_SECRET
      );
      return {
        code: 200,
        user: newUser,
        message: "User registration successful",
        accessToken,
      };
    },
    login: async (_, args) => {
      const { username, password } = args;
      const newUser = await User.findOne<UserType>({ username });
      //check username exist
      if (!newUser) return new UserInputError("Username or password incorrect");
      //check password
      const userPassword = await argon2.verify(newUser.password, password);
      if (!userPassword)
        return new UserInputError("Username or password incorrect");

      //return token
      const accessToken = jwt.sign(
        {
          userId: newUser._id,
        },
        process.env.ACCESS_TOKEN_SECRET
      );

      return {
        code: 200,
        user: newUser,
        message: "User login successfully",
        accessToken,
      };
    },
  },
};

export default userResolvers;
