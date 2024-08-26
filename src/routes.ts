import {Router} from 'express';
import userRouter from './routes/user.routes';
import guestRouter from './routes/guest.routes';
import familyRouter from './routes/family.routes';

const router: Router = Router();

// router.use('', userRouter);

router.use('/guests', guestRouter);
router.use('/family', familyRouter);

export default router;
