const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use('/', function(req,res,next) {
  console.log("PROXY ROUTE", req.url);
  next();
});

app.use('/restaurant/:restaurant_id', express.static(__dirname + '/public'));

app.use('/reservations', proxy("http://localhost:3001"));
app.use('/overviews', proxy("http://localhost:3003"));
app.listen(3000, function() {
  console.log("listening to 3000");
});

module.exports = app;