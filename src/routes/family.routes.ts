// src/routes/family.routes.ts
import { Router } from 'express';
import FamilyController from '../controllers/family.controllers';
import auth from '../middleware/auth.middleware';

const router = Router();

router.get('/', auth, FamilyController.getAllFamilies);  // Получение всех семей
router.get('/name/:family_name', auth, FamilyController.getFamilyByName);  // Поиск семьи по имени
router.get('/id/:id', auth, FamilyController.getFamilyById);  // Поиск семьи по ID
router.post('/', auth, FamilyController.addFamily);  // Добавление новой семьи
router.delete('/:family_name', auth, FamilyController.deleteFamily);  // Удаление семьи по имени
router.put('/:family_name', auth, FamilyController.updateFamily);  // Обновление информации о семье

export default router;
