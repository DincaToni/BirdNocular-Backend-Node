import {Router, Request, Response} from 'express';
import User from './user.model'

const router = Router();

router.get('/userList', (req: Request, res: Response<User[]>) => {
    res.json([{
        firstName:'Toni',
        lastName:'Test',
        email:'toni_test@test.com',
        userName:'Toni.Test01',
        password:'123Test123',
        isDeleted: false
    }])
})

export default router;