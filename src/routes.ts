import {Router} from 'express';
import userRouter from './routes/user.routes';

const router: Router = Router();

router.use('', userRouter);

export default router;
