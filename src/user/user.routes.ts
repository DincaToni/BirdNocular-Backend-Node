import { Router } from "express";
import { getUserListController, getUser } from "./user.controllers";
const router = Router();

router.get("/userList", getUserListController);

router.get("/:id", getUser);
export default router;
