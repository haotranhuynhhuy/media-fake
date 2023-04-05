import verifyToken from "../middleware/auth";
import Post from "../model/Post";
import User from "../model/User";
import { PostTypes, UserType } from "../types";

const postResolvers = {
  Query: {
    posts: async () => {
      try {
        const posts = await Post.find().sort({ createAt: -1 });
        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
    post: async (_, args: PostTypes, ___) => {
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
  },
  Subscription: {
    newPost: {
      subscribe: async (_, __, context) =>
        await context.pubsub.asyncIterator("NEW_POST"),
    },
  },
};
export default postResolvers;
