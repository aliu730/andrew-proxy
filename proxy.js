const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use('/restaurant/:restaurant_id', express.static(__dirname + '/public'));

app.get('/restaurant/:restaurant_id', function(req,res,next) {
  console.log(req.url);
  next();
})

app.use('/reservations', proxy("http://localhost:3001"));

app.listen(3000, function() {
  console.log("listening to 3000")
});

module.exports = app;