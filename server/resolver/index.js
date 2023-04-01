import userResolvers from "./UserResolver.js";

const resolvers = {
  Query: {
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};
export default resolvers;
