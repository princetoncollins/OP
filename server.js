//Dependencies.
var express = require('express');
var router = express.Router();
// var sendgrid  = require('sendgrid')(process.env.U, process.env.PASSWORD)
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var http = require('http');
var grunt = require('grunt');
var bower = require('bower');

var port = 1337;
var mongoUri = 'mongodb://localhost:27017/op';

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


// Navigation Endpoints.

// Email.
// router.get('/', function(res, req) {

// sendgrid.send({
//   to:       process.env.EMAIL,
//   from:     'other@example.com',
//   subject:  'Hello World',
//   text:     'My first email through SendGrid.'
// }, function(err, json) {
//   if (err) { return res.send('Oh no!'); }
//   res.send('Yay!');	
//   console.log(json);
// });

// });
// Connections.

module.exports = router;

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log("Hey there! We are now connected to MongoDB at: ", mongoUri);
});

app.listen(port, function() {
  console.log('Sup, bruh. Listening on port: ', port);
});