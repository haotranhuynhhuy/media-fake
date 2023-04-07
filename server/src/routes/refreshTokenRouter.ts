import { Secret, verify } from "jsonwebtoken";
import express from "express";
import User from "../model/User";
import { createToken, sendRefreshToken } from "../util/auth";
import { UserType } from "../types";

const router = express.Router();

router.get("/", async (req, res) => {
  const refreshToken =
    req.cookies[process.env.REFRESH_TOKEN_COOKIE_NAME as string];

  if (!refreshToken) return res.sendStatus(401);
  try {
    const decodeUser: any = verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as Secret
    );

    const existingUser: UserType = await User.findOne({ _id: decodeUser.id });
    if (!existingUser) return res.sendStatus(401);

    sendRefreshToken(res, existingUser);

    return res.json({
      success: true,
      accessToken: createToken("accessToken", existingUser),
    });
  } catch (error) {
    console.log("ERROR REFRESHING TOKEN", error);
    return res.sendStatus(403);
  }
});
export default router;
