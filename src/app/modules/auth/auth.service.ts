import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

// Create User
const createAuth = async (payload: IUser): Promise<IUser | null> => {
  const isExist = await User.findOne({ phoneNumber: payload.phoneNumber });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, "Phone Number Already Exist");
  }

  const result = await User.create(payload);
  return result;
};

export const AuthService = {
  createAuth,
};
