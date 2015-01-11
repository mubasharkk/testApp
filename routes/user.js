/**
 * Created by Raza on 10/01/2015.
 */

///////// Sign In///////////
var express = require('express');
var router = express.Router();


//////////// Sign Up//////////
/* GET home page. */
router.get('/signup', function(req, res) {
    res.render('user/signup', { title: 'Express' });
});

router.get('/login', function(req, res) {
    res.render('user/login', { title: 'Express' });
});


router.post('/login', function(req, res) {

    console.log("email:"+req.body.email);
    console.log("password:"+req.body.pass);
    var collection = req.app.db.collection("users");

    collection.findOne({email : req.body.email, pwd : req.body.pass } , function(err, item) {
        if(item != null){
            res.send("wilkommen");
        }
        else {

            res.render('user/login', { title: 'Express', error : 'Username or Password did not match.' });
        }
    })
});

router.post('/login', function(req, res) {

    var collection = req.app.db.collection("users");

    collection.findOne({email : req.body.email, pwd : req.body.pass } , function(err, item) {
        req.app.db.close();
    })

    res.render('user/login', { title: 'Express' });
});

router.post('/signup/submit', function(req, res) {


    //var FName = req.body.Fname;
    //var FName=req.query["Fname"];
    //var LName=req.query["Lname"];
    //var UserName=req.query["Uname"];
    //var pwd=req.query["pwd"];
    //var email=req.query["email"];
    //console.log(FName+LName+UserName+pwd+email);



    var document = req.body;//{FirstName: FName,LastName:LName,UserName:UserName,password : pwd, email: email };

    var users=req.app.db.collection("users");
    users.insert(document, function(err, db){
        if (err) throw err;
        console.log('Data inserted');
    });




    //console.log(fName);
    res.render('afterlogin', { title: 'Express' });

    res.redirect('/confirm-email');
});



/**



 /////// After Login//////////

 var express = require('express');
 var router = express.Router();

 /* GET home page. */
router.get('/', function(req, res) {
    res.render('user/index', { title: 'Express' });
});




/////// Welcome///////


router.get('/welcome', function(req, res) {
    res.render('welcome', { title: 'Express' });
});



module.exports = router;

