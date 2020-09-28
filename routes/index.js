var express = require('express');
var router = express.Router();
const randomModule = require('../models/randomModule');

/* GET home page. */
router.get('/', function(req, res, next) {
  const greeting= randomModule.randomGreeting();
  res.render('index', { randomGreeting: greeting });
});

module.exports = router;
