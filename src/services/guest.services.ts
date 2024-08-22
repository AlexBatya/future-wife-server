import GuestModels from '../models/guest.models';

class GuestServices {
  // Получение всех данных из таблицы
  public async getAllGuests() {
		try {
			const guests = await GuestModels.findAll();
			return guests;
		} catch (error) {
			console.log(error);
			throw new Error('Ошибка при выборке всех гостей');
		}
  }

  // Получить строку по ФИО гостя
  public async getGuestByName(full_name: string) {
		try {
			const guest = await GuestModels.findOne({ where: { full_name } });
			return guest;
		} catch (error) {
			throw new Error(`Ошибка при выборе гостя с именем ${full_name}`);
		}
  }

  // Добавление гостя
  public async addGuest(guestData: any) {
		try {
			const newGuest = await GuestModels.create(guestData);
			return newGuest;
		} catch (error) {
			throw new Error('Ошибка при добавлении нового гостя');
		}
  }

  // Удаление гостя
  public async deleteGuest(id: number) {
		try {
			const result = await GuestModels.destroy({ where: { id } });
			return result > 0;
		} catch (error) {
			throw new Error(`Ошибка при удалении гостя с идентификатором ${id}`);
		}
  }

  // Редактирование информации о госте
  public async updateGuest(id: number, updatedData: any) {
		try {
			const result = await GuestModels.update(updatedData, { where: { id } });
			return result[0] > 0;
		} catch (error) {
			throw new Error(`Ошибка при обновлении гостевого идентификатора ${id}`);
		}
  }
}

export default new GuestServices();

