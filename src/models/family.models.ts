// src/models/family.models.ts
import { DataTypes, Model } from 'sequelize';
import db from '../db';

class FamilyModel extends Model {
  public id!: number;
  public family_name!: string;
  public text!: string;
  public presence!: boolean;
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
  timestamps: false,
});

export default FamilyModel;

