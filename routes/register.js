var express = require('express');
var router = express.Router();
//const data = require('../models/data');

/* GET contact page. */
router.get('/', function(req, res, next) {

    res.render('register', { title: 'registration page' });
    
});

module.exports = router;
