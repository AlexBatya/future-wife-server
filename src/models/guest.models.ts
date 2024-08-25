import { DataTypes, Model } from 'sequelize';
import db from '../db';

class GuestModels extends Model {
  public id!: number;  // Уникальный идентификатор для каждой записи
  public id_guest!: number;  // Уникальный идентификатор для каждого гостя
  public full_name!: string;  // Полное имя
  public attending!: boolean;  // Будет ли гость присутствовать
  public invitation_text!: string;  // Текст приглашения
  public plus_one!: boolean;  // Плюс один
  public family!: boolean;  // С семьей
}

GuestModels.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_guest: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  attending: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  invitation_text: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  plus_one: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  family: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'Guest',
  tableName: 'guests',
  timestamps: false, // Отключаем временные метки
});

export default GuestModels;

