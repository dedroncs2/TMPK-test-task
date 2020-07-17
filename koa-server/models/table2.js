'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      table2.belongsTo(models.table1,{foreignKey:'contractId'} )


    }
  }
  table2.init({
    contractId:{
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    balance: DataTypes.INTEGER,
    q: DataTypes.STRING,
    w: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'table2',
  });
  return table2;
};