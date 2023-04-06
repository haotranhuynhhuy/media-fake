import verifyToken from "../middleware/auth";
import Comment from "../model/Comment";
import Post from "../model/Post";
import { CommentType } from "../types";

const commentResolver = {
  Mutation: {
    createComment: async (_, args: CommentType, context) => {
      try {
        const { content, postUserId, postId } = args;
        const user = verifyToken(context);

        const newComment = new Comment({
          user: user.id,
          content,
          postId,
          postUserId,
        });
        //find a post and push comment "id" to the post
        await Post.findByIdAndUpdate(
          { _id: postId },
          {
            $push: { comments: newComment._id },
          },
          { new: true }
        );
        await newComment.save();
        return newComment;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
export default commentResolver;
