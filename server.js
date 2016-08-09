var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var server = express();

server.use(bodyParser.json());

server.listen(8000);
console.log('Server is running on localhost:8080');
