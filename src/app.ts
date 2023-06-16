import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import router from "./app/routes";

const app: Application = express();

// using cors
app.use(cors());

// middleware/parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
  next();
});

// Application Routes
app.use("/api/v1/", router);

// Handle Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
