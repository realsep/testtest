var express = require('express');
var bodyParser = require('body-parser');

const port = 5000;

var app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    // res.sendFile('/search.html', { root: __dirname });
    // res.redirect('https://ff55bb19.ngrok.io');

    res.sendFile('/searchliff.html', { root: __dirname });
});
app.post('/liff', function(req, res) {

    // res.send("0000");
    const request = require('request');
    request('https://stormy-spire-09445.herokuapp.com/test', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }

    });
    const rp = require('request-promise');
    rp('https://stormy-spire-09445.herokuapp.com/test').then(body => {
        console.log(body)
    }).catch(err => {
        console.log(err);
    });
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
