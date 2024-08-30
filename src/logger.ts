import winston from 'winston';
import moment from 'moment-timezone';

// Функция для получения текущего времени в формате Владивостока
const getCurrentTimeInVladivostok = () => moment().tz('Asia/Vladivostok').format('YYYY-MM-DD HH:mm:ss');

// Создаем форматтер для winston
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: getCurrentTimeInVladivostok }), // Добавляем текущую метку времени
  winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
  })
);

// Создаем экземпляр логгера
const logger = winston.createLogger({
  level: 'info',
  format: logFormat,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

export default logger;

