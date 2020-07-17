'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  table1.init({
    contractId:{
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    f: DataTypes.STRING,
    i: DataTypes.STRING,
    o: DataTypes.STRING,
    n: DataTypes.STRING,
    e: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'table1',
  });
  return table1;
};