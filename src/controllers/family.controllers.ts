// src/controllers/FamilyController.ts
import { Request, Response } from 'express';
import FamilyService from '../services/family.services';

class FamilyController {
  // Получение всех данных из таблицы family
  public async getAllFamilies(req: Request, res: Response): Promise<void> {
		try {
			const families = await FamilyService.getAllFamilies();
			res.status(200).json(families);
		} catch (error) {
			res.status(500).json({ error: 'Ошибка при выборке всех семей: ' + error.message });
		}
  }

  // Получение записи по названию семьи
  public async getFamilyByName(req: Request, res: Response): Promise<void> {
		const { family_name } = req.params;
		try {
			const family = await FamilyService.getFamilyByName(family_name);
			if (family) {
				res.status(200).json(family);
			} else {
				res.status(404).json({ message: 'Семья не найдена' });
			}
		} catch (error) {
			res.status(500).json({ error: `Ошибка при выборе семьи с именем ${family_name}: ` + error.message });
		}
  }

  // Получение записи по ID
  public async getFamilyById(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		try {
			const family = await FamilyService.getFamilyById(Number(id));
			if (family) {
				res.status(200).json(family);
			} else {
				res.status(404).json({ message: 'Семья не найдена' });
			}
		} catch (error) {
			res.status(500).json({ error: `Ошибка при выборе семьи с ID ${id}: ` + error.message });
		}
  }

  // Добавление новой семьи
  public async addFamily(req: Request, res: Response): Promise<void> {
		const familyData = req.body;
		try {
			if (familyData) {
				const newFamily = await FamilyService.addFamily(familyData);
				res.status(201).json(newFamily);
			} else {
				res.status(400).json({ message: 'Данные о новой семье не отправлены' });
			}
		} catch (error) {
			res.status(500).json({ error: 'Ошибка при добавлении новой семьи: ' + error.message });
		}
  }

  // Удаление записи о семье
  public async deleteFamily(req: Request, res: Response): Promise<void> {
		const { family_name } = req.params;
		try {
			const success = await FamilyService.deleteFamily(family_name);
			if (success) {
				res.status(200).json({ message: 'Семья успешно удалена' });
			} else {
				res.status(404).json({ message: 'Семья не найдена' });
			}
		} catch (error) {
			res.status(500).json({ error: `Ошибка при удалении семьи с именем ${family_name}: ` + error.message });
		}
  }

  // Редактирование информации о семье
  public async updateFamily(req: Request, res: Response): Promise<void> {
		const { family_name } = req.params;
		const updatedData = req.body;
		try {
			const success = await FamilyService.updateFamily(family_name, updatedData);
			if (success) {
				res.status(200).json({ message: 'Информация о семье успешно обновлена' });
			} else {
				res.status(404).json({ message: 'Семья не найдена' });
			}
		} catch (error) {
			res.status(500).json({ error: `Ошибка при обновлении семьи с именем ${family_name}: ` + error.message });
		}
  }
}

export default new FamilyController();
