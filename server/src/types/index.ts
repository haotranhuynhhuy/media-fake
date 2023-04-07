import { Request, Response } from "express";

export interface UserType {
  id: string;
  fullname: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
  role: string;
  gender: string;
  address: string;
  mobile: string;
  story: string;
  website: string;
  followers: Array<UserType>;
  following: Array<UserType>;
  saved: Array<UserType>;
}

export interface PostTypes {
  id: string;
  content: string;
  images: Array<ImageTypes>;
  user: UserType;
  userId: string;
  likes: Object[];
  comments: CommentType[];
}

export interface ImageTypes {
  url: string;
}
export interface CommentType {
  id: string;
  postId: string;
  content: string;
  tag: string[];
  reply: string;
  postUserId: string;
}

export interface ContextType {
  req: Request;
  res: Response;
}
