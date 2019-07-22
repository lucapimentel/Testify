const router = require('express').Router();
const testifyApiController = require('./testify');

router.use('/testify', testifyApiController);

module.exports = router;