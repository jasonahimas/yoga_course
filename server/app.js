
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export {app};