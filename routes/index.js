var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Models = {};
Models.Person = mongoose.model('Person');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/persons', function(req,res,next) {
  Models.Person.find(function(err, persons){
    if(err){ return next(err); }

    res.json(persons);
  });
});

module.exports = router;