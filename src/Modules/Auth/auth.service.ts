import { NextFunction, Request, Response } from "express";
import DatabaseService from "../../DB/dbService";
import { IUser } from "../../Types/types";
import UserModel from "../../DB/Models/user.model";
import { ILoginDTO, ISignUpDTO } from "./dtos/auth.dto";
import { compareSync, hashSync } from "bcrypt";
import { generateToken } from "../../Utils/token/token";

// DTO Data Transfere Object

class AuthService {
  private User = new DatabaseService<IUser>(UserModel)

  signup = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password, role }: ISignUpDTO = req.body;

    const user = await this.User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: 'Email already exists' })
    }

    const hashedPassword: string = hashSync(password, 10);

    const newUser = await this.User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    })

    res.status(201).json({
      status: true,
      message: 'User created successfully',
      data: newUser
    });
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password }: ILoginDTO = req.body;

    const user = await this.User.findOne({ email });
    if (!user || !compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    // Generate Token
    const token = generateToken({ id: user._id }, process.env.TOKEN_SECRET as string, { expiresIn: "1d" })

    res.status(201).json({
      status: true,
      message: 'User login successfully',
      token: token
    });
  }
}

export default new AuthService();