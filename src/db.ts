import { Sequelize } from 'sequelize';
import config from './config/localhost.json'; // Импортируем конфигурацию напрямую из JSON-файла
import color from 'colors';

// Настраиваем подключение к базе данных с использованием mysql2
const db = new Sequelize(config.MySQL.database, config.MySQL.user, config.MySQL.password, {
  host: config.MySQL.host,
  dialect: 'mysql', // Используем 'mysql', потому что mysql2 полностью совместим с mysql диалектом Sequelize
  dialectModule: require('mysql2'), // Указываем, что использовать mysql2 в качестве модуля
});

// Тестируем подключение к базе данных
(async () => {
  try {
		await db.authenticate();
		console.log(color.green('Успешное подключение к БД'));
  } catch (error) {
		console.error(color.red('Коннект с БД не произведён:'), error);
		// Удаляем process.exit(1), чтобы сервер продолжал работу даже при ошибке подключения
  }
})();

export default db;

