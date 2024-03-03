import { Collection, WithId } from "mongodb";
import { z } from "zod";

const User = z.object({
  firstName: z.string().min(1).max(64),
  lastName: z.string().min(1).max(64),
  email: z
    .string({ required_error: "An email adress is required" })
    .email()
    .min(10)
    .max(255),
  userName: z.string().min(3).max(64),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/,
      "Password must have minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
    ),
  isDeleted: z.boolean().default(false),
});

type User = z.infer<typeof User>;
export { User };
