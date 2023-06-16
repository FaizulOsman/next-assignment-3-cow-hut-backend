import express from "express";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import validateRequest from "../../middlewares/validateRequest";
const router = express.Router();

// Routes
router.post(
  "/auth/signup",
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

router.get("/users/:id", UserController.getSingleUser);

router.get("/users", UserController.getAllUsers);

export const UserRoutes = router;
