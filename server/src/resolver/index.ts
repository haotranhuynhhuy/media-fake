import userResolvers from "./UserResolver";
import postResolvers from "./PostResolver";
import commentResolver from "./CommentResolver";

const resolvers = {
  Post: {
    ...userResolvers.Post,
  },
  Like: {
    ...userResolvers.Like,
  },
  Comment: {
    ...userResolvers.Comment,
  },
  Query: {
    ...userResolvers.Query,
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
    ...commentResolver.Mutation,
  },
};
export default resolvers;
