import { Request, Response } from 'express';
import UserServices from '../services/user.services';
import logger from '../logger';

class UserController {
  // Получение всех пользователей
  public async getAllUsers(req: Request, res: Response): Promise<void> {
    logger.info(`Запрос на получение всех пользователей - ${req.method} ${req.originalUrl}`);
    try {
      const users = await UserServices.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      logger.error(`Ошибка при получении списка пользователей: ${error.message}`);
      res.status(500).json({ message: 'Ошибка при получении списка пользователей' });
    }
  }

  // Получение пользователя по логину
  public async getUserByLogin(req: Request, res: Response): Promise<void> {
    const { login } = req.params;
    logger.info(`Запрос на получение пользователя по логину ${login} - ${req.method} ${req.originalUrl}`);
    try {
      const user = await UserServices.getUserByLogin(login);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: `Пользователь с логином ${login} не найден` });
      }
    } catch (error) {
      logger.error(`Ошибка при получении пользователя с логином ${login}: ${error.message}`);
      res.status(500).json({ message: `Ошибка при получении пользователя с логином ${login}` });
    }
  }

  // Получение пользователя по идентификатору
  public async getUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    logger.info(`Запрос на получение пользователя по ID ${id} - ${req.method} ${req.originalUrl}`);
    try {
      const user = await UserServices.getUserById(Number(id));
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: `Пользователь с ID ${id} не найден` });
      }
    } catch (error) {
      logger.error(`Ошибка при получении пользователя с ID ${id}: ${error.message}`);
      res.status(500).json({ message: `Ошибка при получении пользователя с ID ${id}` });
    }
  }

  // Добавление нового пользователя
  public async addUser(req: Request, res: Response): Promise<void> {
    const userData = req.body;
    logger.info(`Запрос на добавление пользователя - ${req.method} ${req.originalUrl}`);
    try {
      const newUser = await UserServices.addUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      logger.error(`Ошибка при добавлении нового пользователя: ${error.message}`);
      res.status(500).json({ message: 'Ошибка при добавлении нового пользователя' });
    }
  }

  // Удаление пользователя по ID
  public async deleteUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    logger.info(`Запрос на удаление пользователя по ID ${id} - ${req.method} ${req.originalUrl}`);
    try {
      const success = await UserServices.deleteUserById(Number(id));
      if (success) {
        res.status(200).json({ message: 'Пользователь успешно удален' });
      } else {
        res.status(404).json({ message: `Пользователь с идентификатором ${id} не найден` });
      }
    } catch (error) {
      logger.error(`Ошибка при удалении пользователя с ID ${id}: ${error.message}`);
      res.status(500).json({ message: `Ошибка при удалении пользователя с ID ${id}` });
    }
  }

  // Удаление пользователя по логину
  public async deleteUserByLogin(req: Request, res: Response): Promise<void> {
    const { login } = req.params;
    logger.info(`Запрос на удаление пользователя по логину ${login} - ${req.method} ${req.originalUrl}`);
    try {
      const success = await UserServices.deleteUserByLogin(login);
      if (success) {
        res.status(200).json({ message: 'Пользователь успешно удален' });
      } else {
        res.status(404).json({ message: `Пользователь с логином ${login} не найден` });
      }
    } catch (error) {
      logger.error(`Ошибка при удалении пользователя с логином ${login}: ${error.message}`);
      res.status(500).json({ message: `Ошибка при удалении пользователя с логином ${login}` });
    }
  }

  // Обновление данных пользователя по ID
  public async updateUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updatedData = req.body;
    logger.info(`Запрос на обновление данных пользователя с ID ${id} - ${req.method} ${req.originalUrl}`);
    try {
      const success = await UserServices.updateUserById(Number(id), updatedData);
      if (success) {
        res.status(200).json({ message: 'Пользователь успешно обновлен' });
      } else {
        res.status(404).json({ message: `Пользователь с идентификатором ${id} не найден` });
      }
    } catch (error) {
      logger.error(`Ошибка при обновлении данных пользователя с ID ${id}: ${error.message}`);
      res.status(500).json({ message: `Ошибка при обновлении данных пользователя с ID ${id}` });
    }
  }

  // Обновление данных пользователя по логину
  public async updateUserByLogin(req: Request, res: Response): Promise<void> {
    const { login } = req.params;
    const updatedData = req.body;
    logger.info(`Запрос на обновление данных пользователя с логином ${login} - ${req.method} ${req.originalUrl}`);
    try {
      const success = await UserServices.updateUserByLogin(login, updatedData);
      if (success) {
        res.status(200).json({ message: 'Пользователь успешно обновлен' });
      } else {
        res.status(404).json({ message: `Пользователь с логином ${login} не найден` });
      }
    } catch (error) {
      logger.error(`Ошибка при обновлении данных пользователя с логином ${login}: ${error.message}`);
      res.status(500).json({ message: `Ошибка при обновлении данных пользователя с логином ${login}` });
    }
  }
}

export default new UserController();

