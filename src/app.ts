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

// Подключение роутов
app.use('/api', router);

export default app;

export const syncDatabase = async (): Promise<void> => {
  try {
		await db.sync();
		console.log(color.green('База данных подключена'));
  } 
	catch (err) {
		console.error(color.red('Ошибка при синхронизации базы данных:'), err);
  }
};

