import mongoose from "mongoose";
import verifyToken from "../middleware/auth";
import Comment from "../model/Comment";
import Post from "../model/Post";
import { CommentType, ContextType } from "../types";

const commentResolver = {
  Mutation: {
    createComment: async (_, args: CommentType, context: ContextType) => {
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
    deleteComment: async (_, args: CommentType, context: ContextType) => {
      const user = verifyToken(context);
      if (!user) return null;
      try {
        const comment = await Comment.findOneAndDelete({ _id: args.id });
        console.log(comment);
        if (comment) {
          await Post.findOneAndUpdate(
            { _id: comment.postId },
            {
              $pull: { comments: comment.id },
            }
          );
          return "Comment is deleted successfully";
        }
        throw new Error("Post not found");
      } catch (error) {
        throw new Error(error);
      }
    },
    likeComment: async (_, args: CommentType, context: ContextType) => {
      try {
        const user = verifyToken(context);
        const comment = await Comment.findById(args.id);
        if (comment) {
          if (comment.likes.find((like) => like._id.toString() === user.id)) {
            //unlike
            comment.likes = comment.likes.filter(
              (like) => like._id.toString() !== user.id
            );
          } else {
            //like post
            comment.likes.push(new mongoose.Types.ObjectId(user.id));
          }
        }
        await comment.save();
        return "Your action successfully";
      } catch (error) {
        throw new Error(error);
      }
    },
    updateComment: async (_, args: CommentType, context: ContextType) => {
      try {
        const user = verifyToken(context);
        const { id, content } = args;
        const comment = await Comment.findOneAndUpdate(
          { _id: id, user: user.id },
          { content }
        );
        return comment;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
export default commentResolver;
