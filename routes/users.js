var express = require('express');
var router = express.Router();

var usersCtl = require('../controller/users.js');

router.post('/register', usersCtl.register);


router.post('/login', usersCtl.login);

module.exports = router;
