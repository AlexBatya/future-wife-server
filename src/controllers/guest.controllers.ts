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
		const { full_name } = req.params;
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

  // Получить строку по ID гостя
  public async getGuestById(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		try {
			const guest = await GuestService.getGuestById(Number(id));
			if (guest) {
				res.status(200).json(guest);
			} else {
				res.status(404).json({ message: 'Гость не найден' });
			}
		} catch (error) {
			res.status(500).json({ error: `Ошибка при выборе гостя с ID ${id}: ` + error.message });
		}
  }

  // Добавление гостя
  public async addGuest(req: Request, res: Response): Promise<void> {
		const guestData = req.body;
		console.log(guestData);
		try {
			if (req.body) {
				const newGuest = await GuestService.addGuest(guestData);
				res.status(201).json(newGuest);
			} else {
				res.status(404).json("Данные по новому пользователю не отправлены");
			}
		} catch (error) {
			res.status(500).json({ error: 'Ошибка при добавлении нового гостя: ' + error.message });
		}
  }

  // Удаление гостя
  public async deleteGuest(req: Request, res: Response): Promise<void> {
		const { full_name } = req.params;
		try {
			const success = await GuestService.deleteGuest(String(full_name));
			if (success) {
				res.status(200).json({ message: 'Гость успешно удален' });
			} else {
				res.status(404).json({ message: 'Гость не найден' });
			}
		} catch (error) {
			res.status(500).json({ error: `Ошибка при удалении гостя с идентификатором ${full_name}: ` + error.message });
		}
  }

  // Редактирование информации о госте
  public async updateGuest(req: Request, res: Response): Promise<void> {
		const { full_name } = req.params;
		const updatedData = req.body;
		try {
			const success = await GuestService.updateGuest(String(full_name), updatedData);
			if (success) {
				res.status(200).json({ message: 'Информация о госте успешно обновлена' });
			} else {
				res.status(404).json({ message: 'Гость не найден' });
			}
		} catch (error) {
			res.status(500).json({ error: `Ошибка при обновлении гостя с идентификатором ${full_name}: ` + error.message });
		}
  }
}

export default new GuestController();

