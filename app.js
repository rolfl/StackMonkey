/*jshint node:true*/

// app.js
// This file contains the server side JavaScript code for your application.
// This sample application uses express as web application framework (http://expressjs.com/),
// and jade as template engine (http://jade-lang.com/).

// Infrastructure modules
var express = require('express');
var logger = require('morgan');
var errors = require('errorhandler');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');

var app = express();

// ///////////////////////////////
// Application configuration
// ///////////////////////////////

// There are many useful environment variables available in process.env.
// VCAP_APPLICATION contains useful information about a deployed application.
var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");
// TODO: Get application information and use it in your app.

// VCAP_SERVICES contains all the credentials of services bound to
// this application. For details of its content, please refer to
// the document or sample of each service.
var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
// TODO: Get service credentials and communicate with bluemix services.

// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = (process.env.VCAP_APP_HOST || '0.0.0.0');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views'); //optional since express defaults to CWD/views

// ///////////////////////////////
// System middleware
// ///////////////////////////////

// map method types that have been overridden (last matching one wins)
app.use(methodOverride('X-HTTP-Method'));          // Microsoft
app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
app.use(methodOverride('X-Method-Override'));      // IBM
app.use(methodOverride('_method'));

// pull out any cookie data
// populates req.cookies
app.use(cookieParser());


// ///////////////////////////////
// Application middleware
// ///////////////////////////////

var access = require('./access.js');
app.use('/', access);

var arc = require('./arc.js');
app.use('/arc/', arc);

// render index page
app.get('/', function(req, res){
	res.render('index');
});


// ///////////////////////////////
// Static content
// ///////////////////////////////

// put static last to save some file lookup time if there's a successful hit on the dynamic content
app.use(express.static(__dirname + '/public')); //setup static public directory


// ///////////////////////////////
// Server Bootstrap
// ///////////////////////////////

var server = app.listen(port, function () {

    var actHost = server.address().address;
    var actPort = server.address().port;

    console.log('Example app listening at http://%s:%s', actHost, actPort);

});

// old stuff

/*
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

// Site-specific modules

// setup middleware
var app = express();

//:app.use(app.router);
app.use(express.errorHandler());

app.use(cookieParser());
app.use(express.session({secret: process.env.SESSION_SECRET || 'This is not very secret'}));
app.use(bodyParser.urlencoded({ extended: true }));


var access = require('./access');
app.use('/access', access);


var arc = require('./arc');
app.use('/arc', arc);

// Start server
app.listen(port, host);
console.log('App started on port ' + port);

*/
