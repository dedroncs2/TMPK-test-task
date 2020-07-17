'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data=[];
    for (let i=1;i<=50;i++)
    {
      let newdata={
        contractId: i,
        f: "f"+i,
        i: "i"+i,
        o: "o"+i,
        n: "n"+i,
        e: "e"+i,
        createdAt: new Date(),
        updatedAt: new Date()}
        data.push(newdata);
    }
    return queryInterface.bulkInsert('table1s', data);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('table1s', null, {});
  }
};
