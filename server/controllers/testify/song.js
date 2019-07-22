const router = require('express').Router();
const songService = require('../../services/testify/song');

router.post('/GetSongsByAlbum', songService.GetSongsByAlbum);

module.exports = router;