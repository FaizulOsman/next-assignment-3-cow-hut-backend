import { z } from "zod";

// Define the Zod schema for creating a user
const createUserZodSchema = z.object({
  body: z.object({
    password: z
      .string({
        required_error: "Password is required",
      })
      .optional(),
    role: z
      .string({
        required_error: "Role (buyer/user) is required",
      })
      .optional(),
    name: z
      .object({
        firstName: z
          .string({
            required_error: "First name is required",
          })
          .optional(),
        middleName: z.string().optional(),
        lastName: z
          .string({
            required_error: "Last name is required",
          })
          .optional(),
      })
      .optional(),
    phoneNumber: z
      .number({
        required_error: "Contact No is required",
      })
      .optional(),
    address: z
      .string({
        required_error: "Address is required",
      })
      .optional(),
    budget: z
      .number({
        required_error: "Budget is required",
      })
      .optional(),
    income: z
      .number({
        required_error: "Income is required",
      })
      .optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
