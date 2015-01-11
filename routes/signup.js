

/*
var express = require('express');
var router = express.Router();

/* GET home page. */

/*
router.get('/', function(req, res) {
    res.render('signup', { title: 'Express' });
});

router.post('/submit', function(req, res) {

    console.log(req.body);
    //var FName = req.body.Fname;
    //var FName=req.query["Fname"];
    //var LName=req.query["Lname"];
    //var UserName=req.query["Uname"];
    //var pwd=req.query["pwd"];
    //var email=req.query["email"];
    //console.log(FName+LName+UserName+pwd+email);



        var document = req.body;//{FirstName: FName,LastName:LName,UserName:UserName,password : pwd, email: email };
        console.log(document);
        var users=req.app.db.collection("users");
        users.insert(document, function(err, db){
            if (err) throw err;
            console.log('Data inserted');
        });




    //console.log(fName);
    res.render('afterlogin', { title: 'Express' });

    res.redirect('/confirm-email');
});


module.exports = router;
/**
 * Created by Suraj Shrestha on 12/16/2014.
 */
