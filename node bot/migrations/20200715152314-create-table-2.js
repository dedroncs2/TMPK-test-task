'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('table2s', {
      contractId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'table1s',
          key: 'contractId' },
        primaryKey: true
      },
      balance: {
        type: Sequelize.INTEGER
      },
      q: {
        type: Sequelize.STRING
      },
      w: {
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
    await queryInterface.dropTable('table2s');
  }
};