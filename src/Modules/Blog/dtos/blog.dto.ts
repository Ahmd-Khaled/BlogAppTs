import { Types } from "mongoose";

export interface IAddBlogDTO {
  title: string;
  content: string;
  author: Types.ObjectId;
}