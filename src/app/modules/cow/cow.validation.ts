import { z } from "zod";

// Define the Zod schema for creating a cow
const createCowZodSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .optional(),
    age: z
      .number({
        required_error: "Age is required",
      })
      .optional(),
    price: z
      .number({
        required_error: "Price No is required",
      })
      .optional(),
    location: z
      .string({
        required_error: "Location is required",
      })
      .optional(),
    breed: z
      .string({
        required_error: "Breed is required",
      })
      .optional(),
    weight: z
      .number({
        required_error: "Weight is required",
      })
      .optional(),
    label: z
      .string({
        required_error: "Label is required",
      })
      .optional(),
    category: z
      .string({
        required_error: "Category is required",
      })
      .optional(),
    seller: z
      .string({
        required_error: "Seller is required",
      })
      .optional(),
  }),
});

export const CowValidation = {
  createCowZodSchema,
};
