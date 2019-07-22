'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    Name: DataTypes.STRING,
    Duration: DataTypes.STRING,
    Album_id: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};