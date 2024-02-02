import { Request, Response } from "express";
import User from "./user.model";
import { client } from "../db";
//import { Collection } from 'mongodb';

const getUserListController = async (
  req: Request,
  res: any /*: Response<User[]>*/
) => {
  try {
    await client.connect();
    const db = client.db("Development").collection("USERS");
    const result = await db.find().toArray();
    res.json(result).status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export { getUserListController };
