/* AutoReviewComments: http://stackapps.com/questions/2116/autoreviewcomments-pro-forma-comments-for-se */

var fs = require('fs');
var dataDir = './arcdata/';
var baseComments = dataDir + 'baseComments.json'

exports.base = function(req, res, next) {
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
}

