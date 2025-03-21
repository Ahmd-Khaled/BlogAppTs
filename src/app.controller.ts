import { Application, json, NextFunction, Request, Response } from "express";
import { globalErrorHandler } from "./Middlewares/error-handler.middleware";
import authRouter from "./Modules/Auth/auth.controller"
import blogRouter from "./Modules/Blog/blog.controller"
import connectDB from "./DB/connection";

export const bootstrap = async (app: Application) => {
    app.use(json()); // parsing body

    await connectDB()

    app.get("/", (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json("Hello, World!");
    });

    // Routes ----------------------
    app.use("/auth", authRouter)
    app.use("/blog", blogRouter)

    // Not Found Handler
    app.use("*", (req: Request, res: Response, next: NextFunction) => {
        res.status(404).json("Not Found Route!");
    })

    // Global Error Handler
    app.use(globalErrorHandler);

}