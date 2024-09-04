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

  // Получение пользователя по идентификатору
  public async getUserById(id: number) {
    try {
      const user = await User.findOne({ where: { id } });
      return user;
    } catch (error) {
      console.error(error);
      throw new Error(`Ошибка при выборе пользователя с ID ${id}`);
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

  // Удаление пользователя по ID
  public async deleteUserById(id: number) {
    try {
      const result = await User.destroy({ where: { id } });
      return result > 0;
    } catch (error) {
      console.error(error);
      throw new Error(`Ошибка при удалении пользователя с идентификатором ${id}`);
    }
  }

  // Удаление пользователя по логину
  public async deleteUserByLogin(login: string) {
    try {
      const result = await User.destroy({ where: { login } });
      return result > 0;
    } catch (error) {
      console.error(error);
      throw new Error(`Ошибка при удалении пользователя с логином ${login}`);
    }
  }

  // Обновление данных пользователя по ID
  public async updateUserById(id: number, updatedData: any) {
    try {
      const result = await User.update(updatedData, { where: { id } });
      return result[0] > 0;
    } catch (error) {
      console.error(error);
      throw new Error(`Ошибка при обновлении данных пользователя с ID ${id}`);
    }
  }

  // Обновление данных пользователя по логину
  public async updateUserByLogin(login: string, updatedData: any) {
    try {
      const result = await User.update(updatedData, { where: { login } });
      return result[0] > 0;
    } catch (error) {
      console.error(error);
      throw new Error(`Ошибка при обновлении данных пользователя с логином ${login}`);
    }
  }
}

export default new UserServices();

