var express = require('express');
var router = express.Router();

router.get('/add',function(request,response, next) {
    response.render('add-guest', { title: 'Guest List App - add guests' });
});

module.exports = router;