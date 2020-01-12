'use strict';

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('fileUpload'), function(req, res){
  res.json(req.file);
});

app.listen(process.env.PORT, function () {
  console.log(`Your app is listening on port ${process.env.PORT}`);
});
