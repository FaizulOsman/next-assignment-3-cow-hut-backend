import express from "express";
import { UserRoutes } from "../modules/user/user.route";

const router = express.Router();

// Define routes
const moduleRoutes = [
  {
    path: "/",
    route: UserRoutes,
  },
];

// Mapping routes
moduleRoutes?.forEach((route) => router.use(route?.path, route?.route));

export default router;
