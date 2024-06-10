const express = require('express');
const { signup, signin } = require('../controllers/auth.controller');

const router = express.Router();

module.exports = router.post('/signup', signup);
module.exports = router.post('/signin', signin);