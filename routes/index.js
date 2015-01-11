var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res) {
    res.render('index', { title: 'Flashcard Learning' });
});

router.get('/welcome', function(req, res) {
    res.render('welcome');
});

module.exports = router;
