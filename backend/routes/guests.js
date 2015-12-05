var express = require('express');
var router = express.Router();

router
  .get('/',function(request,response, next) {
      response.render('guest-list', { title: 'Guest List App - list guests' });
  })

  .get('/add',function(request,response, next) {
      response.render('guest-add', { title: 'Guest List App - add guests' });
  });

module.exports = router;