/* AutoReviewComments: http://stackapps.com/questions/2116/autoreviewcomments-pro-forma-comments-for-se */

var express = require('express');
var app = express();

var accessRouter = express.Router();

console.log("Got " + accessRouter);

//arcRouter.use(function timeLog(req, res, next) {

//    console.log("Time: " + Date.now() + " Request for " + req.originalUrl + " From " + req.ip);
//    next();

//});

accessRouter.get('/logout', function(req, res, next) {

    res.render('access/index');

});

module.exports = accessRouter;

