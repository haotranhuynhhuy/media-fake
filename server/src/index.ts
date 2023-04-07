import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import typeDefs from "./schema/schema";
import resolvers from "./resolver";
import connectDB from "./connectDB/connectDB";
import { PubSub } from "graphql-subscriptions";
import cookiesParser from "cookie-parser";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core/dist/plugin/landingPage/graphqlPlayground";
import verifyToken from "./middleware/auth";

dotenv.config();
const app = express();
app.use(cors());
app.use(cookiesParser());

const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  context: ({ req, res }) => {
    return { req, res, pubsub };
  },
});

const graphQL = async () => {
  await server.start();
  server.applyMiddleware({ app });
};
graphQL();

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(4000, () =>
      console.log(
        `Server start at port http://localhost:4000${server.graphqlPath}`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
startServer();
