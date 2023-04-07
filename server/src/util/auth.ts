import { Response } from "express";
import { UserType } from "../types";
import { Secret } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export const createToken = (
  type: "accessToken" | "refreshToken",
  user: UserType
) => {
  return jwt.sign(
    {
      id: user.id,
    },
    type === "accessToken"
      ? (process.env.ACCESS_TOKEN_SECRET as Secret)
      : (process.env.REFRESH_TOKEN_SECRET as Secret),
    {
      expiresIn: type === "accessToken" ? "15m" : "60m",
    }
  );
};

export const sendRefreshToken = (res: Response, user: UserType) => {
  res.cookie(
    process.env.REFRESH_TOKEN_COOKIE_NAME as string,
    createToken("refreshToken", user),
    {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/refresh-token",
    }
  );
};
