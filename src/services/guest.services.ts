import GuestModels from '../models/guest.models';
import logger from '../logger';

class GuestServices {
  public async getAllGuests() {
    logger.info('Запрос на получение всех гостей из сервиса');
    try {
      const guests = await GuestModels.findAll();
      return guests;
    } catch (error) {
      logger.error(`Ошибка при выборке всех гостей из сервиса: ${error.message}`);
      throw new Error('Ошибка при выборке всех гостей');
    }
  }

  public async getGuestByName(full_name: string) {
    logger.info(`Запрос на получение гостя по имени ${full_name} из сервиса`);
    try {
      const guest = await GuestModels.findOne({ where: { full_name } });
      return guest;
    } catch (error) {
      logger.error(`Ошибка при выборе гостя с именем ${full_name} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при выборе гостя с именем ${full_name}`);
    }
  }

	public async getGuestsByIdGuest(id_guest: number) {
			logger.info(`Запрос на получение гостей по ID гостя ${id_guest} из сервиса`);
			try {
					const guests = await GuestModels.findAll({ where: { id_guest } });
					return guests;
			} catch (error) {
					logger.error(`Ошибка при выборе гостей с ID гостя ${id_guest} из сервиса: ${error.message}`);
					throw new Error(`Ошибка при выборе гостей с ID гостя ${id_guest}`);
			}
	}

  public async getGuestById(id: number) {
    logger.info(`Запрос на получение гостя по ID ${id} из сервиса`);
    try {
      const guest = await GuestModels.findOne({ where: { id } });
      return guest;
    } catch (error) {
      logger.error(`Ошибка при выборе гостя с ID ${id} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при выборе гостя с ID ${id}`);
    }
  }

  public async addGuest(guestData: any) {
    logger.info('Запрос на добавление нового гостя из сервиса');
    try {
      const newGuest = await GuestModels.create(guestData);
      return newGuest;
    } catch (error) {
      logger.error(`Ошибка при добавлении нового гостя из сервиса: ${error.message}`);
      throw new Error('Ошибка при добавлении нового гостя');
    }
  }

  public async deleteGuest(full_name: string) {
    logger.info(`Запрос на удаление гостя по имени ${full_name} из сервиса`);
    try {
      const result = await GuestModels.destroy({ where: { full_name } });
      return result > 0;
    } catch (error) {
      logger.error(`Ошибка при удалении гостя с именем ${full_name} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при удалении гостя с именем ${full_name}`);
    }
  }

  public async deleteGuestById(id: number) {
    logger.info(`Запрос на удаление гостя по ID ${id} из сервиса`);
    try {
      const result = await GuestModels.destroy({ where: { id } });
      return result > 0;
    } catch (error) {
      logger.error(`Ошибка при удалении гостя с ID ${id} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при удалении гостя с ID ${id}`);
    }
  }

  public async deleteGuestByIdGuest(id_guest: number) {
    logger.info(`Запрос на удаление гостя по ID гостя ${id_guest} из сервиса`);
    try {
      const result = await GuestModels.destroy({ where: { id_guest } });
      return result > 0;
    } catch (error) {
      logger.error(`Ошибка при удалении гостя с ID гостя ${id_guest} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при удалении гостя с ID гостя ${id_guest}`);
    }
  }

  public async updateGuest(full_name: string, updatedData: any) {
    logger.info(`Запрос на обновление гостя с именем ${full_name} из сервиса`);
    try {
      const result = await GuestModels.update(updatedData, { where: { full_name } });
      return result[0] > 0;
    } catch (error) {
      logger.error(`Ошибка при обновлении гостя с именем ${full_name} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при обновлении гостя с именем ${full_name}`);
    }
  }
}

export default new GuestServices();

