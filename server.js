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
    
    res.send("Online");
});
app.post('/liff', function(req, res) {

    res.send("0000");
});

app.listen(port, function() {
    console.log('Node start on port : ' + port);
});
