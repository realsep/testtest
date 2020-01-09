var express = require('express');
var bodyParser = require('body-parser');

const port = 5000;

var app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + process.env.PORT || port);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res) {
    // res.sendFile('/search.html', { root: __dirname });
    // res.redirect('https://ff55bb19.ngrok.io');

//     res.sendFile('/searchliff.html', { root: __dirname });
});
app.post('/liff', function(req, res) {
    res.send("00000");
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
