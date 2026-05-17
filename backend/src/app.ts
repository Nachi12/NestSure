import express from "express";

import cors from "cors";

import helmet from "helmet";

import morgan from "morgan";

import cookieParser from "cookie-parser";

import routes from "./routes";

const app = express();

/* ============================================
   MIDDLEWARE
============================================ */

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(cookieParser());

/* ============================================
   ROUTES
============================================ */

app.use("/api", routes);

/* ============================================
   HEALTH CHECK
============================================ */

app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "NestSure API Running",
  });
});

export default app;