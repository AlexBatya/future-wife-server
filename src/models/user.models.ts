import { DataTypes, Model } from 'sequelize';
import db from '../db';  // Импортируйте ваше подключение к базе данных

class User extends Model {
  public id!: number;
  public status!: 'admin' | 'user';
  public login!: string;
  public password!: string;
}

User.init({
  id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
  },
  status: {
		type: DataTypes.ENUM('admin', 'user'),
		allowNull: false,
  },
  login: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
  },
  password: {
		type: DataTypes.STRING(255),
		allowNull: false,
  },
}, {
  sequelize: db, // Подключение к базе данных
  modelName: 'User',
  tableName: 'users',
  timestamps: false, // Отключаем временные метки
});

export default User;
