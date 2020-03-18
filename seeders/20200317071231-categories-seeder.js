'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
    {
      name: 'Technology',
      description: 'This is for technology section',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sport',
      description: 'This is for sport section',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'News',
      description: 'This is for news section',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Categories', null, {})
  }
};
