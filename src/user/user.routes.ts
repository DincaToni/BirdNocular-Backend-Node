import {Router} from 'express';
import { getUserListController } from './user.controllers';
const router = Router();

router.get('/userList', getUserListController)

export default router;