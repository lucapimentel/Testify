const collectionController = require('../../controllers/testify/collection');
const albumController = require('../../controllers/testify/album');
const songController = require('../../controllers/testify/song');
const router = require('express').Router();

router.use('/collection', collectionController);
router.use('/album', albumController);
router.use('/song', songController);

module.exports = router;
