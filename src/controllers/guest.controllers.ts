// src/controllers/GuestController.ts
import { Request, Response } from 'express';
import GuestService from '../services/guest.services';

class GuestController {
  // Получение всех данных из таблицы
  public async getAllGuests(req: Request, res: Response): Promise<void> {
		try {
			const guests = await GuestService.getAllGuests();
			res.status(200).json(guests);
		} catch (error) {
			res.status(500).json({ error: 'Ошибка при выборке всех гостей: ' + error.message });
		}
  }

  // Получить строку по ФИО гостя
  public async getGuestByName(req: Request, res: Response): Promise<void> {
		const { full_name } = req.params; // изменяем параметр на full_name
		try {
			const guest = await GuestService.getGuestByName(full_name);
			if (guest) {
				res.status(200).json(guest);
			} else {
				res.status(404).json({ message: 'Гость не найден' });
			}
		} catch (error) {
			res.status(500).json({ error: `Ошибка при выборе гостя с именем ${full_name}: ` + error.message });
		}
  }

  // Добавление гостя
  public async addGuest(req: Request, res: Response): Promise<void> {
		const guestData = req.body;
		try {
			const newGuest = await GuestService.addGuest(guestData);
			res.status(201).json(newGuest);
		} catch (error) {
			res.status(500).json({ error: 'Ошибка при добавлении нового гостя: ' + error.message });
		}
  }

  // Удаление гостя
  public async deleteGuest(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		try {
			const success = await GuestService.deleteGuest(Number(id));
			if (success) {
				res.status(200).json({ message: 'Гость успешно удален' });
			} else {
				res.status(404).json({ message: 'Гость не найден' });
			}
		} catch (error) {
			res.status(500).json({ error: `Ошибка при удалении гостя с идентификатором ${id}: ` + error.message });
		}
  }

  // Редактирование информации о госте
  public async updateGuest(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const updatedData = req.body;
		try {
			const success = await GuestService.updateGuest(Number(id), updatedData);
			if (success) {
				res.status(200).json({ message: 'Информация о госте успешно обновлена' });
			} else {
				res.status(404).json({ message: 'Гость не найден' });
			}
		} catch (error) {
			res.status(500).json({ error: `Ошибка при обновлении гостя с идентификатором ${id}: ` + error.message });
		}
  }
}

export default new GuestController();

