import verifyToken from "../middleware/auth";

const postResolvers = {
  Query: {},
  Mutation: {
    createPost: async (_, args, context) => {
      const user = verifyToken(context);
      console.log(user);
    },
  },
};
export default postResolvers;
