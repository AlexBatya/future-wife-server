import { Router } from 'express';
import GuestController from '../controllers/guest.controllers';
import auth from '../middleware/auth.middleware'

const router = Router();

router.get('/', auth, GuestController.getAllGuests);
router.get('/:full_name', auth, GuestController.getGuestByName);
router.post('/', auth, GuestController.addGuest);
router.delete('/:id', auth, GuestController.deleteGuest);
router.put('/:id', auth, GuestController.updateGuest);

export default router;
