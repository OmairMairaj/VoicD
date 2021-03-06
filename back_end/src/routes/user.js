const express = require('express');
const { signup, signin, requireSignin, profile } = require('../controller/user');
const router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);

router.post('/profile', requireSignin, profile);

module.exports = router;