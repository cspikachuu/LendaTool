'use strict';
import  { Model } from 'sequelize';

interface UserAttributes{
  id: string,
  userName: string,
  password: string,
  career: string,
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model <UserAttributes> 
  implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    userName!: string;
    password!: string;
    career: string;

    static associate(models: any) {
      // define association here
      User.hasMany(models.Tools, {
        foreignKey: "toolsLent",
        sourceKey: "id",
        constraints: false
      });
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    career: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};