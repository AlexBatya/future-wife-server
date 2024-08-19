import { Request, Response, NextFunction } from 'express';
import config from '../config/localhost.json'; // Импортируем конфигурацию

// Извлекаем секретный ключ для верификации токенов из конфигурационного файла
const SECRET_KEY = config.server.token; // Предположим, что токен хранится в config.server.token

// Middleware для проверки токена
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Извлекаем токен из заголовка Authorization
  const token = req.headers.authorization;

	if(token==SECRET_KEY){
		next();
	}

	else if(!token){
		return res
			.status(401)
			.json({ 
				message: 'Запрос не содержит токен' 
			});
	}
	else{
		// Если токен недействителен или истек
		return res
			.status(401)
			.json({ 
				message: 'Токен не действителен' 
			});
	}
  
};

export default authMiddleware;

