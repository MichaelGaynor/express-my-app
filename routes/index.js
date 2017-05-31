var express = require('express');
var router = express.Router();
var request = require('request');

const students = [
    'Chris',
    'Carla',
    'Drew',
    'Hayes',
    'Chad',
    'Michael',
    'Stephen',
    'Shane',
    'Nick',
    'Yingrong',
    'Daniel',
    'Porscha',
    'Guido',
    'Merilee',
    'Marissa',
    'Ian']

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { list: students });
});

// GET reverse page
router.get('/reverse', function(req, res, next) {
    res.render('reverse', {list: students});
})

module.exports = router;
