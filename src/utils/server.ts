import express, { Application } from "express";
import users from "../user/user.routes";
import { run } from "../db";

export const createServer = async () => {
  const app: Application = express();

  app.use(express.json());
  app.use("/users", users);

  await run();
  return app;
};
