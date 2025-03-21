import { Schema, model, models } from "mongoose";
import { IUser, UserRole } from "../../Types/types";

// Define a schema for the "User" model

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: UserRole, default: UserRole.User },
}, {
  timestamps: true
});

// Create the "User" model using the schema
const UserModel = models.User || model<IUser>("User", userSchema);

export default UserModel;