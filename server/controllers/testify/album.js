const router = require('express').Router();
const albumService = require('../../services/testify/album');

router.post('/GetAllAlbumsByCollection', albumService.GetAllAlbumsByCollection);
router.post('/RemoveAlbumFromCollection', albumService.RemoveAlbumFromCollection);
router.post('/InsertAlbumIntoCollection', albumService.InsertAlbumIntoCollection);
router.post('/EditAlbum', albumService.EditAlbum);
router.get('/GetAllAlbumsWithoutCollection', albumService.GetAllAlbumsWithoutCollection);

module.exports = router;