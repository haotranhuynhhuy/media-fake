import { AuthenticationError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import { ContextType, UserType } from "../types";

const verifyToken = (context: ContextType) => {
  // context header
  const authHeader = context.req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  //Check access token
  if (!token) {
    throw new AuthenticationError(
      "Authentication token must be 'Bearer [token]"
    );
  }

  //All good
  try {
    const user: UserType = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return user;
  } catch (error) {
    throw new AuthenticationError("Authorization header must be provided");
  }
};
export default verifyToken;
