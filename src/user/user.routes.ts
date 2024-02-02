import { NextFunction, Request, Response, Router } from "express";
import { getUserListController, getUser } from "./user.controllers";
import { IdInParams } from "./idInParams";
import { AnyZodObject, ZodError } from "zod";

interface RequestValidators {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}

const validateRequest = (validators: RequestValidators) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (validators.params) {
        req.params = await validators.params.parseAsync(req.params);
      }
      if (validators.body) {
        req.body = await validators.body.parseAsync(req.body);
      }
      if (validators.query) {
        req.query = await validators.query.parseAsync(req.query);
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(422);
      }
      next(error);
    }
  };
};

const router = Router();

router.get("/userList", getUserListController);

router.get("/:id", validateRequest({ params: IdInParams }), getUser);
export default router;
