import verifyToken from "../middleware/auth";
import Post from "../model/Post";
import { ContextType, PostTypes } from "../types";
import mongoose from "mongoose";

const postResolvers = {
  Query: {
    posts: async (_, __, context: ContextType) => {
      const user = verifyToken(context);
      if (!user) return null;
      try {
        const posts = await Post.find().sort({ createAt: -1 });
        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
    post: async (_, args: PostTypes, context: ContextType) => {
      const user = verifyToken(context);
      if (!user) return null;
      try {
        const post = await Post.findById(args.id);
        if (post) {
          return post;
        } else {
          throw new Error("Post not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createPost: async (_, args: PostTypes, context) => {
      const user = verifyToken(context);

      const { content, images, userId } = args;
      const newPost = new Post({
        content,
        images,
        userId: userId || user.id,
      });
      const post = await newPost.save();
      context.pubsub.publish("NEW_POST", {
        newPost: post,
      });
      return newPost;
    },
    deletePost: async (_, args: PostTypes, context) => {
      try {
        const user = verifyToken(context);
        const post = await Post.findById(args.id);
        // toString() to get string in the new ObjectId on DB
        if (user.id === post.userId.toString()) {
          await Post.findByIdAndDelete(post.id);
          return "Post is deleted successfully";
        } else {
          throw new Error("Post not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    likePost: async (_, args: PostTypes, context) => {
      try {
        const user = verifyToken(context);
        const post = await Post.findById(args.id);
        if (post) {
          if (post.likes.find((like) => like._id.toString() === user.id)) {
            //unlike the post when id of user is exist
            post.likes = post.likes.filter(
              (like) => like._id.toString() !== user.id
            );
          } else {
            //like the post when id user is not exist
            post.likes.push(new mongoose.Types.ObjectId(user.id));
          }
        }
        await post.save();
        return post;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Subscription: {
    newPost: {
      subscribe: async (_, __, context) =>
        await context.pubsub.asyncIterator("NEW_POST"),
    },
  },
};
export default postResolvers;
