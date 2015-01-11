/**
 * Created by Raza on 10/01/2015.
 */

///////// Sign In///////////
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    res.render('user/index', { title: 'Express' });
});


// signup page
router.get('/signup', function(req, res) {
    res.render('user/signup', { title: 'Express' });
});

// signup form submit
router.post('/signup', function(req, res) {

    var document = req.body;

    var users=req.app.db.collection("users");
    users.insert(document, function(err, db){
        if (err) throw err;
        console.log('Data inserted');
    });

    //console.log(fName);
    res.render('afterlogin', { title: 'Express' });

    res.redirect('/confirm-email');
});

// login page
router.get('/login', function(req, res) {
    res.render('user/login', { title: 'Express' });
});

// login form submit
router.post('/login', function(req, res) {

    // console.log("email:"+req.body.email);
    // console.log("password:"+req.body.pass);
    var collection = req.app.db.collection("users");

    collection.findOne({email : req.body.email, pwd : req.body.pass } , function(err, item) {
        console.log(item);
        if(item != null){

            req.session.email = item.email;
            req.session.uid = item._id;
            req.session.username = item.Uname;
            req.session.name = item.Fname + ' ' + item.Lname;

            res.redirect('/');
        }
        else {

            res.render('user/login', { title: 'Login', error : 'Username or Password did not match.' });
        }
    });
});

router.get('/logout', function(req, res){
    req.session.destroy(function(){
        console.log('User logged out!');
        res.redirect('/');
    });
});


router.get('/welcome', function(req, res){

    if (!req.session.uid){
        res.redirect('/');
        return;
    }

    res.send('Hello world');
});

module.exports = router;