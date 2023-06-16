import { SortOrder } from "mongoose";
import config from "../../../config/index";
import ApiError from "../../../errors/ApiError";
import { ICow, ICowFilters } from "./cow.interface";
import { Cow } from "./cow.model";
import httpStatus from "http-status";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { cowFilterableFields, cowSearchableFields } from "./cow.constants";

// Create Cow
const createCow = async (payload: ICow): Promise<ICow | null> => {
  const result = await Cow.create(payload);
  return result;
};

// Get All Cows (can also filter)
const getAllCows = async (
  filters: ICowFilters,
  paginationOptions: IPaginationOptions
): Promise<any> => {
  // Try not to use any
  const { searchTerm, ...filtersData } = filters;

  const andConditions: any = []; // Try not to use any

  if (searchTerm) {
    andConditions?.push({
      $or: cowSearchableFields?.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortCondition: "" | { [key: string]: SortOrder } = sortBy &&
    sortOrder && { [sortBy]: sortOrder };

  const whereCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const result = await Cow.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await Cow.countDocuments(whereCondition);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// Get Single Cow
const getSingleCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findOne({ _id: id });
  return result;
};

const updateCow = async (
  id: string,
  payload: Partial<ICow>
): Promise<ICow | null> => {
  const isExist = await Cow.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Cow not found");
  }

  const { name, ...CowData } = payload;

  const updateCowData: Partial<ICow> = { ...CowData };

  // dynamically handling nested fields
  if (name && Object.keys(name)?.length > 0) {
    Object.keys(name).forEach((key) => {
      const nameKey = `name.${key}` as keyof Partial<ICow>; // `name.firstName`
      (updateCowData as any)[nameKey] = name[key as keyof typeof name];
    });
  }

  const result = await Cow.findOneAndUpdate({ _id: id }, updateCowData, {
    new: true,
  });
  return result;
};

// Delete Cow
const deleteCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findByIdAndDelete({ _id: id });
  return result;
};

export const CowService = {
  createCow,
  getAllCows,
  getSingleCow,
  updateCow,
  deleteCow,
};
