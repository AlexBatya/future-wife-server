import FamilyModel from '../models/family.models';
import logger from '../logger';

class FamilyService {
  public async getAllFamilies() {
    logger.info('Запрос на получение всех семей из сервиса');
    try {
      const families = await FamilyModel.findAll();
      return families;
    } catch (error) {
      logger.error(`Ошибка при выборке всех семей из сервиса: ${error.message}`);
      throw new Error('Ошибка при выборке всех семей');
    }
  }

  public async getFamilyByName(family_name: string) {
    logger.info(`Запрос на получение семьи по имени ${family_name} из сервиса`);
    try {
      const family = await FamilyModel.findOne({ where: { family_name } });
      return family;
    } catch (error) {
      logger.error(`Ошибка при выборе семьи с именем ${family_name} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при выборе семьи с именем ${family_name}`);
    }
  }

  public async getFamilyById(id: number) {
    logger.info(`Запрос на получение семьи по ID ${id} из сервиса`);
    try {
      const family = await FamilyModel.findOne({ where: { id } });
      return family;
    } catch (error) {
      logger.error(`Ошибка при выборе семьи с ID ${id} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при выборе семьи с ID ${id}`);
    }
  }

  public async addFamily(familyData: any) {
    logger.info('Запрос на добавление новой семьи из сервиса');
    try {
      const newFamily = await FamilyModel.create(familyData);
      return newFamily;
    } catch (error) {
      logger.error(`Ошибка при добавлении новой семьи из сервиса: ${error.message}`);
      throw new Error('Ошибка при добавлении новой семьи');
    }
  }

  public async deleteFamily(family_name: string) {
    logger.info(`Запрос на удаление семьи по имени ${family_name} из сервиса`);
    try {
      const result = await FamilyModel.destroy({ where: { family_name } });
      return result > 0;
    } catch (error) {
      logger.error(`Ошибка при удалении семьи с именем ${family_name} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при удалении семьи с именем ${family_name}`);
    }
  }

  public async deleteFamilyById(id: number) {
    logger.info(`Запрос на удаление семьи по ID ${id} из сервиса`);
    try {
      const result = await FamilyModel.destroy({ where: { id } });
      return result > 0;
    } catch (error) {
      logger.error(`Ошибка при удалении семьи с ID ${id} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при удалении семьи с ID ${id}`);
    }
  }

  public async updateFamily(family_name: string, updatedData: any) {
    logger.info(`Запрос на обновление семьи с именем ${family_name} из сервиса`);
    try {
      const result = await FamilyModel.update(updatedData, { where: { family_name } });
      return result[0] > 0;
    } catch (error) {
      logger.error(`Ошибка при обновлении семьи с именем ${family_name} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при обновлении семьи с именем ${family_name}`);
    }
  }

  public async updateFamilyById(id: number, updatedData: any) {
    logger.info(`Запрос на обновление семьи с ID ${id} из сервиса`);
    try {
      const result = await FamilyModel.update(updatedData, { where: { id } });
      return result[0] > 0;
    } catch (error) {
      logger.error(`Ошибка при обновлении семьи с ID ${id} из сервиса: ${error.message}`);
      throw new Error(`Ошибка при обновлении семьи с ID ${id}`);
    }
  }
}

export default new FamilyService();

