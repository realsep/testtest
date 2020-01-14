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

    res.send("0000");
    var options = {
        host: url,
        port: 3001,
        path: 'https://gentle-crag-28693.herokuapp.com',
        method: 'POST'
    };
    http.request(options, function(res){
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk){
            console.log('BODY: ' + chunk);
        });
    }).end();
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
