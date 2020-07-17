'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data=[];
    for (let i=1;i<=50;i++)
    {
      let newdata= {
        contractId: i,
        balance: 1111 + i,
        q: "q" + i,
        w: "w" + i,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      data.push(newdata);
    }
      return queryInterface.bulkInsert('table2s', data);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('table2s', null, {});
  }
};
