var express = require('express');
var bodyParser = require('body-parser');
var Assessment = require('../app/models/assessment');

const port = 5000;

var app = new express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res, next) {
    // res.sendFile('/search.html', { ro,ot: __dirname });
    // res.redirect('https://ff55bb19.ngrok.io');

//     res.sendFile('/searchliff.html', { root: __dirname });
});
app.post('/liff', function(req, res, next) {
    res.send("00000");
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
