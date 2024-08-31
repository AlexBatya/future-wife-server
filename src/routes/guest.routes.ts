import { Router } from 'express';
import GuestController from '../controllers/guest.controllers';
import auth from '../middleware/auth.middleware';

const router = Router();

router.get('/', auth, GuestController.getAllGuests);
router.get('/name/:full_name', auth, GuestController.getGuestByName);
router.get('/id/:id', auth, GuestController.getGuestById);
router.post('/', auth, GuestController.addGuest);
router.delete('/:full_name', auth, GuestController.deleteGuest);
router.delete('/id/:id', auth, GuestController.deleteGuestById);  // Удаление гостя по ID
router.delete('/id_guest/:id_guest', auth, GuestController.deleteGuestByIdGuest);  // Удаление гостя по ID гостя (id_guest)
router.get('/id_guest/:id_guest', auth, GuestController.getGuestsByIdGuest); // Получение всех гостей с указанным id_guest
router.put('/:full_name', auth, GuestController.updateGuest);

export default router;
