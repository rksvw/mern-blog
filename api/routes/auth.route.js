const express = require('express');
const { signup, signin, google } = require('../controllers/auth.controller');

const router = express.Router();

module.exports = router.post('/signup', signup);
module.exports = router.post('/signin', signin);
module.exports = router.post('/google', google);