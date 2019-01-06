const express = require('express');

const router = express.Router();

const path = require('path');

const ctrl = require(path.join(__dirname, '../controller/index.js'));

router.get('/pages', ctrl.getPages)

module.exports = router;