var express = require('express');
var bodyParser = require('body-parser');

const port = 5000;

var app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

    res.sendFile('/searchliff.html', { root: __dirname });
});
app.post('/liff', function(req, res) {
    res.send("0000");
   
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
