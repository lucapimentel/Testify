'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    Name: DataTypes.STRING,
    Artist: DataTypes.STRING,
    cover_img: DataTypes.STRING,
    collection_id: DataTypes.INTEGER
  }, {});
  Album.associate = function (models) {
    Album.hasMany(models.Song, {
      foreignKey: 'album_id',
      sourceKey: 'id'
    });
  };
  return Album;
};