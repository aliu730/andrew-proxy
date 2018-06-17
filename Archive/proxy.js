const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const port = process.env.PORT || 3000;
const app = express();

app.use('/', function(req,res,next) {
  next();
});

app.use('/restaurant/:restaurant_id', express.static(__dirname + '/public'));

app.use('/reservations', proxy("http://cavareservations-env.sqh9cj65af.us-east-2.elasticbeanstalk.com/"));
app.use('/overviews', proxy("http://cavatableoverviews-env.5sves92ky9.us-west-1.elasticbeanstalk.com/"));
app.use('/photos', proxy("http://localhost:3004"));
app.use('/menus', proxy('http://cavatablemenus-env.5sves92ky9.us-west-1.elasticbeanstalk.com/'));
app.use('/reviews', proxy('http://CavatableFec-env.psexkp69kr.us-west-1.elasticbeanstalk.com'));
app.listen(port, function() {
  console.log("listening to someproxy");
});

module.exports = app;