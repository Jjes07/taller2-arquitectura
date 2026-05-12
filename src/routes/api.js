const express = require('express');
const router = express.Router();
const { getApiPokenea } = require('../controllers/pokeneasController');

router.get('/', getApiPokenea);

module.exports = router;