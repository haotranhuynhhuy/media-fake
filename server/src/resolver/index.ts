import userResolvers from "./UserResolver";
import postResolvers from "./PostResolver";

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
  },
};
export default resolvers;
