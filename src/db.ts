import { Sequelize } from 'sequelize';
import config from './config/localhost.json';
import color from 'colors';

// Настраиваем подключение к базе данных с использованием mysql2
const db = new Sequelize(config.MySQL.database, config.MySQL.user, config.MySQL.password, {
  host: config.MySQL.host,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  dialectOptions: {
    charset: 'utf8mb4',
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
});

// Тестируем подключение к базе данных
(async () => {
  try {
    await db.authenticate();
    console.log(color.green('Успешное подключение к БД'));
  } catch (error) {
    console.error(color.red('Коннект с БД не произведён. Скорее всего вы ввели неверные данные авторизации'));
    // Удаляем process.exit(1), чтобы сервер продолжал работу даже при ошибке подключения
  }
})();

export default db;

