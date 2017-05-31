var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

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

    res.render('index', { list: students });
});

module.exports = router;
