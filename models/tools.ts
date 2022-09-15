'use strict';
import  { Model, UUIDV4 } from 'sequelize';

interface ToolAttributes{
  id: string,
  toolName: string,
  condition: string,
  type: string,
  price: number,
  rentalStatus: boolean,
  
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Tools extends Model<ToolAttributes> 
  implements ToolAttributes {
  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id!: string;
     toolName!: string;
     condition!: string;
     type: string;
     price!: number;
     rentalStatus!: boolean;
     
     
    static associate(models: any) {
      // define association here
    }
  };
  Tools.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    toolName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rentalStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Tools',
  });
  return Tools;
};