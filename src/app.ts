import express from 'express';
import cors from 'cors';
import color from 'colors';
import bodyParser from 'body-parser';
import db from './db';
import config from './config/localhost.json';

import router from './routes';

// Создаем экземпляр приложения Express
const app = express();
const PORT = config.server.PORT;

// Настраиваем middleware
app.use(cors());
app.use(bodyParser.json());

// Асинхронная функция для синхронизации базы данных и запуска сервера
async function startServer() {
  try {
		// Синхронизация моделей с базой данных
		await db.sync();
		console.log(color.green('Database synced'));
  } catch (err) {
		// Логируем ошибку, но не останавливаем сервер
		console.error(color.red('Ошибка при синхронизации базы данных:'), err);
  }

  // Запуск сервера после попытки синхронизации
	app.use('/api', router);
  app.listen(PORT, () => {
		console.log(color.green(`Сервер запущен на http://localhost:${PORT}, батеньки...`));
  });
}

// Вызов функции для запуска сервера
startServer();

