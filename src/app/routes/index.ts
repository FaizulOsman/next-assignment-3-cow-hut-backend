import express from "express";
import { UserRoutes } from "../modules/user/user.route";
// import { SellerRoutes } from "../modules/seller/seller.route";
// import { BuyerRoutes } from "../modules/buyer/buyer.route";

const router = express.Router();
// Define routes
const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  //   {
  //     path: "/seller",
  //     route: SellerRoutes,
  //   },
  //   {
  //     path: "/buyer",
  //     route: BuyerRoutes,
  //   },
];
// Mapping routes
moduleRoutes?.forEach((route) => router.use(route?.path, route?.route));

export default router;
