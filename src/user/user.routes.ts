import { Router } from "express";
import {
  getUserListController,
  getUser,
  registerUser,
} from "./user.controllers";
import { IdInParams } from "./idInParams";
import { User } from "./user.model";
import validateRequest from "../middleware/validateRequest";

const router = Router();

router.get("/userList", getUserListController);

router.get("/:id", validateRequest({ params: IdInParams }), getUser);

router.post("/register", validateRequest({ body: User }), registerUser);
router.post("/login");
export default router;
