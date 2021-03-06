var express = require('express')
var app = express();
var http = require("http");
var server = http.Server(app);
var path = require('path');

server.listen(process.env.PORT || 5000);

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});
