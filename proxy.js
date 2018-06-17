const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const port = process.env.PORT || 3000;
const app = express();

app.use('/', function(req,res,next) {
  console.log("PROXY ROUTE", req.url);
  console.log("proxy changed");
  next();
});

app.use('/restaurant/:restaurant_id', express.static(__dirname + '/public'));

app.use('/reservations', proxy("http://cavareservations-env.sqh9cj65af.us-east-2.elasticbeanstalk.com/"));
// app.use('/overviews', proxy("http://localhost:3003"));
// app.use('/photos', proxy("http://localhost:3004"));
// app.use('/menus', proxy('http://localhost:3005'));
// app.use('/reviews', proxy('http://localhost:3002'));
app.listen(port, function() {
  console.log("listening to someproxy");
});

module.exports = app;