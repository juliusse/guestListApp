var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var mockPersons = [
    'Epifania Crossland'
    , 'Glenna Coverdale'
    , 'Jacinto Rozek'
    , 'Camie Alls'
    , 'Royal Daniele'
    , 'Priscila Mckenzie'
    , 'Renetta Jain'
    , 'Maren Romney'
    , 'Caren Reineke'
    , 'Mayra Spinelli'
    , 'Margeret Bahr'
    , 'Patrick Gratton'
    , 'Elvia Sardina'
    , 'Myrta Croll'
    , 'Lesley Teller'
    , 'Lucila Shiba'
    , 'Annalisa Mingo'
    , 'Ailene Markey'
    , 'Yvone Goodin'
    , 'Ludie Hawn'
    , 'Consuela Brinn'
    , 'Melynda Raya'
    , 'Kia Buford'
    , 'Amanda Muniz'
    , 'Lenita Franzen'
    , 'Chantell Capra'
    , 'Cami Simo'
    , 'Vinnie Duhon'
    , 'Elvera Margolin'
    , 'Sergio Maney'
    , 'Rosette Rubenstein'
    , 'Haywood Colman'
    , 'Linnea Riess'
    , 'Shavonda Trickey'
    , 'Emanuel Lever'
    , 'Will Kost'
    , 'Jana Kiker'
    , 'Laveta Francoeur'
    , 'Carita Klinge'
    , 'Herlinda Carrara'
    , 'Maria Orzechowski'
    , 'Mirian Colvard'
    , 'Damaris Sigman'
    , 'Annalee Strang'
    , 'Brigid Whisman'
    , 'Madelyn Munro'
    , 'Leia Marson'
    , 'Pablo Bachicha'
    , 'Erlinda Huson'
    , 'Twanda Broderson'
];

var Models = {};
Models.Person = mongoose.model('Person');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/persons', function (req, res, next) {
    /*Models.Person.find(function (err, persons) {
        if (err) {
            return next(err);
        }

        res.json(persons);
    });*/
    var mockObjects = [];

    for(i in mockPersons) {
        var mockPerson = {};
        mockPerson.name = mockPersons[i];
        mockPerson.email = mockPerson.name.replace(' ','.') + '@example.com';
        mockObjects.push(mockPerson);
    }
    res.json(mockObjects);
});

router.post('/person', function (req, res, next) {
    Models.Person.insert(function (err, persons) {
        if (err) {
            return next(err);
        }

        res.json(persons);
    });
});

module.exports = router;