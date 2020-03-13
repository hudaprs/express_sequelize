'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [{
     name: 'Huda Prasetyo',
     username: 'username',
     password: 'r4h4514',
     createdAt: new Date(),
     updatedAt: new Date()
   }])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {})
  }
};
