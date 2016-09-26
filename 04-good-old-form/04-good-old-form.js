/* Master Express.js and have fun!
─────────────────────────────────
 GOOD OLD FORM
 Exercise 4 of 8

Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and prints backwards the str value.

-------------------------------------------------------------------------------

Written by: Sean M Hamlet
https://github.com/seanmhamlet
*/

var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var portNumber = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
    var str = req.body.str;
    var strReversed = str.split('').reverse().join('');
    res.send(strReversed);
});

app.listen(portNumber);