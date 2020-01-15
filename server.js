var express = require('express');
var bodyParser = require('body-parser');
var https = require('https')

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
    var options = {
        host: 'https://gentle-crag-28693.herokuapp.com/search',
        path: '/search',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
//             'Content-Length': DataCue.length
        }
    };
    
    var xxx = https.request(options, function(res) {
        res.setEncoding('utf-8');
        var responseString = '';

        res.on('res', function(res) {
          responseString += res;
        });

        res.on('end', function() {
          console.log(responseString);
          var responseObject = JSON.parse(responseString);
          success(responseObject);
        });
  });

  xxx.write(data);
  xxx.end();
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
