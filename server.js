'use strict';
require('dotenv').config()
var express = require('express');
var cors = require('cors');

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/api/test', function(req, res){
  res.json({message: "Test endpoint working"});
});

app.listen(process.env.PORT, function () {
  console.log(`Your app is listening on port ${process.env.PORT}`);
});
