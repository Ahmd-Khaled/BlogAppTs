import { Router } from "express";
import { asyncHandler } from "../../Middlewares/error-handler.middleware";
import blogService from "./blog.service";
import { authMiddleware } from "../../Middlewares/auth.middleware";

const router: Router = Router();

router.post("/add-blog", authMiddleware(), asyncHandler(blogService.addBlog));

/**
 * @swagger
 * /blog/all-blogs:
 *   get:
 *     summary: Get all blogs
 *     description: Returns a list of blogs
 *     tags:
 *       - Blog
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: A list of blogs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string 
 *                   author:
 *                     type: string
 */
router.get("/all-blogs", authMiddleware(), asyncHandler(blogService.getBlogs));

export default router;