var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('dist'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/i.html');
});

app.listen(8888, () => console.log('app is on http://localhost:8888'));
