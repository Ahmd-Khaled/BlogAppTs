import { UserRole } from "../../../Types/types";

export interface ISignUpDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole
}


export interface ILoginDTO {
  email: string;
  password: string;
}