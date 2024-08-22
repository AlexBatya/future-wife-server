import { Request, Response } from 'express';
import UserServices from '../services/user.services';

class UserController {
  // Получение всех пользователей
  public async getAllUsers(req: Request, res: Response): Promise<void> {
		try {
			const users = await UserServices.getAllUsers();
			res.status(200).json(users);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Ошибка при получении списка пользователей' });
		}
  }

  // Получение пользователя по логину
  public async getUserByLogin(req: Request, res: Response): Promise<void> {
		const { login } = req.params;
		try {
			const user = await UserServices.getUserByLogin(login);
			if (user) {
				res.status(200).json(user);
			} else {
				res.status(404).json({ message: `Пользователь с логином ${login} не найден` });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: `Ошибка при получении пользователя с логином ${login}` });
		}
  }

  // Добавление нового пользователя
  public async addUser(req: Request, res: Response): Promise<void> {
		const userData = req.body;
		try {
			const newUser = await UserServices.addUser(userData);
			res.status(201).json(newUser);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Ошибка при добавлении нового пользователя' });
		}
  }

  // Удаление пользователя
  public async deleteUser(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		try {
			const success = await UserServices.deleteUser(Number(id));
			if (success) {
				res.status(200).json({ message: 'Пользователь успешно удален' });
			} else {
				res.status(404).json({ message: `Пользователь с идентификатором ${id} не найден` });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: `Ошибка при удалении пользователя с идентификатором ${id}` });
		}
  }

  // Обновление данных пользователя
  public async updateUser(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const updatedData = req.body;
		try {
			const success = await UserServices.updateUser(Number(id), updatedData);
			if (success) {
				res.status(200).json({ message: 'Пользователь успешно обновлен' });
			} else {
				res.status(404).json({ message: `Пользователь с идентификатором ${id} не найден` });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: `Ошибка при обновлении данных пользователя с идентификатором ${id}` });
		}
  }
}

export default new UserController();

