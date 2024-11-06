const express = require('express');
const dataRouter = require('./check');
const userData = require('./datauser');

const router = express.Router();

router.use('/', dataRouter);
router.use('/', userData);


module.exports = router;