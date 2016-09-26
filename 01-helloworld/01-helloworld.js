/* Master Express.js and have fun!
─────────────────────────────────
 HELLO WORLD!
 Exercise 1 of 8

Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

The port number will be provided to you by expressworks as the first argument of
the application, ie. process.argv[2].

-------------------------------------------------------------------------------

Written by: Sean M Hamlet
https://github.com/seanmhamlet
*/

var express = require('express');
var app = express();

var portNumber = process.argv[2];

app.get('/home', function(req, res) {
    res.end('Hello World!')
});

app.listen(portNumber);