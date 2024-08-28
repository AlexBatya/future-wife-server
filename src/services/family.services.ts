// src/services/family.services.ts
import FamilyModel from '../models/family.models';

class FamilyService {
  // Получение всех данных из таблицы family
  public async getAllFamilies() {
    try {
      const families = await FamilyModel.findAll();
      return families;
    } catch (error) {
      console.error(error);
      throw new Error('Ошибка при выборке всех семей');
    }
  }

  // Получение записи по названию семьи
  public async getFamilyByName(family_name: string) {
    try {
      const family = await FamilyModel.findOne({ where: { family_name } });
      return family;
    } catch (error) {
      throw new Error(`Ошибка при выборе семьи с именем ${family_name}`);
    }
  }

  // Получение записи по ID
  public async getFamilyById(id: number) {
    try {
      const family = await FamilyModel.findOne({ where: { id } });
      return family;
    } catch (error) {
      throw new Error(`Ошибка при выборе семьи с ID ${id}`);
    }
  }

  // Добавление новой семьи
  public async addFamily(familyData: any) {
    try {
      const newFamily = await FamilyModel.create(familyData);
      return newFamily;
    } catch (error) {
      throw new Error('Ошибка при добавлении новой семьи');
    }
  }

  // Удаление записи о семье по имени
  public async deleteFamily(family_name: string) {
    try {
      const result = await FamilyModel.destroy({ where: { family_name } });
      return result > 0;
    } catch (error) {
      throw new Error(`Ошибка при удалении семьи с именем ${family_name}`);
    }
  }

  // Удаление записи о семье по ID
  public async deleteFamilyById(id: number) {
    try {
      const result = await FamilyModel.destroy({ where: { id } });
      return result > 0;
    } catch (error) {
      throw new Error(`Ошибка при удалении семьи с ID ${id}`);
    }
  }

  // Обновление информации о семье по имени
  public async updateFamily(family_name: string, updatedData: any) {
    try {
      const result = await FamilyModel.update(updatedData, { where: { family_name } });
      return result[0] > 0;
    } catch (error) {
      throw new Error(`Ошибка при обновлении семьи с именем ${family_name}`);
    }
  }

  // Обновление информации о семье по ID
  public async updateFamilyById(id: number, updatedData: any) {
    try {
      const result = await FamilyModel.update(updatedData, { where: { id } });
      return result[0] > 0;
    } catch (error) {
      throw new Error(`Ошибка при обновлении семьи с ID ${id}`);
    }
  }
}

export default new FamilyService();

