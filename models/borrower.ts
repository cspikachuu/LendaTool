'use strict';
import  { Model } from 'sequelize';

interface BorrowerAttributes{
  id: string,
  user: string ,//fk
  item: string ,//fk
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Borrower extends Model <BorrowerAttributes> 
  implements  BorrowerAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    user!: string;
    item!: string;
   

    static associate(models: any) {
      // define association here
      Borrower.hasMany(models.Tools, {
        foreignKey: "toolBorrowed",
        sourceKey: "id",
        constraints: false
      });
    }
  }
  Borrower.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true, 
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }, 
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Borrower',
  });
  return Borrower;
};