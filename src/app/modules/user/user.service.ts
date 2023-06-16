import mongoose from "mongoose";
import config from "../../../config/index";
import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import httpStatus from "http-status";

// Create User
// const createUser = async (user: IUser): Promise<IUser | null> => {
//   let newUserAllData = null;
//   // start session
//   const session = await mongoose.startSession();
//   try {
//     // start transaction
//     session.startTransaction();

//     // newUser will return an array
//     const newUser = await User.create([user], { session });

//     if (!newUser?.length) {
//       throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create user");
//     }

//     user.user = newUser[0]._id;

//     // newUser will return an array
//     const newUser = await User.create([user], { session });

//     if (!newUser.length) {
//       throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create user");
//     }

//     newUserAllData = newUser[0];

//     // commit transaction and end session
//     await session.commitTransaction();
//     await session.endSession();
//   } catch (error) {
//     // abort transaction and end session
//     await session.abortTransaction();
//     await session.endSession();
//     throw new ApiError(httpStatus.BAD_REQUEST, "User creation failed");
//   }

//   if (newUserAllData) {
//     // Populate user data with related faculty information
//     newUserAllData = await User.findOne({ id: newUserAllData?.id }).populate({
//       path: "user",
//     });
//   }

//   return newUserAllData;
// };

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload);
  return result;
};

export const UserService = {
  createUser,
};
