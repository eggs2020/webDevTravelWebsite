var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* Responding to a POST request from the registration page. */
router.post('/', function(req, res, next) {
  const contactFormData = [req.body.nameContact, req.body.emailContact, req.body.phoneContact, req.body.commentContact];
  console.log('From the form: ', contactFormData);
    
  //Inserting data from the contact-form to "contactformdata" collection in "cprg210assignpart2" database
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cprg210assignpart2");
    var myobj = { name: req.body.nameContact, email: req.body.emailContact, phone: req.body.phoneContact, message: req.body.commentContact };
    dbo.collection("contactformdata").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted to collection");
      db.close();
    });
  });

  //Finding data in the collection from a particular user and display data to console
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cprg210assignpart2");
    dbo.collection("contactformdata").findOne({}, function(err, result) {
      if (err) throw err;
      console.log('From database: ', result);
      db.close();

      //Displaying a thank you message and sending a document from collection to a pug file
      res.render('contactData',{data: result}); 
    });
  });

});
  
module.exports = router; 