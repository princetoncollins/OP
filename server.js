//Dependencies.
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var http = require('http');

var port = 1337;
var mongoUri = 'mongodb://localhost:27017/op';

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


// Navigation Endpoints.


// Connections.
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log("Hey there, pawtna'! We are now connected to MongoDB at: ", mongoUri);
});

app.listen(port, function() {
  console.log('Sup, bruh. Listening on port: ', port);
});