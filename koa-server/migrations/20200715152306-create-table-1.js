'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('table1s', {
      contractId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      f: {
        type: Sequelize.STRING
      },
      i: {
        type: Sequelize.STRING
      },
      o: {
        type: Sequelize.STRING
      },
      n: {
        type: Sequelize.STRING
      },
      e: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('table1s');
  }
};