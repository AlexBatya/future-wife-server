import {Router} from 'express'
import userControllers from '../controllers/user.controllers';
import auth from '../middleware/auth.middleware'

const router: Router = Router();

router.get('/', auth, userControllers.test)

export default router;
