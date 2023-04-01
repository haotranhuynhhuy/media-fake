import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./connectDB/connectDB.js";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema/schema.js";
import resolvers from "./resolver/resolver.js";

dotenv.config();
const app = express();

app.use(cors());
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await server.start();
server.applyMiddleware({ app });
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
