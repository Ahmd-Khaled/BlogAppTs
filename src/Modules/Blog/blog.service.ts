import { NextFunction, Request, Response } from "express";
import DatabaseService from "../../DB/dbService";
import BlogModel from "../../DB/Models/blog.model";
import { IAuthRequest, IBlog } from "../../Types/types";
import { IAddBlogDTO } from "./dtos/blog.dto";


class BlogService {
  private Blog = new DatabaseService<IBlog>(BlogModel);

  addBlog = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const {
      title,
      content
    }: IAddBlogDTO = req.body

    const blog = await this.Blog.create({
      title,
      content,
      author: req.user._id,
    })

    res.status(201).json({
      status: true,
      message: "Blog created successfully",
      data: blog,
    })
  }

  getBlogs = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const blogs = await this.Blog.find({
      author: req.user._id,
    })

    res.status(200).json({
      status: true,
      message: "Blogs fetched successfully",
      data: blogs,
    })
  }
}

export default new BlogService();