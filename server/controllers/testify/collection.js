const router = require('express').Router();
const collectionService = require('../../services/testify/collection');

router.get('/GetAllCollections', collectionService.GetAllCollections);

module.exports = router;