import { z } from "zod";
import { Breed, Category, Location } from "./cow.constants";

// Define the Zod schema for creating a cow
const createCowZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "name is required",
    }),
    age: z.number({
      required_error: "age is required",
    }),
    price: z.number({
      required_error: "price is required",
    }),
    weight: z.number({
      required_error: "weight is required",
    }),
    location: z.enum([...Location] as [string, ...string[]], {
      required_error: "location is required",
    }),
    breed: z.enum([...Breed] as [string, ...string[]], {
      required_error: "breed is required",
    }),
    category: z.enum([...Category] as [string, ...string[]], {
      required_error: "category is required",
    }),
    seller: z.string({
      required_error: "seller is required",
    }),
  }),
});

export const CowValidation = {
  createCowZodSchema,
};
