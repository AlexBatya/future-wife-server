import { DataTypes, Model } from 'sequelize';
import db from '../db';

class FamilyModel extends Model {
  public id!: number;           // Уникальный идентификатор для каждой записи
  public family_name!: string;  // Название семьи
  public text!: string;         // Текстовое поле
  public presence!: boolean;    // Присутствие (true или false)
}

FamilyModel.init({
  id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
  },
  family_name: {
		type: DataTypes.STRING,
		allowNull: false,
  },
  text: {
		type: DataTypes.STRING,
		allowNull: true,
  },
  presence: {
		type: DataTypes.BOOLEAN,
		allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'Family',
  tableName: 'family',
  timestamps: false, // Отключаем временные метки
});

export default FamilyModel;
