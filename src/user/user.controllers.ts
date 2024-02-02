import { NextFunction, Request, Response } from "express";
import { UserWithId } from "./user.model";
import { client } from "../db";
import { ObjectId } from "mongodb";
import { Collection } from "mongodb";

const getUserListController = async (
  req: Request,
  res: any /*Response<UserWithId[]>*/
) => {
  try {
    await client.connect();
    const db: Collection = client.db("Development").collection("USERS");
    const result = await db.find().toArray();
    res.json(result).status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await client.connect();
    const db: Collection = client.db("Development").collection("USERS");
    const result = await db.findOne({ _id: new ObjectId(req.params.id) });
    if (!result) {
      res.status(404);
      throw new Error("User not found.");
    }
    res.json(result).status(200);
  } catch (err) {
    next(err);
  } finally {
    console.log("DB connection closed!");
  }
};

export { getUserListController, getUser };
