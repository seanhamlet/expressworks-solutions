/*
 STATIC
 Exercise 2 of 8

Apply static middleware to serve index.html file without any routes.

Your solution must listen on the port number supplied by process.argv[2].

The index.html file is provided and usable via the path supplied by
process.argv[3]. However, you can use your own file with this content:

    <html>
      <head>
        <title>expressworks</title>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
      </head>
      <body>
        <p>I am red!</p>
      </body>
    </html>

-------------------------------------------------------------------------------

Written by: Sean M Hamlet
https://github.com/seanmhamlet
*/
var express = require('express');
var path    = require('path');
var app = express();

var portNumber = process.argv[2];
var staticSite = process.argv[3];

app.use(express.static(staticSite||path.join(__dirname, 'public')));

app.listen(portNumber);