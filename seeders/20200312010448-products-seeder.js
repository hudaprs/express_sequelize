'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Products', [
    {
      name: 'Product One',
      price: 1000,
      description: 'This is product one',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Product Two',
      price: 2000,
      description: 'This is product two',
      createdAt: new Date(),
      updatedAt: new Date()  
    },
    {
      name: 'Product Three',
      price: 3000,
      description: 'This is product three',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ]);
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Products', null, {});
  }
};
