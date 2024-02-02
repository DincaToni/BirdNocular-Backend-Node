import { Collection } from 'mongodb';
import {z} from 'zod';

const User = z.object({
    firstName: z.string().min(1).max(64),
    lastName: z.string().min(1).max(64),
    email: z.string().email().min(10).max(255),
    userName: z.string().min(3).max(64),
    password: z.string(),
    isDeleted: z.boolean().default(false)
});

type User = z.infer<typeof User>;

export default User;