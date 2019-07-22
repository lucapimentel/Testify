'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    cover_img: DataTypes.BLOB
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
  };
  return Collection;
};