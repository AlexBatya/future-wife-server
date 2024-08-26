// src/routes/guest.routes.ts
import { Router } from 'express';
import GuestController from '../controllers/guest.controllers';
import auth from '../middleware/auth.middleware';

const router = Router();

router.get('/', auth, GuestController.getAllGuests);  // Получение всех гостей
router.get('/name/:full_name', auth, GuestController.getGuestByName);  // Поиск гостя по ФИО
router.get('/id/:id', auth, GuestController.getGuestById);  // Поиск гостя по ID
router.post('/', auth, GuestController.addGuest);  // Добавление нового гостя
router.delete('/:full_name', auth, GuestController.deleteGuest);  // Удаление гостя по ФИО
router.put('/:full_name', auth, GuestController.updateGuest);  // Обновление информации о госте

export default router;

