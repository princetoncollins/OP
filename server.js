//Dependencies.
var express = require('express');
var router = express.Router();
// var sendgrid  = require('sendgrid')(process.env.U, process.env.PASSWORD)
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var http = require('http');
var grunt = require('grunt');
var path = require('path');
var fs = require('fs');
var dotenv = require('dotenv');

var port = 1338;
var mongoUri = 'mongodb://localhost:27017/op';

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//404 Response.

function send404Response(response) {
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: Couldn't find the flippin' page! ARGH!");
	response.end();
}

//200 Response.

function onRequest(request, response) {
	console.log('A user has made a request!' + request.url);
	response.writeHead(200, {"Content-Type": "text/plain" });
	response.end();
}

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + 'index.html'));
    res.render('index.html');
});



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
  console.log('Oooooohhtaaayy! Listening on port: ', port);
});