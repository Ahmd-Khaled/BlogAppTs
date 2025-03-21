import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "./error-handler.middleware";
import { verifyToken } from "../Utils/token/token";
import DatabaseService from "../DB/dbService";
import { IAuthRequest, IUser } from "../Types/types";
import UserModel from "../DB/Models/user.model";

export const authMiddleware = () => {
  const User = new DatabaseService<IUser>(UserModel);

  return asyncHandler(
    async (req: IAuthRequest, res: Response, next: NextFunction) => {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const decodedToken = verifyToken(
        authorization,
        process.env.TOKEN_SECRET as string
      );

      const user = await User.findById(decodedToken.id);
      if (!user) {
        return res.status(401).json({ message: "Please login first" });
      }

      req.user = user;
      next();
    }
  );
};
