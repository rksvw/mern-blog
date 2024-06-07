const express = require('express');
const { getTest } = require('../controllers/user.controller');
const router = express.Router();

module.exports = router.get('/test', getTest);