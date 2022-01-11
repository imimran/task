import express, { NextFunction, Request, Response } from "express";
import cors from 'cors'
import errorHandler from "./middlewares/errorHandler";
import { createConnectionAndInitialize } from "./models/db";
import logger from "./logger";
import {MONGO_URL} from "./config"
import  {router}  from "./routes";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

createConnectionAndInitialize(MONGO_URL)
  .then()
  .catch((err) => {
    logger.error(err);
    process.exit(1);
  });

process.on("unhandledRejection", (error) => {
  throw error;
});


app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ error: false, msg: "Hello Imran" });
});

app.use("/api/v1", router);

app.use(errorHandler);
export default app;