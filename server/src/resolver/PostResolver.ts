import verifyToken from "../middleware/auth";
import Post from "../model/Post";
import { PostTypes } from "../types";

const postResolvers = {
  Query: {
    posts: async () => {
      const posts = await Post.find().sort({ createAt: -1 });
      return posts;
    },
    post: async (_, args, context) => {
      const user = verifyToken(context);
      console.log(user);
      console.log(args.id);
    },
  },
  Mutation: {
    createPost: async (_, args: PostTypes, context) => {
      const user = verifyToken(context);

      const { content, images, userId } = args;
      const newPost = new Post({
        content,
        images,
        user: userId || user.id,
      });
      const post = await newPost.save();
      context.pubsub.publish("NEW_POST", {
        newPost: post,
      });
      return newPost;
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
