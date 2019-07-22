const model = require('../../models');

function GetSongsByAlbum(req, res) {

    let { albumId } = req.body;

    model.Song.findAll({
        where: {
            album_id: albumId
        }
    })
        .then(songs => res.json({
            error: false,
            data: songs
        }))
        .catch(error => console.log(error));
};


module.exports = {
    GetSongsByAlbum: GetSongsByAlbum
};