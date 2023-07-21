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
import refreshTokenRouter from "./routes/refreshTokenRouter";
import { createServer } from "http";

dotenv.config();

const main = async () => {
  await connectDB(process.env.MONGO_DB);

  const app = express();
  app.use(cors());
  app.use(cookiesParser());
  app.use("/refresh-token", refreshTokenRouter);

  const pubsub = new PubSub();

  const httpServer = createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    context: ({ req, res }) => {
      return { req, res, pubsub };
    },
  });

  await server.start();
  server.applyMiddleware({
    app,
    // cors: { origin: "http://localhost:3000", credentials: true },
  });

  const PORT = process.env.PORT || 4000;

  await new Promise((resolve) =>
    httpServer.listen({ port: PORT }, resolve as () => void)
  );

  // Typically, http://localhost:4000/graphql
  console.log(
    `SERVER STARTED ON PORT ${PORT}. GRAPHQL ENDPOINT ON http://localhost:${PORT}${server.graphqlPath}`
  );
};
main().catch((error) => console.log("ERROR STARTING SERVER: ", error));
