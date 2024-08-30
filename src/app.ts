import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db';
import config from './config/localhost.json';
import router from './routes';
import logger from './logger';

// Создаем экземпляр приложения Express
const app = express();
const PORT = config.server.PORT;

// Настраиваем middleware
app.use(cors());
app.use(bodyParser.json());

// Логирование всех запросов и ответов
app.use((req, res, next) => {
  logger.info(`Запрос - ${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
  res.on('finish', () => {
    logger.info(`Ответ - ${res.statusCode} ${res.statusMessage} - ${new Date().toISOString()}`);
  });
  next();
});

// Подключение роутов
app.use('/api', router);

export default app;

export const syncDatabase = async (): Promise<void> => {
  try {
		await db.sync();
		logger.info('База данных подключена');
  } catch (err) {
		logger.error('Ошибка при синхронизации базы данных: ' + err.message);
  }
};

