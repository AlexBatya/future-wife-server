const app = require('./build/app').default; // Используем require для импорта
const { syncDatabase } = require('./build/app'); // Импорт функции синхронизации
const config = require('./build/config/localhost.json');
const color = require('colors');

const PORT = config.server.PORT;

syncDatabase().then(() => {
	  app.listen(PORT, () => {
		  		console.log(color.green(`Сервер запущен на http://localhost:${PORT}, батеньки...`));
					  });
});

