import { Request } from "express";
import { Types } from "mongoose";

export interface IError {
    message: string;
    status?: number;
    cause?: number;
    stack?: string;
}


export enum UserRole {
    User = "user",
    Admin = "admin"
}

export interface IUser {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

export interface IBlog {
    _id: Types.ObjectId;
    title: string;
    content: string;
    author: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface IAuthRequest extends Request {
    user: IUser;
}