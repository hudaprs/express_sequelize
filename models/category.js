'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Product, {
      as: 'products'
    })
  };
  return Category;
};