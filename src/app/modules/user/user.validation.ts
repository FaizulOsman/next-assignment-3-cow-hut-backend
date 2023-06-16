import { z } from "zod";

// Define the Zod schema for creating a user
const createUserZodSchema = z.object({
  body: z.object({
    password: z
      .string({
        required_error: "Password is required",
      })
      .optional(),
    role: z.string({
      required_error: "Role (buyer/user) is required",
    }),
    name: z.object({
      firstName: z.string({
        required_error: "First name is required",
      }),
      middleName: z.string().optional(),
      lastName: z.string({
        required_error: "Last name is required",
      }),
    }),
    phoneNumber: z.number({
      required_error: "Contact No is required",
    }),
    address: z.string({
      required_error: "Address is required",
    }),
    budget: z.string({
      required_error: "Budget is required",
    }),
    income: z.string({
      required_error: "Income is required",
    }),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
