const model = require('../../models');

function GetAllAlbumsByCollection(req, res) {

    let { collectionId } = req.body;

    model.Album.findAll({
        include: [
            {
                model: model.Song
            }
        ],
        where: {
            collection_id: collectionId
        }
    })
        .then(Album => res.json({
            error: false,
            data: Album
        }))
        .catch(error => console.log(error));

};

function GetAllAlbumsWithoutCollection(req, res) {

    model.Album.findAll({
        include: [
            {
                model: model.Song
            }
        ],
        where: {
            collection_id: null
        }
    })
        .then(Album => res.json({
            error: false,
            data: Album
        }))
        .catch(error => console.log(error));
};


function RemoveAlbumFromCollection(req, res) {

    let { id, collection_id } = req.body;

    model.Album.update({
        collection_id: null,
    }, {
            where: { id: id, collection_id: collection_id },
        }).then(Album => res.json({
            error: false,
            data: id
        })).catch(error => console.log(error));
};

function InsertAlbumIntoCollection(req, res) {

    let { id, collection_id } = req.body;

    model.Album.update({
        collection_id: collection_id,
    }, {
            where: { id: id },
        }).then(Album => res.json({
            error: false,
            data: id
        })).catch(error => console.log(error));

};


function EditAlbum(req, res) {

    let { id, Name, cover_img, Artist } = req.body;

    model.Album.update({
        Name: Name,
        cover_img: cover_img,
        Artist: Artist
    }, {
            where: { id: id },
        }).then(Album => res.json({
            error: false,
            data: id
        })).catch(error => console.log(error));
};



module.exports = {
    GetAllAlbumsByCollection: GetAllAlbumsByCollection,
    RemoveAlbumFromCollection: RemoveAlbumFromCollection,
    GetAllAlbumsWithoutCollection: GetAllAlbumsWithoutCollection,
    InsertAlbumIntoCollection: InsertAlbumIntoCollection,
    EditAlbum: EditAlbum
};