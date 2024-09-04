import { Router } from 'express';
import UserController from '../controllers/user.controllers';
import auth from '../middleware/auth.middleware'

const router = Router();

// Получение всех пользователей
router.get('/', auth, UserController.getAllUsers);

// Получение пользователя по ID
router.get('/id/:id', auth, UserController.getUserById);

// Получение пользователя по логину
router.get('/login/:login', auth, UserController.getUserByLogin);

// Добавление нового пользователя
router.post('/', auth, UserController.addUser);

// Удаление пользователя по ID
router.delete('/id/:id', auth, UserController.deleteUserById);

// Удаление пользователя по логину
router.delete('/login/:login', auth, UserController.deleteUserByLogin);

// Обновление данных пользователя по ID
router.put('/id/:id', auth, UserController.updateUserById);

// Обновление данных пользователя по логину
router.put('/login/:login', auth, UserController.updateUserByLogin);

export default router;
