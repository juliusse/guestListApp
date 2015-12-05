var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Guest List App' });
});

module.exports = function(app) {
  // view engine setup
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');

  // Add routes
  app.use('/', router);
};