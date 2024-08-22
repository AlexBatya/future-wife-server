import {Router} from 'express';
import userRouter from './routes/user.routes';
import guestRouter from './routes/guest.routes';

const router: Router = Router();

// router.use('', userRouter);

router.use('/guests', guestRouter);

export default router;
