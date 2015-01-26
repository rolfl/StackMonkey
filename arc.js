/* AutoReviewComments: http://stackapps.com/questions/2116/autoreviewcomments-pro-forma-comments-for-se */

var express = require('express');
var app = express();
var fs = require('fs');
var dataDir = './arcdata/';
var baseComments = dataDir + 'baseComments.json';

var arcRouter = express.Router();

console.log("Got " + arcRouter + " from " + express);

//arcRouter.use(function timeLog(req, res, next) {

//    console.log("Time: " + Date.now() + " Request for " + req.originalUrl + " From " + req.ip);
//    next();

//});

arcRouter.get('/', function(req, res, next) {

    // asynchronous read the base comments.
    fs.readFile(baseComments, 'utf8', function (err, data) {
        if (err) {
            return next(err);
        }
        var json;
        try {
            json = JSON.parse(data);
        } catch (parserr) {
            return next(parserr);
        }

        res.jsonp(json);
    });

});

module.exports = arcRouter;

