var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('afterlogin', { title: 'Express' });
});

module.exports = router;
/**
 * Created by Suraj Shrestha on 12/16/2014.
 */
