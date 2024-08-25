import { Router } from 'express';
import GuestController from '../controllers/guest.controllers';
import auth from '../middleware/auth.middleware';

const router = Router();

router.get('/', auth, GuestController.getAllGuests);
router.get('/name/:full_name', auth, GuestController.getGuestByName);  // Поиск по имени
router.get('/id/:id', auth, GuestController.getGuestById);  // Поиск по ID
router.post('/', auth, GuestController.addGuest);
router.delete('/:full_name', auth, GuestController.deleteGuest);
router.put('/:full_name', auth, GuestController.updateGuest);

export default router;

