import { Model, Types } from "mongoose";

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IUser = {
  password: string;
  role: "seller" | "buyer";
  name: UserName; //embedded object
  phoneNumber: number;
  address: string;
  budget: string;
  income: string;
};

// User Model
export type UserModel = Model<IUser, Record<string, unknown>>;

export type IUserFilters = {
  searchTerm?: string;
};
