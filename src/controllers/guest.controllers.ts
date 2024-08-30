import { Request, Response } from 'express';
import GuestService from '../services/guest.services';
import logger from '../logger';

class GuestController {
  public async getAllGuests(req: Request, res: Response): Promise<void> {
		logger.info(`Запрос на получение всех гостей - ${req.method} ${req.originalUrl}`);
		try {
			const guests = await GuestService.getAllGuests();
			res.status(200).json(guests);
		} catch (error) {
			logger.error(`Ошибка при выборке всех гостей: ${error.message}`);
			res.status(500).json({ error: 'Ошибка при выборке всех гостей: ' + error.message });
		}
  }

  public async getGuestByName(req: Request, res: Response): Promise<void> {
		const { full_name } = req.params;
		logger.info(`Запрос на получение гостя по имени ${full_name} - ${req.method} ${req.originalUrl}`);
		try {
			const guest = await GuestService.getGuestByName(full_name);
			if (guest) {
				res.status(200).json(guest);
			} else {
				res.status(404).json({ message: 'Гость не найден' });
			}
		} catch (error) {
			logger.error(`Ошибка при выборе гостя с именем ${full_name}: ${error.message}`);
			res.status(500).json({ error: `Ошибка при выборе гостя с именем ${full_name}: ` + error.message });
		}
  }

  public async getGuestById(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		logger.info(`Запрос на получение гостя по ID ${id} - ${req.method} ${req.originalUrl}`);
		try {
			const guest = await GuestService.getGuestById(Number(id));
			if (guest) {
				res.status(200).json(guest);
			} else {
				res.status(404).json({ message: 'Гость не найден' });
			}
		} catch (error) {
			logger.error(`Ошибка при выборе гостя с ID ${id}: ${error.message}`);
			res.status(500).json({ error: `Ошибка при выборе гостя с ID ${id}: ` + error.message });
		}
  }

  public async addGuest(req: Request, res: Response): Promise<void> {
    const guestData = req.body;
    logger.info(`Запрос на добавление гостя - ${req.method} ${req.originalUrl}`);
    try {
      if (!guestData.full_name) {
        res.status(400).json({ message: 'ФИО гостя не указано' });
        return;
      }

      const existingGuest = await GuestService.getGuestByName(guestData.full_name);
      if (existingGuest) {
        res.status(409).json({ message: 'Гость с таким именем уже существует' });
        return;
      }

      const newGuest = await GuestService.addGuest(guestData);
      res.status(201).json(newGuest);
    } catch (error) {
      logger.error(`Ошибка при добавлении нового гостя: ${error.message}`);
      res.status(500).json({ error: 'Ошибка при добавлении нового гостя: ' + error.message });
    }
  }

  public async deleteGuest(req: Request, res: Response): Promise<void> {
    const { full_name } = req.params;
    logger.info(`Запрос на удаление гостя по имени ${full_name} - ${req.method} ${req.originalUrl}`);
    try {
      const existingGuest = await GuestService.getGuestByName(full_name);
      if (!existingGuest) {
        res.status(404).json({ message: 'Гость не найден' });
        return;
      }

      const success = await GuestService.deleteGuest(full_name);
      res.status(200).json({ message: 'Гость успешно удален' });
    } catch (error) {
      logger.error(`Ошибка при удалении гостя с именем ${full_name}: ${error.message}`);
      res.status(500).json({ error: `Ошибка при удалении гостя с именем ${full_name}: ` + error.message });
    }
  }

  public async deleteGuestById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    logger.info(`Запрос на удаление гостя по ID ${id} - ${req.method} ${req.originalUrl}`);
    try {
      const success = await GuestService.deleteGuestById(Number(id));
      if (success) {
        res.status(200).json({ message: 'Гость успешно удален' });
      } else {
        res.status(404).json({ message: 'Гость не найден' });
      }
    } catch (error) {
      logger.error(`Ошибка при удалении гостя с ID ${id}: ${error.message}`);
      res.status(500).json({ error: `Ошибка при удалении гостя с ID ${id}: ` + error.message });
    }
  }

  public async deleteGuestByIdGuest(req: Request, res: Response): Promise<void> {
    const { id_guest } = req.params;
    logger.info(`Запрос на удаление гостя по ID гостя ${id_guest} - ${req.method} ${req.originalUrl}`);
    try {
      const success = await GuestService.deleteGuestByIdGuest(Number(id_guest));
      if (success) {
        res.status(200).json({ message: 'Гость успешно удален' });
      } else {
        res.status(404).json({ message: 'Гость не найден' });
      }
    } catch (error) {
      logger.error(`Ошибка при удалении гостя с ID гостя ${id_guest}: ${error.message}`);
      res.status(500).json({ error: `Ошибка при удалении гостя с ID гостя ${id_guest}: ` + error.message });
    }
  }

  public async updateGuest(req: Request, res: Response): Promise<void> {
    const { full_name } = req.params;
    const updatedData = req.body;
    logger.info(`Запрос на обновление информации о госте с именем ${full_name} - ${req.method} ${req.originalUrl}`);
    try {
      const existingGuest = await GuestService.getGuestByName(full_name);
      if (!existingGuest) {
        res.status(404).json({ message: 'Гость не найден' });
        return;
      }

      const success = await GuestService.updateGuest(full_name, updatedData);
      res.status(200).json({ message: 'Информация о госте успешно обновлена' });
    } catch (error) {
      logger.error(`Ошибка при обновлении гостя с именем ${full_name}: ${error.message}`);
      res.status(500).json({ error: `Ошибка при обновлении гостя с именем ${full_name}: ` + error.message });
    }
  }
}

export default new GuestController();

