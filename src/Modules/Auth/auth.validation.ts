import joi from "joi";
import { UserRole } from "../../Types/types";

// Record <string, ObjectSchema>

export const signupSchema = {
  body: joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    // confirmPassword: joi.string().valid(joi.ref('password')).required(),
    role: joi.string().valid(...Object.values(UserRole)),
  }),
  // params: joi.object({}),
  // query: joi.object({}),
  // headers: joi.object({}),
}