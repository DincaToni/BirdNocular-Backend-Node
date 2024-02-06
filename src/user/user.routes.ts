import { NextFunction, Request, Response, Router } from "express";
import { getUserListController, getUser } from "./user.controllers";
import { IdInParams } from "./idInParams";
import { AnyZodObject, ZodError } from "zod";
import validateRequest from "../middleware/validateRequest";

const router = Router();

router.get("/userList", getUserListController);

router.get("/:id", validateRequest({ params: IdInParams }), getUser);
export default router;
