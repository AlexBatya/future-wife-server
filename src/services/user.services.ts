import User from '../models/user.models';  // Импорт модели User

class UserServices {
  // Получение всех пользователей
  public async getAllUsers() {
		try {
			const users = await User.findAll();
			return users;
		} catch (error) {
			console.error(error);
			throw new Error('Ошибка при выборке всех пользователей');
		}
  }

  // Получение пользователя по логину
  public async getUserByLogin(login: string) {
		try {
			const user = await User.findOne({ where: { login } });
			return user;
		} catch (error) {
			console.error(error);
			throw new Error(`Ошибка при выборе пользователя с логином ${login}`);
		}
  }

  // Добавление нового пользователя
  public async addUser(userData: any) {
		try {
			const newUser = await User.create(userData);
			return newUser;
		} catch (error) {
			console.error(error);
			throw new Error('Ошибка при добавлении нового пользователя');
		}
  }

  // Удаление пользователя
  public async deleteUser(id: number) {
		try {
			const result = await User.destroy({ where: { id } });
			return result > 0;
		} catch (error) {
			console.error(error);
			throw new Error(`Ошибка при удалении пользователя с идентификатором ${id}`);
		}
  }

  // Обновление данных пользователя
  public async updateUser(id: number, updatedData: any) {
		try {
			const result = await User.update(updatedData, { where: { id } });
			return result[0] > 0;
		} catch (error) {
			console.error(error);
			throw new Error(`Ошибка при обновлении данных пользователя с идентификатором ${id}`);
		}
  }
}

export default new UserServices();
