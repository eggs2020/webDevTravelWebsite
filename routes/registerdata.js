var express = require('express');
var router = express.Router();

/* Responding to a POST request from the registration page. */
router.post('/', function(req, res, next) {
  const submittedData = [req.body.fname, req.body.lname, req.body.address1, req.body.city, req.body.prov, req.body.postCode];
  console.log('Submitted Data: ', submittedData);
  res.render('registerdata', {data: submittedData});

});

module.exports = router; 
