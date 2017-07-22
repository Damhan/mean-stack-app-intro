var express = require('express');
var app = express();
var mongoose = require('mongoose');
const config = require('./config/database')

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could NOT connect to database:', err);
  } else {
    console.log('Connected to database: ' + config.db)
  }

});

//whenever get request is sent, we respond with "hello world"
//the / is root/homepage
app.get('*', function(req, res) {
  res.send('<h1>Damhan</h1>');
});

//listen on the port 8080 which would be http://localhost:8080
app.listen(8080, () => {
  console.log('Listening on port 8080');
});
