import { Request, Response } from 'express';
import FamilyService from '../services/family.services';
import logger from '../logger';

class FamilyController {
  public async getAllFamilies(req: Request, res: Response): Promise<void> {
    logger.info(`Запрос на получение всех семей - ${req.method} ${req.originalUrl}`);
    try {
      const families = await FamilyService.getAllFamilies();
      res.status(200).json(families);
    } catch (error) {
      logger.error(`Ошибка при выборке всех семей: ${error.message}`);
      res.status(500).json({ error: 'Ошибка при выборке всех семей: ' + error.message });
    }
  }

  public async getFamilyByName(req: Request, res: Response): Promise<void> {
    const { family_name } = req.params;
    logger.info(`Запрос на получение семьи по имени ${family_name} - ${req.method} ${req.originalUrl}`);
    try {
      const family = await FamilyService.getFamilyByName(family_name);
      if (family) {
        res.status(200).json(family);
      } else {
        res.status(404).json({ message: 'Семья не найдена' });
      }
    } catch (error) {
      logger.error(`Ошибка при выборе семьи с именем ${family_name}: ${error.message}`);
      res.status(500).json({ error: `Ошибка при выборе семьи с именем ${family_name}: ` + error.message });
    }
  }

  public async getFamilyById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    logger.info(`Запрос на получение семьи по ID ${id} - ${req.method} ${req.originalUrl}`);
    try {
      const family = await FamilyService.getFamilyById(Number(id));
      if (family) {
        res.status(200).json(family);
      } else {
        res.status(404).json({ message: 'Семья не найдена' });
      }
    } catch (error) {
      logger.error(`Ошибка при выборе семьи с ID ${id}: ${error.message}`);
      res.status(500).json({ error: `Ошибка при выборе семьи с ID ${id}: ` + error.message });
    }
  }

  public async addFamily(req: Request, res: Response): Promise<void> {
    const familyData = req.body;
    logger.info(`Запрос на добавление новой семьи - ${req.method} ${req.originalUrl}`);
    try {
      if (!familyData.family_name) {
        res.status(400).json({ message: 'Название семьи не указано' });
        return;
      }

      const existingFamily = await FamilyService.getFamilyByName(familyData.family_name);
      if (existingFamily) {
        res.status(409).json({ message: 'Семья с таким именем уже существует' });
        return;
      }

      const newFamily = await FamilyService.addFamily(familyData);
      res.status(201).json(newFamily);
    } catch (error) {
      logger.error(`Ошибка при добавлении новой семьи: ${error.message}`);
      res.status(500).json({ error: 'Ошибка при добавлении новой семьи: ' + error.message });
    }
  }

  public async deleteFamily(req: Request, res: Response): Promise<void> {
    const { family_name, id } = req.params;
    logger.info(`Запрос на удаление семьи - ${req.method} ${req.originalUrl}`);
    try {
      if (id) {
        const success = await FamilyService.deleteFamilyById(Number(id));
        if (success) {
          res.status(200).json({ message: 'Семья успешно удалена по ID' });
        } else {
          res.status(404).json({ message: 'Семья с указанным ID не найдена' });
        }
      } else if (family_name) {
        const success = await FamilyService.deleteFamily(family_name);
        if (success) {
          res.status(200).json({ message: 'Семья успешно удалена по имени' });
        } else {
          res.status(404).json({ message: 'Семья с указанным именем не найдена' });
        }
      } else {
        res.status(400).json({ message: 'Необходимо указать имя семьи или ID' });
      }
    } catch (error) {
      logger.error(`Ошибка при удалении семьи: ${error.message}`);
      res.status(500).json({ error: 'Ошибка при удалении семьи: ' + error.message });
    }
  }

  public async updateFamily(req: Request, res: Response): Promise<void> {
    const { family_name, id } = req.params;
    const updatedData = req.body;
    logger.info(`Запрос на обновление информации о семье - ${req.method} ${req.originalUrl}`);
    try {
      if (id) {
        const success = await FamilyService.updateFamilyById(Number(id), updatedData);
        if (success) {
          res.status(200).json({ message: 'Информация о семье успешно обновлена по ID' });
        } else {
          res.status(404).json({ message: 'Семья с указанным ID не найдена' });
        }
      } else if (family_name) {
        const success = await FamilyService.updateFamily(family_name, updatedData);
        if (success) {
          res.status(200).json({ message: 'Информация о семье успешно обновлена по имени' });
        } else {
          res.status(404).json({ message: 'Семья с указанным именем не найдена' });
        }
      } else {
        res.status(400).json({ message: 'Необходимо указать имя семьи или ID' });
      }
    } catch (error) {
      logger.error(`Ошибка при обновлении семьи: ${error.message}`);
      res.status(500).json({ error: 'Ошибка при обновлении семьи: ' + error.message });
    }
  }
}

export default new FamilyController();

