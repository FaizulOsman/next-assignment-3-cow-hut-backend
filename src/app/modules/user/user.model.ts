import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";
import { role } from "./user.constants";

// User Schema
export const userSchema = new Schema<IUser>(
  {
    password: { type: String, required: true },
    role: { type: String, enum: role, required: true },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        middleName: {
          type: String,
          required: false,
        },
      },
      required: true,
    },
    phoneNumber: { type: Number, unique: true, required: true },
    address: { type: String, required: true },
    budget: { type: String, required: true },
    income: { type: String, required: true },
  },
  {
    timestamps: true, // It will add createdAt & updatedAt fields
    toJSON: {
      // If we use it, we will get _id as id
      virtuals: true,
    },
  }
);

export const User = model<IUser, UserModel>("User", userSchema);
