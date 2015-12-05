var express = require('express');
var router = express.Router();
var Guest = require('../models/guests');

/* GET users listing. */
router
  .get('/', function(request, response, next) {
    var query = {};
    if( request.query.name ) {
      var regex = new RegExp(request.query.name);
      query.$or = [
        {
          name: regex
        },
        {
          email: regex
        }
      ];
    }

    Guest.find(query, function(error, result) {
      if( error ) {
        response.status = 400;
        return response.json(error);
      }

      response.status = 200;
      response.json(result);
    });
  })

  .post('/', function(request, response, next) {
    console.log(request);
    var g = new Guest(request.body);
    g.save(function(error, result) {
      if( error ) {
        response.status = 400;
        return response.json(error);
      }

      response.status = 200;
      response.json(g);
    });
  });

module.exports = router;
