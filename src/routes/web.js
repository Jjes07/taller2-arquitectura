const express = require('express');
const router = express.Router();
const { getViewPokenea } = require('../controllers/pokeneasController');

router.get('/', getViewPokenea);

module.exports = router;