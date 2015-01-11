var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res) {

	// if (req.session.uid){
	// 	res.redirect('/user/welcome');
	// 	return;
	// }

    res.render('index', { title: 'Flashcard Learning', req: req });
});

router.get('/welcome', function(req, res) {
    res.render('index');
});

module.exports = router;
