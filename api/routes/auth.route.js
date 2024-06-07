const express = require('express');
const { signup } = require('../controllers/auth.controller');

const router = express.Router();

module.exports = router.post('/signup', signup);