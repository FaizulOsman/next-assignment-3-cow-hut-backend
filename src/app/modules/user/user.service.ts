import mongoose from "mongoose";
import config from "../../../config/index";
import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import httpStatus from "http-status";

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload);
  return result;
};

export const UserService = {
  createUser,
};
