var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var textBuffer = new Buffer(fs.readFileSync('index.html'));

var outputText = textBuffer.toString();

app.get('/', function(request, response) {
  response.send(outputText);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
