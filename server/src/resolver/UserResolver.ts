import { UserInputError } from "apollo-server-express";
import User from "../model/User";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import { ContextType, PostTypes, UserType } from "../types";
import Comment from "../model/Comment";
import { createToken, sendRefreshToken } from "../util/auth";
import verifyToken from "../middleware/auth";

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
    user: async (_, args: UserType, context: ContextType) => {
      const user = verifyToken(context);
      if (!user) return null;
      return await User.findById(args.id);
    },
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
      const res: any = await newUser.save();

      //"._doc" is mongodb object to get all data
      return {
        ...res._doc,
        id: res._id,
        accessToken: createToken("accessToken", res),
      };
    },
    login: async (_, args: UserType, context: ContextType) => {
      const { username, password } = args;
      const newUser: any = await User.findOne<UserType>({ username });
      //check username exist
      if (!newUser) return new UserInputError("Username or password incorrect");
      //check password
      const userPassword = await argon2.verify(newUser.password, password);
      if (!userPassword)
        return new UserInputError("Username or password incorrect");

      //return token
      sendRefreshToken(context.res, newUser);

      //"._doc" is mongodb object to get all data
      return {
        ...newUser._doc,
        id: newUser._id,
        accessToken: createToken("accessToken", newUser),
      };
    },
    logout: async (_, __, context: ContextType) => {
      const user = verifyToken(context);
      const existingUser = await User.findOne({ _id: user.id });
      if (!existingUser) {
        return false;
      } else {
        await existingUser.save();
        context.res.clearCookie(
          process.env.REFRESH_TOKEN_COOKIE_NAME as string,
          {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path: "/refresh-token",
          }
        );
        return true;
      }
    },
  },
};

export default userResolvers;
