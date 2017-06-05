var express = require('express');
var router = express.Router();

var usersCtl = require('../controller/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', usersCtl.register);

router.post('/login', usersCtl.login);

module.exports = router;
