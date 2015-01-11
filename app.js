var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


//For database
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://127.0.0.1:27017/flashcard', function(err, db) {
    if (err) {
        console.log("before connection error");

        throw err;
        console.log(err)
        console.log("after connection error");
    }
    else {
        console.log("connection successful");
        app.db = db;
}});




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


var routes = require('./routes/index');
var userRoutes = require('./routes/user');

app.use('/', routes);
app.use('/user', userRoutes);


// catch 404 and forward to error handler
// error handlers
app.use(function(req, res, next) {
    next(req, res);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        //console.log(err);
        res.render('global/error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

// /signup/
var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().post;

    console.log("Server running at port " + port);
});

module.exports = app;