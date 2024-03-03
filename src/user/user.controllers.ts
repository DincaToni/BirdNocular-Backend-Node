import { NextFunction, Request, Response } from "express";
import { User } from "./user.model";
import { client } from "../db";
import { ObjectId } from "mongodb";
import { Collection } from "mongodb";
import bcrypt from "bcrypt";

const getUserListController = async (
  req: Request,
  res: Response<User[]>,
  next: NextFunction
) => {
  try {
    await client.connect();
    const db: Collection<User> = client
      .db("Development")
      .collection<User>("USERS");
    const result = await db.find().toArray();
    res.json(result).status(200);
  } catch (err) {
    next(err);
  }
};

const getUser = async (
  req: Request,
  res: Response<User>,
  next: NextFunction
) => {
  try {
    await client.connect();
    const db: Collection<User> = client
      .db("Development")
      .collection<User>("USERS");
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

const registerUser = async (
  req: Request<{}, User>,
  res: Response,
  next: NextFunction
) => {
  try {
    const body: User = await User.parse(req.body);

    //password hashing
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(body.password, salt, (err, hash) => {
        body.password = hash;
      });
    });

    await client.connect();
    const db: Collection<User> = client
      .db("Development")
      .collection<User>("USERS");

    const user = await db.insertOne(body);
    res.json(user).status(200);
  } catch (err) {
    next(err);
  } finally {
    console.log("DB connection closed!");
  }
};

export { getUserListController, getUser, registerUser };
