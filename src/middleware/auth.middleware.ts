import { Request, Response, NextFunction } from 'express';
import config from '../config/localhost.json'; // Импортируем конфигурацию
import logger from '../logger';

// Извлекаем секретный ключ для верификации токенов из конфигурационного файла
const SECRET_KEY = config.server.token; // Предположим, что токен хранится в config.server.token

// Middleware для проверки токена
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Извлекаем токен из заголовка Authorization
  const token = req.headers.authorization;

  if (token === SECRET_KEY) {
		logger.info(`Проверка токена прошла успешно - ${req.method} ${req.originalUrl}`);
		next();
  } else if (!token) {
		logger.warn(`Запрос не содержит токен - ${req.method} ${req.originalUrl}`);
		return res
			.status(401)
			.json({ message: 'Запрос не содержит токен' });
  } else {
		// Если токен недействителен или истек
		logger.warn(`Токен не действителен - ${req.method} ${req.originalUrl}`);
		return res
			.status(401)
			.json({ message: 'Токен не действителен' });
  }
};

export default authMiddleware;

